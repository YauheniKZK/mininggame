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
const setLevelUp = computed(() => {
  return levels[currentUserDataGetters.value.level] / 100
})
const setProcent = computed(() => {
  return currentUserDataGetters.value.balance ? currentUserDataGetters.value.balance * 100 / levels[currentUserDataGetters.value.level] : 0
})

onMounted(() => {
  if (canvasBlock.value) {
    const ctx = canvasBlock.value.getContext('2d');
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    function getRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createNumberAnimation() {
        const number = numbers[getRandomNumber(0, numbers.length - 1)];
        const x = getRandomNumber(0, canvasBlock.value.width);
        let y = canvasBlock.value.height;

        ctx.font = '8px "M PLUS Rounded 1c"';
        ctx.fillStyle = 'white';
        ctx.fillText(number, x, y);

        const speed = getRandomNumber(1, 3); // Скорость движения цифры

        function animate() {
            ctx.clearRect(0, 0, canvasBlock.value.width, canvasBlock.value.height);
            ctx.fillText(number, x, y);

            if (y > 0) {
                y -= speed;
                requestAnimationFrame(animate);
            }
        }

        animate();
    }

    // Запускаем анимацию каждые 500 миллисекунд
    setInterval(createNumberAnimation, 500);
  }
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
        <span class="text-[#adaeb1] text-[12px] leading-[8px]">{{ $t('up_level') + ': ' }}</span>
        <span class="text-[20px] font-[600] text-[#fff] leading-[28px]">
          {{ formatNumberWithSpaces(setLevelUp) }}
          <sup class="font-[400]">{{ ' $' }}</sup>
        </span>
      </div>
    </div>
    <div class="flex items-end h-auto w-[100px]">
      <div class="h-full p-[4px] rounded-[4px] w-full flex flex-col justify-end">
        <div class="w-full rounded-[4px] min-h-[4px] bg-[#fbdd87] relative" :style="`height: ${setProcent}%`">
          <canvas ref="canvasBlock" width="100" height="60"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
