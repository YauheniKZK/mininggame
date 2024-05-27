<script setup lang="ts">
import { ref } from 'vue';

const currentIndexSlide = ref(0)
const updateSlide = (value: number) => {
  currentIndexSlide.value = value
}
</script>

<template>
  <div class="flex flex-col w-full h-full px-[16px]">
    <n-carousel
      :space-between="0"
      :loop="false"
      slides-per-view="auto"
      :touchable="false"
      :current-index="currentIndexSlide"
      :show-dots="false"
      class="min-h-[120px]"
    >
      <n-carousel-item style="width: 100%">
        <div class="flex justify-center items-center h-[120px] bg-[#5757579a]">
          <span>{{ 'IMG Rating' }}</span>
        </div>
      </n-carousel-item>
      <n-carousel-item style="width: 100%">
        <div class="flex justify-center items-center h-[120px] bg-[#5757579a]">
          <span>{{ 'IMG Rating' }}</span>
        </div>
      </n-carousel-item>
      <n-carousel-item style="width: 100%">
        <div class="flex justify-center items-center h-[120px] bg-[#5757579a]">
          <span>{{ 'IMG Rating' }}</span>
        </div>
      </n-carousel-item>
      <n-carousel-item style="width: 100%">
        <div class="flex justify-center items-center h-[120px] bg-[#5757579a]">
          <span>{{ 'IMG Rating' }}</span>
        </div>
      </n-carousel-item>
    </n-carousel>
    <n-carousel
      :space-between="0"
      :loop="false"
      slides-per-view="auto"
      :touchable="false"
      :current-index="currentIndexSlide"
      :show-dots="false"
    >
      <n-carousel-item style="width: 33.333%">
        <span class="text-[#fff] flex justify-center items-center h-full" @click="updateSlide(0)">{{ 'Beginner' }}</span>
      </n-carousel-item>
      <n-carousel-item style="width: 33.333%">
        <span class="text-[#fff] flex justify-center items-center h-full" @click="updateSlide(1)">{{ 'Trainer' }}</span>
      </n-carousel-item>
      <n-carousel-item style="width: 33.333%">
        <span class="text-[#fff] flex justify-center items-center h-full" @click="updateSlide(2)">{{ 'Junior' }}</span>
      </n-carousel-item>
      <n-carousel-item style="width: 33.333%">
        <span class="text-[#fff] flex justify-center items-center h-full" @click="updateSlide(3)">{{ 'Mibble' }}</span>
      </n-carousel-item>
    </n-carousel>
    <div class="flex flex-col">
      {{ 'Rating' }}
    </div>
  </div>
</template>

<style scoped>
</style>
