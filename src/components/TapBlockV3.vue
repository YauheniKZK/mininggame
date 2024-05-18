<script setup lang="ts">
// import { getImageUrl } from '@/utils/images';
import { onMounted, onUnmounted, ref } from 'vue';
import WebApp from '@twa-dev/sdk';

const emit = defineEmits(['closeTaps'])

const textGeneratedRef = ref<any>()
const scrollbarContainer = ref()
const scrollbarRef = ref()
const keyboardContainer = ref()
const textGenerated = ref('')
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
  createButtonObject('esc', 100),
  createButtonObject('1', 40),
  createButtonObject('2', 40),
  createButtonObject('3', 40),
  createButtonObject('4', 40),
  createButtonObject('5', 40),
  createButtonObject('6', 40),
  createButtonObject('7', 40),
  createButtonObject('8', 40),
  createButtonObject('9', 40),
  createButtonObject('A', 40),
  createButtonObject('B', 40),
  createButtonObject('C', 40),
  createButtonObject('D', 40),
  createButtonObject('E', 40),
  createButtonObject('F', 40),
  createButtonObject('G', 40),
  createButtonObject('H', 40),
  createButtonObject('I', 40),
  createButtonObject('J', 40),
  createButtonObject('K', 40),
  createButtonObject('shift', 80),
  createButtonObject('alt', 80),
  createButtonObject('space', 300),
])

const clickbtnPress = (e: any, index: number) => {
  e.preventDefault()
  buttonsArray.value.forEach((item) => {
    item.class = ''
  })
  buttonsArray.value[index].class = 'press-key'
}

const clickbtn = (e: any) => {
  e.preventDefault()
  buttonsArray.value.forEach((item) => {
    item.class = ''
  })
  whiteText()
}

const pointerEvent = () => {
 console.log('111111111111111')
}

const moveNone = (e: { preventDefault: () => void; }) => {
  e.preventDefault()
}

onMounted(() => {
})

onUnmounted(() => {
  WebApp.BackButton.hide()
})
</script>

<template>
  <div class="flex flex-col relative w-full">
    <div class="flex mb-[24px] overflow-hidden relative">
      <div ref="scrollbarContainer" class="screen rounded-[16px]">
        <n-scrollbar ref="scrollbarRef" class="scrollbarRef" style="max-height: 260px">
          <p ref="textGeneratedRef" class="break-words">{{ textGenerated }}</p>
        </n-scrollbar>
      </div>
    </div>
    <div ref="keyboardContainer" class="w-full flex justify-center items-center rounded-[16px] keyboard-block p-[4px]" @touchmove="moveNone">
      <div class="w-full flex flex-wrap gap-[4px]" @touchmove="moveNone">
        <div
          v-for="(btn, index) in buttonsArray"
          :key="index"
          class="flex-grow p-[8px] flex rounded-[4px]"
          :class="`${btn.class} ${btn.name === 'space' ? 'justify-center' : ''}`"
          :style="`min-width: ${btn.length}px;`"
          style="border: 1px solid #1ff37d;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"
          @touchstart="e => clickbtnPress(e, index)"
          @touchend="e => clickbtn(e)"
          @touchmove="moveNone"
          @pointerup="pointerEvent"
        >
          <span class="text-[#1ff37d] text-[16px]">{{ btn.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>
