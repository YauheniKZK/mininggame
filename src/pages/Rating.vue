<script setup lang="ts">
import { onMounted, ref } from 'vue';
import WebApp from '@twa-dev/sdk';
import { onBeforeUnmount } from 'vue';

const emit = defineEmits(['back'])

const currentIndexSlide = ref(0)
const updateSlide = (value: number) => {
  currentIndexSlide.value = value
}

onMounted(async () => {
  WebApp.BackButton.show()
})

WebApp.BackButton.onClick(() => {
  emit('back')
})

onBeforeUnmount(() => {
  WebApp.BackButton.hide()
})

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
  },
  {
    name: 'name 3',
    balance: 28,
    rating: 3,
    stack: 'JAVA'
  },
  {
    name: 'name 4',
    balance: 27,
    rating: 4,
    stack: 'c++'
  },
  {
    name: 'name 5',
    balance: 26,
    rating: 5,
    stack: 'c#'
  },
  {
    name: 'name 6',
    balance: 25,
    rating: 6,
    stack: 'javascript'
  },
  {
    name: 'name 7',
    balance: 24,
    rating: 7,
    stack: 'javascript'
  },
  {
    name: 'name 8',
    balance: 24,
    rating: 8,
    stack: 'javascript'
  },
  {
    name: 'name 9',
    balance: 24,
    rating: 9,
    stack: 'javascript'
  },
  {
    name: 'name 10',
    balance: 24,
    rating: 10,
    stack: 'javascript'
  },
  {
    name: 'name 11',
    balance: 24,
    rating: 11,
    stack: 'javascript'
  },
  {
    name: 'name 12',
    balance: 24,
    rating: 12,
    stack: 'javascript'
  },
  {
    name: 'name 13',
    balance: 24,
    rating: 13,
    stack: 'javascript'
  },
  {
    name: 'name 14',
    balance: 24,
    rating: 14,
    stack: 'javascript'
  },
  {
    name: 'name 45',
    balance: 24,
    rating: 15,
    stack: 'javascript'
  }
])
</script>

<template>
  <div class="flex flex-col w-full h-full px-[16px]">
    <n-carousel
      :loop="false"
      slides-per-view="1"
      :touchable="false"
      :current-index="currentIndexSlide"
      :show-dots="false"
      class="min-h-[120px]"
    >
      <n-carousel-item style="width: 100%;height: 120px;">
        <div class="flex justify-center items-center h-[120px] bg-[#5757579a]">
          <div class="flex justify-center items-center w-[100px] min-w-[100px] h-[100px] rounded-[50%] bg-[#63636363]">
            <span>{{ 'IMG Rating' }}</span>
          </div>
        </div>
      </n-carousel-item>
      <n-carousel-item style="width: 100%;height: 120px;">
        <div class="flex justify-center items-center h-[120px] bg-[#5757579a]">
          <div class="flex justify-center items-center w-[100px] min-w-[100px] h-[100px] rounded-[50%] bg-[#63636363]">
            <span>{{ 'IMG Rating' }}</span>
          </div>
        </div>
      </n-carousel-item>
      <n-carousel-item style="width: 100%;height: 120px;">
        <div class="flex justify-center items-center h-[120px] bg-[#5757579a]">
          <div class="flex justify-center items-center w-[100px] min-w-[100px] h-[100px] rounded-[50%] bg-[#63636363]">
            <span>{{ 'IMG Rating' }}</span>
          </div>
        </div>
      </n-carousel-item>
      <n-carousel-item style="width: 100%;height: 120px;">
        <div class="flex justify-center items-center h-[120px] bg-[#5757579a]">
          <div class="flex justify-center items-center w-[100px] min-w-[100px] h-[100px] rounded-[50%] bg-[#63636363]">
            <span>{{ 'IMG Rating' }}</span>
          </div>
        </div>
      </n-carousel-item>
    </n-carousel>
    <n-carousel
      :space-between="0"
      :loop="false"
      slides-per-view="3"
      :touchable="false"
      :current-index="currentIndexSlide"
      centered-slides
      :show-dots="false"
      class="min-h-[60px] pt-[16px]"
    >
      <n-carousel-item style="width: 33.333%;height: 60px;" :class="`${currentIndexSlide === 0 ? 'active-slide' : ''}`" class="item-car">
        <span class="text-[#fff] flex justify-center items-center h-full text-[16px]" @click="updateSlide(0)">{{ 'Beginner' }}</span>
      </n-carousel-item>
      <n-carousel-item style="width: 33.333%;height: 60px;" :class="`${currentIndexSlide === 1 ? 'active-slide' : ''}`" class="item-car">
        <span class="text-[#fff] flex justify-center items-center h-full text-[16px]" @click="updateSlide(1)">{{ 'Trainer' }}</span>
      </n-carousel-item>
      <n-carousel-item style="width: 33.333%;height: 60px;" :class="`${currentIndexSlide === 2 ? 'active-slide' : ''}`" class="item-car">
        <span class="text-[#fff] flex justify-center items-center h-full text-[16px]" @click="updateSlide(2)">{{ 'Junior' }}</span>
      </n-carousel-item>
      <n-carousel-item style="width: 33.333%;height: 60px;" :class="`${currentIndexSlide === 3 ? 'active-slide' : ''}`" class="item-car">
        <span class="text-[#fff] flex justify-center items-center h-full text-[16px]" @click="updateSlide(3)">{{ 'Mibble' }}</span>
      </n-carousel-item>
    </n-carousel>
    <div class="flex flex-col pt-[16px]">
      <div
        v-for="item, index in arrayRating"
        :key="index"
        class="flex justify-between items-center w-full mb-[8px] p-[8px] rounded-[16px] bg-[#2f2f2f]"
        style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      >
        <div class="flex items-center">
          <div class="w-[40px] min-w-[40px] bg-[#868686b4] h-[40px] rounded-[50%] mr-[16px]">

          </div>
          <div class="flex flex-col">
            <div class="flex items-center">
              <span class="text-[#fff] mr-[6px]">{{ item.name }}</span>
              <span class="text-[#fff] tag2">{{ item.stack }}</span>
            </div>
            <span class="text-[#fff]">{{ item.balance }}</span>
          </div>
        </div>
        <div class="flex items-center">
          <span class="text-[20px] text-[#fff]">{{ item.rating }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.item-car {
  transition: all 0.3s ease-in-out;
}

.active-slide {
  background: rgb(81 79 79);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
.tag2 {
  display: inline-block;
  margin-left: 8px;
  padding: 0 8px;
  border-radius: 4px;
  background: #888;
  color: #fff;
  font-size: 12px;
}
</style>
