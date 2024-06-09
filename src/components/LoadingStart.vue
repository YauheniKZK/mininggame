<script setup lang="ts">
import { getImageUrl } from '@/utils/images';
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full h-full">
    <div class="flex justify-center items-center">
      <span class="text-[#ffffff77] text-[32px]">{{'Loading...'}}</span>
    </div>
    <div class="flex relative w-[200px] h-[200px]">
      <img :src="getImageUrl('img/protez.png')" class="w-[50px] h-[50%] object-contain absolute img-1" alt="">
      <img :src="getImageUrl('img/protez.png')" class="w-[50px] h-[50%] object-contain absolute img-2" alt="">
      <img :src="getImageUrl('img/protez.png')" class="w-[50px] h-[50%] object-contain absolute img-3" alt="">
      <img :src="getImageUrl('img/protez.png')" class="w-[50px] h-[50%] object-contain absolute img-4" alt="">
      <img :src="getImageUrl('img/protez.png')" class="w-[50px] h-[50%] object-contain absolute img-5" alt="">
      <img :src="getImageUrl('img/protez.png')" class="w-[50px] h-[50%] object-contain absolute img-6" alt="">
    </div>
  </div>
</template>

<style scoped>
.img-1 {
  transform: rotate(70deg);
  opacity: 0;
  animation: img1 3s ease-in-out infinite;
}

.img-2 {
  transform: rotate(70deg);
  top: 11px;
  left: 40px;
  opacity: 0;
  animation: img1 3s 0.5s ease-in-out infinite;
}

.img-3 {
  transform: rotate(70deg);
  top: -33px;
  left: 68px;
  opacity: 0;
  animation: img1 3s 1s ease-in-out infinite;
}

.img-4 {
  transform: rotate(70deg);
  top: 1px;
  left: 107px;
  opacity: 0;
  animation: img1 3s 1.5s ease-in-out infinite;
}

.img-5 {
  transform: rotate(70deg);
  top: -52px;
  left: 132px;
  opacity: 0;
  animation: img1 3s 2s ease-in-out infinite;
}

.img-6 {
  transform: rotate(70deg);
  top: -24px;
  left: 174px;
  opacity: 0;
  animation: img1 3s 2.5s ease-in-out infinite;
}

@keyframes img1 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

</style>
