<script setup lang="ts">
import { getImageUrl } from '@/utils/images';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import WebApp from '@twa-dev/sdk';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import { formatNumberWithSpaces } from '@/utils/data';

const emit = defineEmits(['closeTaps'])
defineProps<{ earnPerTapGettersFront: number, availableTapsGetters: number, maxTapsGetters: number }>()

const appStore = useApplicationStore()
const { availableTapsGetters, mainBalanceUserGetters } = storeToRefs(appStore)
const { minusAvailableTaps, plusAvailableTaps } = appStore

const intervalAvailableTaps = ref<any>(null)

watch(() => availableTapsGetters.value, (newVal) => {
  if (newVal && newVal < 200) {
    if (!intervalAvailableTaps.value) {
      intervalAvailableTaps.value = setInterval(() => {
        if (intervalAvailableTaps.value >= 200) {
          clearInterval(intervalAvailableTaps.value)
        } else {
          plusAvailableTaps()
        }
        
      }, 1000)
    }
  }
})

const textGeneratedRef = ref<any>()
const scrollbarContainer = ref()
const scrollbarRef = ref()
const keyboardContainer = ref()
const textGenerated = ref('')
const activeAutoCoding = ref(false)
const pressAutoCoding = ref(false)
const pressClassBtnOff = ref('')
function generateMatrixSymbol() {
  const characters = 'абвгде ёж зийкл м нопр сту фхц чшщъыьэюяA BCDEFGHIJKLMNOPQ RSTUVWXYZ 123 4567890 {}@!%[]()^$';
  return characters.charAt(Math.floor(Math.random() * characters.length));
}
const whiteText = () => {
  const symbol = generateMatrixSymbol()
  textGenerated.value += symbol
  textGeneratedRef.value.textContent = textGenerated.value
  console.log('scrollbarContainer.value.scrollHeight', scrollbarContainer.value.scrollHeight)
  const scrollbar: any = document.querySelector('.scrollbarRef .n-scrollbar-content')
  scrollbarRef.value.scrollTo(0, scrollbar.scrollHeight)
}

onMounted(() => {
  WebApp.BackButton.show()
})
WebApp.BackButton.onClick(() => {
  emit('closeTaps')
})

// Функция для создания объекта кнопки
function createButtonObject(buttonName: string, buttonLength: number) {
  return {
    name: buttonName,
    length: buttonLength,
    class: ''
  };
}

const buttonsArray = ref([
  createButtonObject('esc', 80),
  createButtonObject('1', 30),
  createButtonObject('2', 30),
  createButtonObject('3', 30),
  createButtonObject('4', 30),
  createButtonObject('5', 30),
  createButtonObject('6', 30),
  createButtonObject('7', 30),
  createButtonObject('8', 30),
  createButtonObject('9', 30),
  createButtonObject('A', 30),
  createButtonObject('B', 30),
  createButtonObject('C', 30),
  createButtonObject('D', 30),
  createButtonObject('E', 30),
  createButtonObject('F', 30),
  createButtonObject('G', 30),
  createButtonObject('H', 30),
  createButtonObject('I', 30),
  createButtonObject('J', 30),
  createButtonObject('K', 30),
  createButtonObject('shift', 60),
  createButtonObject('alt', 60),
  createButtonObject('space', 300),
])

const balanceRef = computed(() => {
  if (mainBalanceUserGetters.value) {
    return Number(mainBalanceUserGetters.value / 100).toFixed(2)
  } else {
    return 0
  }
})

const clickbtnPress = (e: any, index: number) => {
  e.preventDefault()
  // buttonsArray.value.forEach((item) => {
  //   item.class = ''
  // })
  // buttonsArray.value[index].class = 'press-key'
}

const clickbtn = (e: any, index: number) => {
  e.preventDefault()
  // buttonsArray.value.forEach((item) => {
  //   item.class = ''
  // })
  // whiteText()
  // buttonsArray.value[index].class = ''
}

const intervalAutoCoding = ref<any>(null)

const autoCodingStart = (e: any) => {
  e.preventDefault()
  pressAutoCoding.value = true
  intervalAutoCoding.value = setInterval(() => {
    WebApp.HapticFeedback.impactOccurred('medium')
    minusAvailableTaps()
    whiteText()
  }, 100)
}

