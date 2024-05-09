<script setup lang="ts">
import { onMounted, ref } from 'vue';

// import { useApplicationStore } from '@/stores/application/applicationStore';
// import { getImageUrl } from '@/utils/images';
// import { storeToRefs } from 'pinia';
// import { onMounted } from 'vue';

//const appStore = useApplicationStore()
// const { totalScoreGetters, totalUserScoreGetter } = storeToRefs(appStore)
const canvaskeyboard = ref()
const tapBlockContainerR = ref()

// const inputField: any = document.getElementById('inputField')
// const buttonWidth = 60;
// const buttonHeight = 40;
// const buttonMargin = 10
// const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]{}/.$'.split('')
// const buttons: any = []


onMounted(() => {
  if (canvaskeyboard.value) {
    const ctx = canvaskeyboard.value.getContext('2d');
    ctx.imageSmoothingEnabled = true

    let keyWidth: any;
    let keyHeight: any;
    const keyMargin = 10;

    const keys = [
      ['Q', 'W', 'E', 'R', 'T'],
      ['A', 'S', 'D', 'F', 'G'],
      ['Z', 'X', 'C', 'V', 'B'],
      ['1', '2', '3', '4', '5']
    ];

    function resizeCanvas() {
      canvaskeyboard.value.width = tapBlockContainerR.value.clientX;
      // const numberOfRows = keys.length;
      const numberOfKeysInRow = keys[0].length;
      keyWidth = canvaskeyboard.value.width / numberOfKeysInRow - keyMargin * (numberOfKeysInRow + 1) / numberOfKeysInRow;
      keyHeight = keyWidth; // Делаем кнопки квадратными
      drawKeyboard();
    }

    function drawKey(x: any, y: any, key: any) {
      ctx.fillStyle = 'lightgrey';
      ctx.fillRect(x, y, keyWidth, keyHeight);
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '20px Arial';
      ctx.fillText(key, x + keyWidth / 2, y + keyHeight / 2);
    }

    function drawPressedKey(x: any, y: any, key: any) {
      ctx.fillStyle = 'darkgrey'; // Цвет кнопки при нажатии
      ctx.fillRect(x, y, keyWidth, keyHeight);
      ctx.fillStyle = 'white'; // Цвет текста при нажатии
      ctx.fillText(key, x + keyWidth / 2, y + keyHeight / 2);
    }

    function drawKeyboard() {
      keys.forEach((row, rowIndex) => {
        row.forEach((key, keyIndex) => {
          const x = keyIndex * (keyWidth + keyMargin);
          const y = rowIndex * (keyHeight + keyMargin);
          drawKey(x, y, key);
        });
      });
    }

    canvaskeyboard.value.addEventListener('touchstart', function(event: any) {
      event.preventDefault();
      const touch = event.touches[0];
      const rect = canvaskeyboard.value.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      keys.forEach((row, rowIndex) => {
        row.forEach((key, keyIndex) => {
          const keyX = keyIndex * (keyWidth + keyMargin);
          const keyY = rowIndex * (keyHeight + keyMargin);
          if (x > keyX && x < keyX + keyWidth && y > keyY && y < keyY + keyHeight) {
            drawPressedKey(keyX, keyY, key);
          }
        });
      });
    });

    canvaskeyboard.value.addEventListener('touchend', function(event: any) {
      event.preventDefault();
      drawKeyboard();
    });

    // Вызываем функцию resizeCanvas при загрузке страницы и при изменении размера окна
    window.addEventListener('load', resizeCanvas);
    window.addEventListener('resize', resizeCanvas);    
  }
})
</script>

<template>
  <div ref="tapBlockContainerR" class="flex flex-col w-full">
    <canvas ref="canvaskeyboard"></canvas>
  </div>
</template>

<style>
</style>
