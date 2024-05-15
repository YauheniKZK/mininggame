<script setup lang="ts">
import { onMounted, ref } from 'vue';


const canvasBlock = ref()
function draw() {
  if (canvasBlock.value.getContext) {
      var ctx = canvasBlock.value.getContext('2d');
      var time = new Date().getTime() * 0.002;
      var width = canvasBlock.value.width / 2;
      var height = canvasBlock.value.height / 2;
      var amplitude = 1; // Амплитуда волны
      var frequency = 2; // Частота волны
      var points = 20; // Количество точек в линии
      var segmentLength = canvasBlock.value.width / points; // Длина сегмента линии

      ctx.clearRect(0, 0, canvasBlock.value.width, canvasBlock.value.height);

      // Настройки тени
      ctx.shadowColor = 'rgba(254, 224, 0, 0.9)';
      ctx.shadowBlur = 15;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 5;

      // Горизонтальная линия с размытым цветом и настройкой ширины
      var gradient = ctx.createLinearGradient(0, height, canvasBlock.value.width, height);
      gradient.addColorStop(0, 'red');
      gradient.addColorStop(0.5, 'yellow');
      gradient.addColorStop(1, 'orange');
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3; // Настройка ширины линии

      ctx.beginPath();
      for (var i = 0; i <= points; i++) {
          var x = i * segmentLength;
          var y = height + Math.sin(i * frequency + time) * amplitude;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Вертикальная линия с размытым цветом и другой шириной
      gradient = ctx.createLinearGradient(width, 0, width, canvasBlock.value.height);
      gradient.addColorStop(0, 'red');
      gradient.addColorStop(0.5, 'yellow');
      gradient.addColorStop(1, 'orange');
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3; // Настройка другой ширины линии

      ctx.beginPath();
      for (var j = 0; j <= points; j++) {
          var x = width + Math.sin(j * frequency + time) * amplitude;
          var y = j * segmentLength;
          if (j === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
      }
      ctx.stroke();

      window.requestAnimationFrame(draw);
  }
}
onMounted(() => {
  draw()
});

</script>

<template>
  <canvas ref="canvasBlock" style="border-radius: 16px;width: 100vh;height: 100vh;"></canvas>
</template>

<style>
.asda {
  color: rgba(254, 224, 0, 0.5);
}
</style>
