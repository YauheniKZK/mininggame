<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { formatNumberWithSpaces, levels } from '@/utils/data';
import { computed, ref } from 'vue';
import { onMounted } from 'vue';
import { getImageUrl } from '@/utils/images';
import { ArrowForwardOutline, CogOutline, BarChartOutline } from '@vicons/ionicons5'

const appStore = useApplicationStore()
const {
  mainBalanceUserGetters,
  earnPassivePerHourGetters,
  currentUserLevelGetters
} = storeToRefs(appStore)
const { switchModalRating, switchModalSetting } = appStore

const canvasBlock = ref()

const balanceRef = computed(() => {
  if (mainBalanceUserGetters.value) {
    return Number(mainBalanceUserGetters.value / 100).toFixed(2)
  } else {
    return 0
  }
})

const earnPassivePerHourGettersRef = computed(() => {
  if (earnPassivePerHourGetters.value) {
    return Number(earnPassivePerHourGetters.value / 100).toFixed(2)
  } else {
    return 0
  }
})

const setLevelUp = computed(() => {
  return levels[currentUserLevelGetters.value] / 100
})
const setProcent = computed(() => {
  return mainBalanceUserGetters.value ? mainBalanceUserGetters.value * 100 / levels[currentUserLevelGetters.value] : 0
})


const showText = ref(true);
const text = ref('0.01$');

onMounted(() => {
  setInterval(() => {
    showText.value = !showText.value;
  }, 1000); // Переключение каждую секунду
})

</script>

