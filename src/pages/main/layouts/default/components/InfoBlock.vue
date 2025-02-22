<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { formatNumberWithSpaces, levels } from '@/utils/data';
import { computed, ref } from 'vue';
import { onMounted } from 'vue';

const appStore = useApplicationStore()
const { mainBalanceUserGetters, earnPassivePerHourGetters, currentUserLevelGetters } = storeToRefs(appStore)

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

const ctx = ref<any>(null);
const numbers = ref<any>([]);

function generateRandomNumber() {
  return Math.floor(Math.random() * 2);
}

function animate() {
  // Clear canvas
  if (ctx.value && canvasBlock.value) {
    ctx.value.clearRect(0, 0, canvasBlock.value.width, canvasBlock.value.height);
    // Generate new random number
    const newNumber = generateRandomNumber();
    numbers.value.push({ x: Math.random() * canvasBlock.value.width, y: canvasBlock.value.height, value: newNumber });

    // Update animation
    for (const number of numbers.value) {
      number.y -= 1; // Move up
      number.opacity = Math.max(0, number.y / canvasBlock.value.height); // Decrease opacity
      ctx.value.fillStyle = `rgba(251, 221, 135, ${number.opacity})`;
      ctx.value.fillText(number.value, number.x, number.y);
    }

    // Remove numbers that are out of the canvas
    numbers.value = numbers.value.filter((number: { y: number; }) => number.y > 0);

    // Request next frame
    requestAnimationFrame(animate);
  }
  
}

const showText = ref(true);
const text = ref('0.01$');

onMounted(() => {
  ctx.value = canvasBlock.value.getContext('2d');
  animate();
  setInterval(() => {
    showText.value = !showText.value;
  }, 1000); // Переключение каждую секунду
})

</script>

<template>
  <div class="flex justify-between p-[12px] rounded-[16px] bg-[#373c41] bg-image" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
    <div class="flex flex-col">
      <div class="flex flex-col relative">
        <span class="text-[#adaeb1] text-[12px] leading-[8px]">{{ $t('BALANCE') + ': ' }}</span>
        <span class="text-[20px] font-[600] text-[#fff] leading-[28px]">
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
        <span class="text-[#adaeb1] text-[12px] leading-[8px]">{{ $t('profit_hour') + ': ' }}</span>
        <div class="flex items-center">
          <span class="text-[12px] text-[#fff] leading-[28px]">{{ '+ ' }}</span>
          <span class="text-[20px] font-[600] text-[#fff] leading-[28px]">
            {{ formatNumberWithSpaces(Number(earnPassivePerHourGettersRef)) }}
          </span>
        </div>
      </div>
    </div>
    <div class="flex items-end h-auto w-[72px] rounded-[4px]" style="border: 1px solid #adaeb1;">
      <div class="h-full p-[4px] rounded-[4px] w-full flex flex-col justify-end relative">
        <span class="absolute justify-center bottom-[4px] -left-[21px] text-[14px] text-[#adaeb1] rotate-180" style="writing-mode: vertical-rl;">
          {{ $t('up_level') }}
        </span>
        <div class="flex w-full absolute justify-center -top-[9px] left-0">
          <span class="text-[10px] bg-[#373c41] text-center w-max p-[0_4px] text-[#adaeb1]">
            {{ formatNumberWithSpaces(setLevelUp) }}
            <sup class="font-[400]">{{ ' $' }}</sup>
          </span>
        </div>
        <div class="w-full rounded-[4px] min-h-[4px] bg-[#fbdd87] progress-block relative" :style="`height: ${setProcent}%`">
        </div>
        <canvas ref="canvasBlock" width="62" height="80" class="absolute bottom-[4px] left-[4px]"></canvas>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
