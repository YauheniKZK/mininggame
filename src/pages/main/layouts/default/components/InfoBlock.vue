<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { formatNumberWithSpaces, levels } from '@/utils/data';
import { computed, ref } from 'vue';
import { onMounted } from 'vue';

const appStore = useApplicationStore()
const { currentUserDataGetters } = storeToRefs(appStore)

const canvasBlock = ref()

const balanceRef = computed(() => {
  if (currentUserDataGetters.value.balance) {
    return Number(currentUserDataGetters.value.balance / 100).toFixed(2)
  } else {
    return 0
  }
})

const scoreRef = computed(() => {
  if (currentUserDataGetters.value.score) {
    return Number(currentUserDataGetters.value.score / 100).toFixed(2)
  } else {
    return 0
  }
})

const setLevelUp = computed(() => {
  return levels[currentUserDataGetters.value.level] / 100
})
const setProcent = computed(() => {
  return currentUserDataGetters.value.balance ? currentUserDataGetters.value.balance * 100 / levels[currentUserDataGetters.value.level] : 0
})

const ctx = ref<any>(null);
const numbers = ref<any>([]);

function generateRandomNumber() {
  return Math.floor(Math.random() * 2);
}

function animate() {
  // Clear canvas
  if (ctx.value) {
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

onMounted(() => {
  ctx.value = canvasBlock.value.getContext('2d');
  animate();
})

</script>

<template>
  <div class="flex justify-between p-[12px] rounded-[16px] bg-[#373c41]">
    <div class="flex flex-col">
      <div class="flex flex-col">
        <span class="text-[#adaeb1] text-[12px] leading-[8px]">{{ $t('BALANCE') + ': ' }}</span>
        <span class="text-[20px] font-[600] text-[#fff] leading-[28px]">
          {{ formatNumberWithSpaces(Number(balanceRef)) }}
          <sup class="font-[400]">{{ ' $' }}</sup>
        </span>
      </div>
      <div class="w-full max-w-[180px] h-[1px] bg-[#63656661] my-[8px]"></div>
      <div class="flex flex-col">
        <span class="text-[#adaeb1] text-[12px] leading-[8px]">{{ $t('profit_hour') + ': ' }}</span>
        <div class="flex items-center">
          <span class="text-[12px] text-[#fff] leading-[28px]">{{ '+ ' }}</span>
          <span class="text-[20px] font-[600] text-[#fff] leading-[28px]">
            {{ formatNumberWithSpaces(Number(scoreRef)) }}
            <sup class="font-[400]">{{ ' $' }}</sup>
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
        <canvas ref="canvasBlock" width="64" height="80" class="absolute bottom-[4px] left-[4px]"></canvas>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
