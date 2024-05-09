<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue';

// import { useApplicationStore } from '@/stores/application/applicationStore';
// import { getImageUrl } from '@/utils/images';
// import { storeToRefs } from 'pinia';
// import { onMounted } from 'vue';

//const appStore = useApplicationStore()
// const { totalScoreGetters, totalUserScoreGetter } = storeToRefs(appStore)
// const keyboardCanvas = ref()
const tapBlockContainerR = ref()

// const inputField: any = document.getElementById('inputField')
// const buttonWidth = 60;
// const buttonHeight = 40;
// const buttonMargin = 10
// const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]{}/.$'.split('')
// const buttons: any = []


const keyboardCanvas = ref<any>(null);
const canvasSize = reactive({ width: tapBlockContainerR.value.clientWidth, keyWidth: 0, keyHeight: 0 });
const keyMargin = 10;
const keys = [
  ['Q', 'W', 'E', 'R', 'T'],
  ['A', 'S', 'D', 'F', 'G'],
  ['Z', 'X', 'C', 'V', 'B'],
  ['1', '2', '3', '4', '5']
];

const resizeCanvas = () => {
  canvasSize.width = tapBlockContainerR.value.clientWidth;
  const numberOfKeysInRow = keys[0].length;
  canvasSize.keyWidth = canvasSize.width / numberOfKeysInRow - keyMargin * (numberOfKeysInRow + 1) / numberOfKeysInRow;
  canvasSize.keyHeight = canvasSize.keyWidth;
  drawKeyboard();
};

const drawKey = (ctx: any, x: any, y: any, key: any) => {
  ctx.fillStyle = 'lightgrey';
  ctx.fillRect(x, y, canvasSize.keyWidth, canvasSize.keyHeight);
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '20px Arial';
  ctx.fillText(key, x + canvasSize.keyWidth / 2, y + canvasSize.keyHeight / 2);
};

const drawPressedKey = (ctx: any, x: any, y: any, key: any) => {
  ctx.fillStyle = 'darkgrey';
  ctx.fillRect(x, y, canvasSize.keyWidth, canvasSize.keyHeight);
  ctx.fillStyle = 'white';
  ctx.fillText(key, x + canvasSize.keyWidth / 2, y + canvasSize.keyHeight / 2);
};

const drawKeyboard = () => {
  const canvas = keyboardCanvas.value;
  const ctx = canvas.getContext('2d');
  keys.forEach((row, rowIndex) => {
    row.forEach((key, keyIndex) => {
      const x = keyIndex * (canvasSize.keyWidth + keyMargin);
      const y = rowIndex * (canvasSize.keyHeight + keyMargin);
      drawKey(ctx, x, y, key);
    });
  });
};

const handleTouchStart = (event: any) => {
  event.preventDefault();
  const touch = event.touches[0];
  const canvas = keyboardCanvas.value;
  if (canvas) {
    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    const ctx = canvas.getContext('2d');

    keys.forEach((row, rowIndex) => {
      row.forEach((key, keyIndex) => {
        const keyX = keyIndex * (canvasSize.keyWidth + keyMargin);
        const keyY = rowIndex * (canvasSize.keyHeight + keyMargin);
        if (x > keyX && x < keyX + canvasSize.keyWidth && y > keyY && y < keyY + canvasSize.keyHeight) {
          drawPressedKey(ctx, keyX, keyY, key);
        }
      });
    });
  }
  
};

const handleTouchEnd = (event: any) => {
  event.preventDefault();
  drawKeyboard();
};

onMounted(() => {
  window.addEventListener('resize', resizeCanvas);
  const canvas: any = keyboardCanvas.value;
  if (canvas) {
    canvas.width = canvasSize.width;
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchend', handleTouchEnd);
  }

  resizeCanvas();
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas);
  const canvas: any = keyboardCanvas.value;
  if (canvas) {
    canvas.removeEventListener('touchstart', handleTouchStart);
    canvas.removeEventListener('touchend', handleTouchEnd);
  }

});
</script>

<template>
  <div ref="tapBlockContainerR" class="flex flex-col w-full">
    <canvas ref="keyboardCanvas"></canvas>
  </div>
</template>

<style>
</style>
