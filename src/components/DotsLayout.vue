<script setup lang="ts">
import { ref } from 'vue';
import { onMounted } from 'vue';

const canvas = ref()
const canvasContainer = ref()

onMounted(() => {
  if (canvas.value) {
    canvas.value.width = canvasContainer.value.clientWidth
    canvas.value.height = canvasContainer.value.clientHeight
    const ctx = canvas.value?.getContext('2d');
    // Задаем параметры точек
    const pointSize = 1; // Размер точки
    const spacing = 20; // Расстояние между точками

    // Рисуем сетку из точек
    for (let x = 0; x < canvas.value.width; x += spacing) {
      for (let y = 0; y < canvas.value.height; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, pointSize, 0, 2 * Math.PI);
          ctx.fillStyle = '#45454575'; // Цвет точки
          ctx.fill();
      }
    }
  }
})

</script>

<template>
  <div ref="canvasContainer" class="flex flex-col w-full h-screen fixed left-0 top-0">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<style scoped>
</style>
