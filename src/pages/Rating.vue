<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col w-full h-full px-[16px]">
    <div class="flex justify-center items-center">
      <span>{{ 'IMG Rating' }}</span>
    </div>
    <n-carousel
      :space-between="30"
      :loop="false"
      slides-per-view="auto"
      centered-slides
      draggable
    >
      <n-carousel-item style="width: 30%">
        <span class="text-[#fff]">{{ 'Beginner' }}</span>
      </n-carousel-item>
      <n-carousel-item style="width: 20%">
        <span class="text-[#fff]">{{ 'Trainer' }}</span>
      </n-carousel-item>
      <n-carousel-item style="width: 30%">
        <span class="text-[#fff]">{{ 'Junior' }}</span>
      </n-carousel-item>
      <n-carousel-item style="width: 40%">
        <span class="text-[#fff]">{{ 'Mibble' }}</span>
      </n-carousel-item>
    </n-carousel>
  </div>
</template>

<style scoped>
</style>