<template>
  <div class="flex w-full">
    <div class="w-[100px] h-[130px] relative bg-[#1f1f1f] rounded-[2px] flex flex-col justify-center items-center mr-[16px] overflow-hidden">
      <span class="text-[12px] text-[#ffffff7a] absolute uppercase left-[4px] top-[4px]">{{ 'balance' }}</span>
      <img :src="getImageUrl('img/coin-bg2.png')" class="w-[190px] max-w-none opacity-[0.05]" alt="" />
      <div class="flex items-center justify-between absolute w-full px-[4px] bottom-[4px]">
        <span class="text-[12px] text-[#ffffff7a] uppercase">{{ 'Stg & Rtg' }}</span>
        <n-icon :color="'#f4c543'" :size="18" class="">
          <ArrowForwardOutline />
        </n-icon>
      </div>

    </div>
    <div class="flex items-center relative flex-grow before-item">
      <span class="line"></span>
      <div class="flex items-center relative">
        <span class="text-[42px] font-[600] text-[#fff] leading-[28px]" style="text-shadow: 3px 2px 0 #ffffff29;">
          {{ formatNumberWithSpaces(Number(balanceRef)) }}
          <sup class="font-[400]">{{ ' $' }}</sup>
        </span>
        <div class="flex justify-end w-[70px] absolute right-0 top-[0px]">
          <transition name="fade">
            <p v-if="showText" class="animated-text text-[#fff] text-[10px]">{{ text }}</p>
          </transition>
        </div>
      </div>
      <div class="flex justify-end items-center absolute right-[10px] bottom-[4px]">
          <button @click="switchModalSetting(true)" class="flex">
            <n-icon :color="'#413e41f0'" :size="22">
              <CogOutline />
            </n-icon>
          </button>
          <div class="w-[1px] h-[16px] bg-[#413e41f0] m-[0_12px_0_8px] z-[1]"></div>
          <button @click="switchModalRating(true)" class="flex">
            <n-icon :color="'#413e41f0'" :size="20">
              <BarChartOutline />
            </n-icon>
          </button>
        </div>
    </div>

    <!-- <div class="flex flex-col">
      <div class="flex flex-col relative">
        <span class="text-[#adaeb1] text-[14px] leading-[14px]">{{ $t('BALANCE') + ': ' }}</span>
        <span class="text-[20px] font-[600] text-[#fff] leading-[28px]" style="text-shadow: 3px 2px 0 #ffffff29;">
          {{ formatNumberWithSpaces(Number(balanceRef)) }}
          <sup class="font-[400]">{{ ' $' }}</sup>
        </span>
        <div class="flex justify-end w-[70px] absolute right-0 top-[17px]">
          <transition name="fade">
            <p v-if="showText" class="animated-text text-[#fff] text-[10px]">{{ text }}</p>
          </transition>
        </div>
      </div>
      <div class="w-full max-w-[180px] h-[1px] bg-[#63656661] my-[8px]"></div>
      <div class="flex flex-col">
        <span class="text-[#adaeb1] text-[14px] leading-[14px]">{{ $t('profit_hour') + ': ' }}</span>
        <div class="flex items-center" style="text-shadow: 3px 2px 0 #ffffff29;">
          <span class="text-[12px] text-[#fff] leading-[28px]">{{ '+ ' }}</span>
          <span class="text-[20px] font-[600] text-[#fff] leading-[28px]">
            {{ formatNumberWithSpaces(Number(earnPassivePerHourGettersRef)) }}
          </span>
        </div>
      </div>
    </div>
    <div class="flex items-end h-auto w-[72px]" style="border: 1px solid #adaeb1;border-top: 0px;">
      <div class="h-full p-[4px] w-full flex flex-col justify-end relative">
        <span class="absolute justify-center bottom-[4px] -left-[21px] text-[14px] text-[#adaeb1] rotate-180" style="writing-mode: vertical-rl;">
          {{ $t('up_level') }}
        </span>
        <div class="flex w-full items-center absolute justify-center -top-[7px] left-0">
          <div class="fle flex-grow h-[1px] bg-[#adaeb1]"></div>
          <span class="text-[10px] text-center w-max p-[0_4px] text-[#adaeb1]">
            {{ formatNumberWithSpaces(setLevelUp) }}
            <sup class="font-[400]">{{ ' $' }}</sup>
          </span>
          <div class="fle flex-grow h-[1px] bg-[#adaeb1]"></div>
        </div>
        <div class="w-full min-h-[4px] bg-[#fbdd87] progress-block relative" :style="`height: ${setProcent}%`">
        </div>
        <canvas ref="canvasBlock" width="62" height="80" class="absolute bottom-[4px] left-[4px]"></canvas>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.before-item::before {
  border: 0px solid #aafffc;
  content: "";
  height: 10px;
  position: absolute;
  width: 10px;
  border-bottom-width: 1px;
  border-right-width: 1px;
  bottom: 0px;
  right: 0;
}
.line {
  position: absolute;
  left: 0;
  top: 12px;
  height: 1px;
  width: 100%;
  background: #ffffff3b;
}

.line::before {
  content: '';
  width: 4px;
  height: 4px;
  position: absolute;
  right: 0;
  top: 0;
  background: #ffffff3b;
}
.container-block {
  position: relative;
  width: 100%;
  border-top: 1px solid rgba(43, 237, 230, 0.28);
  border-bottom: 1px solid rgba(43, 237, 230, 0.28);
  background: linear-gradient(to right, rgba(43,237,230,0.1) 0%, rgba(43,237,230,0) 100%);
}
.bg-image {
  position: relative;
  overflow: hidden;
}
.bg-image::before {
  content: "";
  position: absolute;
  top: -70px;
  left: -110px;
  width: 337px;
  height: 337px;
  background: url('../../../../../assets/img/coin-bg2.png') no-repeat center;
  background-size: contain;
  z-index: -1;
  transform: rotate(20deg);
  opacity: 0.05;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.animated-text {
  width: 50px;
  animation: slideLeft 1s infinite; /* Бесконечная анимация */
}
@keyframes slideLeft {
  from {
    transform: translateX(100%);
    opacity: 0.8;
  }
  to {
    transform: translateX(0);
    opacity: 0;
  }
}
</style>
