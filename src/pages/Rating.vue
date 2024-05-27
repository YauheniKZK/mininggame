<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col w-full h-full px-[16px]">
    <div class="flex justify-center items-center h-[60px] bg-[#5757579a]">
      <span>{{ 'IMG Rating' }}</span>
    </div>
    <n-carousel
      :space-between="0"
      :loop="false"
      slides-per-view="auto"
      centered-slides
      draggable
      :show-dots="false"
    >
      <n-carousel-item style="width: 33.333%">
        <span class="text-[#fff] flex justify-center">{{ 'Beginner' }}</span>
      </n-carousel-item>
      <n-carousel-item style="width: 33.333%">
        <span class="text-[#fff] flex justify-center">{{ 'Trainer' }}</span>
      </n-carousel-item>
      <n-carousel-item style="width: 33.333%">
        <span class="text-[#fff] flex justify-center">{{ 'Junior' }}</span>
      </n-carousel-item>
      <n-carousel-item style="width: 33.333%">
        <span class="text-[#fff] flex justify-center">{{ 'Mibble' }}</span>
      </n-carousel-item>
    </n-carousel>
  </div>
</template>

<style scoped>
</style>