const autoCodingEnd = (e: any) => {
  e.preventDefault()
  pressAutoCoding.value = false
  clearInterval(intervalAutoCoding.value)
}

const pointerEvent = (e: any, index: number) => {
  if (availableTapsGetters.value > 0) {
    e.preventDefault()
    console.log('111111111111111')
    buttonsArray.value[index].class = 'press-key'
    //  buttonsArray.value.forEach((item) => {
    //     item.class = ''
    //   })
    setTimeout(() => {
      buttonsArray.value[index].class = ''
    }, 30)
    WebApp.HapticFeedback.impactOccurred('medium')
    minusAvailableTaps()
    whiteText()
  }

}

const moveNone = (e: { preventDefault: () => void; }) => {
  e.preventDefault()
}

const closePad = (type: 'start' | 'end') => {
  if (type === 'start') {
    pressClassBtnOff.value = 'press'
  }
  if (type === 'end') {
    pressClassBtnOff.value = ''
    emit('closeTaps')
  }
  
}

onMounted(() => {
})

onUnmounted(() => {
  WebApp.BackButton.hide()
})
</script>

<template>
  <div class="flex flex-col justify-between relative w-full h-full pb-[16px]">
    <div class="flex flex-col">
      <div class="flex mb-[8px] overflow-hidden relative">
        <div ref="scrollbarContainer" class="screen rounded-[16px]">
          <n-scrollbar ref="scrollbarRef" class="scrollbarRef" style="max-height: 260px">
            <p ref="textGeneratedRef" class="break-words">{{ textGenerated }}</p>
          </n-scrollbar>
        </div>
      </div>
      <div class="flex items-center mb-[16px] px-[8px]">
        <div class="flex items-center p-[4px]" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
          <img :src="getImageUrl('svg/coin-default.svg')" class="w-[30px] min-w-[30px] h-auto object-contain mr-[8px]" alt="" />
          <span class="text-[14px] font-[600] text-[#fff] leading-[20px]">
            {{ formatNumberWithSpaces(Number(balanceRef)) }}
            <sup class="font-[400]">{{ ' $' }}</sup>
          </span>
        </div>

      </div>
      <div class="flex w-full mb-[16px]">
        <div class="flex items-center block-style1">
          <span class="text-[14px] text-[#fbdd87]">{{ 'DevCat-Pad' }}</span>
        </div>
        <div class="flex items-center block-style2">
          <span class="text-[14px] text-[#fbdd87]">{{ '$/tap:' }}</span>
          <span class="text-[#fff] text-[14px]">{{ ' ' + earnPerTapGettersFront + '$' }}</span>
        </div>
        <div class="flex items-center block-style2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fbdd87" viewBox="0 0 24 24">
            <path d="M13 2L3 14h8v8l10-12h-8z"></path>
          </svg>
          <span class="text-[14px] text-[#fbdd87]">{{ ':' }}</span>
          <span class="text-[#fff] text-[14px]">{{ availableTapsGetters + '/' + maxTapsGetters }}</span>
        </div>
      </div>
      <div
        ref="keyboardContainer"
        class="w-full flex justify-center items-center rounded-[16px] keyboard-block p-[4px] mb-[16px] relative"
        style="touch-action: none !important;user-select: none;"
      >
        <div v-if="availableTapsGetters <= 0" class="absolute left-0 top-0 w-full h-full bg-[#000000b3] flex justify-center items-center">
          <span class="text-[#fff] text-[22px]">{{ 'Need Energy. Please wait...' }}</span>
        </div>
        <div v-if="activeAutoCoding && availableTapsGetters > 0" class="absolute left-0 top-0 w-full h-full bg-[#000000b3] flex justify-center items-center" @touchstart="autoCodingStart" @touchend="autoCodingEnd">
          <span :class="pressAutoCoding ? 'text-[#ffffffa6] text-[20px]' : 'text-[#fff] text-[22px]'">{{ 'press and hold to start' }}</span>
        </div>
        <div
          class="w-full flex flex-wrap gap-[4px]"
          style="touch-action: none !important;user-select: none;"
          @touchmove="moveNone"
        >
          <div
            v-for="(btn, index) in buttonsArray"
            :key="index"
            class="flex-grow p-[8px] flex rounded-[4px]"
            :class="`${btn.class} ${btn.name === 'space' ? 'justify-center' : ''}`"
            :style="`min-width: ${btn.length}px;`"
            style="border: 1px solid #1ff37d;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;touch-action: none !important;user-select: none;"
            @touchstart="e => clickbtnPress(e, index)"
            @touchend="e => clickbtn(e, index)"
            @touchmove="moveNone"
            @pointerup="e => pointerEvent(e, index)"
          >
            <span
              class="text-[#1ff37d] text-[13px]"
              style="touch-action: none !important;user-select: none;"
            >{{ btn.name }}</span>
          </div>
        </div>
      </div>
      <div class="flex justify-end pr-[8px]">
        <div class="flex items-center">
          <span class="text-[#fff] mr-[8px]">{{ 'auto-coding' }}</span>
          <n-switch v-model:value="activeAutoCoding" />
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div
        class="w-[60px] min-w-[60px] h-[60px] cursor-pointer button-off"
        :class="pressClassBtnOff"
        @touchstart="closePad('start')"
        @touchend="closePad('end')"
      >
        <img :src="getImageUrl('svg/off_button_close_icon.svg')" class="max-w-[80%] object-contain" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-off {
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background: #618c9a12;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
}

