<script setup lang="ts">
import { onMounted, ref } from 'vue';
import WebApp from '@twa-dev/sdk';
import { getImageUrl } from '@/utils/images';
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
    <div class="flex w-full bg-[#5757579a] carusel-img">
      <n-carousel
        :loop="false"
        slides-per-view="1"
        :touchable="false"
        :current-index="currentIndexSlide"
        :show-dots="false"
        class="min-h-[120px] rounded-[8px]"
      >
        <n-carousel-item style="width: 100%;height: 120px;">
          <div class="flex justify-center items-center h-[120px]">
            <div class="flex justify-center items-center w-[100px] min-w-[100px] h-[100px] rounded-[50%] bg-[#63636363]">
              <span>{{ 'IMG Rating' }}</span>
            </div>
          </div>
        </n-carousel-item>
        <n-carousel-item style="width: 100%;height: 120px;">
          <div class="flex justify-center items-center h-[120px]">
            <div class="flex justify-center items-center w-[100px] min-w-[100px] h-[100px] rounded-[50%] bg-[#63636363]">
              <span>{{ 'IMG Rating' }}</span>
            </div>
          </div>
        </n-carousel-item>
        <n-carousel-item style="width: 100%;height: 120px;">
          <div class="flex justify-center items-center h-[120px]">
            <div class="flex justify-center items-center w-[100px] min-w-[100px] h-[100px] rounded-[50%] bg-[#63636363]">
              <span>{{ 'IMG Rating' }}</span>
            </div>
          </div>
        </n-carousel-item>
        <n-carousel-item style="width: 100%;height: 120px;">
          <div class="flex justify-center items-center h-[120px]">
            <div class="flex justify-center items-center w-[100px] min-w-[100px] h-[100px] rounded-[50%] bg-[#63636363]">
              <span>{{ 'IMG Rating' }}</span>
            </div>
          </div>
        </n-carousel-item>
      </n-carousel>
    </div>

    <n-carousel
      :space-between="0"
      :loop="false"
      slides-per-view="3"
      :touchable="false"
      :current-index="currentIndexSlide"
      centered-slides
      :show-dots="false"
      class="min-h-[60px] max-h-[76px] pt-[16px] rating_slide"
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
        class="flex justify-between item-user items-center w-full mb-[8px] p-[2px_24px_2px_2px] border-[1px]"
        :class="{
          'border-[#FFD700]': index === 0,
          'border-[#C0C0C0]': index === 1,
          'border-[#CD7F32]': index === 2,
          'border-[#ffffff00] bg-[#4f4f4f30]': index > 2,
        }"
      >
        <div
          class="flex items-center flex-grow "
        >
          <div
          class="flex absolute right-0 top-0 h-full w-[15px]"
          :class="{
            'bg-[#FFD700]': index === 0,
            'bg-[#C0C0C0]': index === 1,
            'bg-[#CD7F32]': index === 2,
            'bg-[#df4c25]': index > 2,
          }"
          ></div>
          <div class="w-[63px] min-w-[63px] bg-[#868686b4] h-[63px] mr-[16px]">

          </div>
          <div class="flex flex-col">
            <div class="flex items-center">
              <span class="text-[16px] mr-[6px]" :class="{
                'text-[#FFD700]': index === 0,
                'text-[#C0C0C0]': index === 1,
                'text-[#CD7F32]': index === 2,
                'text-[#fff]': index > 2
              }">{{ item.name }}</span>
              <span class="text-[#fff] tag2">{{ item.stack }}</span>
            </div>
            <div class="flex items-center">
              <img :src="getImageUrl('svg/coin-default.svg')" class="w-[24px] min-w-[24px] h-auto object-contain mr-[6px]" alt="" />
              <span class="text-[#fff]">{{ item.balance + ' $' }}</span>
            </div>
          </div>
        </div>
        <div class="flex items-end justify-end min-w-[30px] h-full">
          <span class=" z-0 leading-[33px] min-w-[70px] text-right" :class="{
            'text-[#FFD700] font-[900] text-[46px]': index === 0,
            'text-[#C0C0C0] font-[900] text-[46px]': index === 1,
            'text-[#CD7F32] font-[900] text-[46px]': index === 2,
            'text-[#df4c25] text-[26px]': index > 2
          }" style="text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">{{ item.rating }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.carusel-img {
  clip-path: polygon(calc(0% + 30px) 0, 100% 0, 100% calc(100% - 25px), calc(100% - 30px) 100%, 0 100%, 0 calc(0% + 25px));
}
.item-user {
  position: relative;
  clip-path: polygon(calc(100% - 15px) 0, 100% calc(100% - 55px), 100% 100%, 0 100%, 0% 100%, 0 0);
}
.item-car {
  transition: all 0.3s ease-in-out;
}

.rating-item-1,
.rating-item-2,
.rating-item-3 {
  position: relative;
}

.rating-item-1::before,
.rating-item-2::before,
.rating-item-3::before {
  content: "";
  bottom: -1px;
  right: -10px;
  width: 40px;
  height: 46px;
  position: absolute;
  z-index: -1;
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  clip-path: polygon(calc(100% - 25px) 0, 0 0, 100% 0, 100% 100%, 0 100%, 0% calc(100% - 35px));
}

.rating-item-1::before {
  background: #FFD700;
}
.rating-item-2::before {
  background: #C0C0C0;
}
.rating-item-3::before {
  background: #CD7F32;
}

.active-slide {
  background: rgb(81 79 79);
  border-radius: 0px;
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
