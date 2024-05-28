<script setup lang="ts">
import { ref } from 'vue';

const currentIndexSlide = ref(0)
const updateSlide = (value: number) => {
  currentIndexSlide.value = value
}

const arrayRating = ref([
  {
    name: 'name 1',
    balance: 30,
    rating: 1,
    stack: 'php'
  },
  {
    name: 'name 2',
    balance: 29,
    rating: 2,
    stack: 'javascript'
  }
])
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
      centered-slides
      :show-dots="false"
      class="min-h-[60px]"
    >
      <n-carousel-item style="width: 33.333%;height: 60px;" :style="`background: ${currentIndexSlide === 0 ? '#000' : ''};`" class="item-car">
        <span class="text-[#fff] flex justify-center items-center h-full" @click="updateSlide(0)">{{ 'Beginner' }}</span>
      </n-carousel-item>
      <n-carousel-item style="width: 33.333%;height: 60px;" :style="`background: ${currentIndexSlide === 1 ? '#000' : ''};`" class="item-car">
        <span class="text-[#fff] flex justify-center items-center h-full" @click="updateSlide(1)">{{ 'Trainer' }}</span>
      </n-carousel-item>
      <n-carousel-item style="width: 33.333%;height: 60px;" :style="`background: ${currentIndexSlide === 2 ? '#000' : ''};`" class="item-car">
        <span class="text-[#fff] flex justify-center items-center h-full" @click="updateSlide(2)">{{ 'Junior' }}</span>
      </n-carousel-item>
      <n-carousel-item style="width: 33.333%;height: 60px;" :style="`background: ${currentIndexSlide === 3 ? '#000' : ''};`" class="item-car">
        <span class="text-[#fff] flex justify-center items-center h-full" @click="updateSlide(3)">{{ 'Mibble' }}</span>
      </n-carousel-item>
    </n-carousel>
    <div class="flex flex-col">
      <div
        v-for="item, index in arrayRating"
        :key="index"
        class="flex justify-between items-center w-full mb-[8px]"
      >
        <div class="flex items-center">
          <div class="w-[40px] min-w-[40px] bg-[#868686b4] h-[40px] rounded-[50%] mr-[16px]">

          </div>
          <div class="flex flex-col">
            <div class="flex items-center">
              <span class="text-[#fff]">{{ item.name }}</span>
              <span class="text-[#fff]">{{ item.balance }}</span>
            </div>
            <span class="text-[#fff]">{{ item.stack }}</span>
          </div>
        </div>
        <div class="flex items-center">
          <span>{{ item.rating }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.item-car {
  transition: all 0.3s ease-in-out;
}
</style>