.button-off.press {
  box-shadow: none;
  transition: all 0.2s ease-in-out;
}
.keyboard-block {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  user-select: none !important;
  touch-action: none !important;
}

.keyboard-block > * {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  user-select: none !important;
  touch-action: none !important;
  -webkit-touch-callout: none !important;
}
.screen {
  animation:colorPulse 5s infinite ease-in-out;
  background-image:radial-gradient(#444, #111);
  box-shadow:0 0 5vmin 1vmin #000 inset;
  box-sizing:border-box;
  font-family:'Fira Mono', monospace;
  font-size:14px;
  height:20vh;
  overflow:hidden;
  padding: 20px;
  width:100vw;
}

.screen:before {
  animation:wave 10s infinite ease-in-out;
  content:"";
  height:20vh;
  left:0;
  opacity:.5;
  position:absolute;
  right:0;
  z-index:1;
  border-radius: 16px;
}

.screen:after {
  background-image:linear-gradient(transparent, transparent 3px, #2222228f);
  background-size:4px 4px;
  bottom:0;
  content:"";
  left:0;
  pointer-events:none;
  position:absolute;
  right:0;
  top:0;
  z-index:2;
  border-radius: 16px;
}

p:last-child:after {
  animation:blink 1s infinite;
  content:"_";
}

@keyframes colorPulse {
  0%, 100% {
    color:#0c0;
  }
  48%, 52% {
    color:#090;
  }
  50% {
    color:#060;
  }
}

@keyframes wave {
  0% {
    box-shadow:0 -10vh 20vh #0c0;
    top:-100vh;
  }
  48%, 52% {
    box-shadow:0 -10vh 20vh #090;
  }
  50% {
    box-shadow:0 -10vh 20vh #060;
  }
  100% {
    box-shadow:0 -10vh 20vh #0c0;
    top:200vh;
  }
}

@keyframes blink {
  50% {
    opacity:0;
  }
}
.press-key {
  box-shadow: none !important;
  background: #1ff37e44;
}

.block-style1 {
  border-top: 2px solid #fbdd87;
  border-right: 2px solid #fbdd87;
  border-radius: 4px;
  min-height: 22px;
  padding: 0 4px;
  min-width: 90px;
  position: relative;
  margin-right: 4px;
  flex-grow: 1;
}
.block-style1 span {
  background: #29442f;
  padding: 0 4px;
  position: absolute;
  left: 9px;
  top: -10px;
  text-shadow: 0 0 .25rem rgb(26, 255, 128), 0 0 1rem rgb(26, 255, 128);
}
.block-style2 {
  border-top: 2px solid #fbdd87;
  border-right: 2px solid #fbdd87;
  border-radius: 4px;
  min-height: 22px;
  padding: 0 4px;
  position: relative;
  margin-right: 4px;
}
.block-style2 span {
  padding: 0 4px;
  text-shadow: 0 0 .25rem rgb(26, 255, 128), 0 0 1rem rgb(26, 255, 128);
}
</style>
