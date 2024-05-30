<script setup lang="ts">
// import { ChevronForward } from '@vicons/ionicons5'
import { useApplicationStore } from '@/stores/application/applicationStore';
import { getImageUrl } from '@/utils/images';
import { ArrowBack, ArrowForward } from '@vicons/ionicons5'
// import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import TapBlock from './main/layouts/default/components/TapBlock.vue';
import UserSetting from '@/components/user/UserSetting.vue';
// import TestComponent from '@/components/TestComponent.vue';
// import VirtualKeyboard from '@/components/VirtualKeyboard.vue';
// import TapBlockV2 from '@/components/TapBlockV2.vue';

const appStore = useApplicationStore()
// const { totalScoreGetters, totalUserScoreGetter } = storeToRefs(appStore)
const { actionRegistrationUser, actionGetUser } = appStore

// watch(() => totalUserScoreGetter.value, async (newVal) => {
//   if (newVal) {
//     await actionGetTotalScore()
//   }
// })

// const total = computed(() => totalUserScoreGetter.value)

// onMounted(async () => {
//   await actionGetTotalScore()
// })
const valueTab = ref('slide1')
const updateTab = (value: string) => {
  valueTab.value = value
}
const showModal = ref(false)

const start = () => {
  showModal.value = true
  setTimeout(async () => {
    await actionRegistrationUser()
    await actionGetUser('page')
    showModal.value = false
  }, 3000)
}

onMounted(() => {
})
</script>

<template>
  <div class="flex flex-col w-full h-full relative start-page bg-[#0d0d0d]">
    <n-carousel show-arrow>
      <div class="flex flex-col start-page-img relative">
        <img :src="getImageUrl('img/start/start_page-slide1.jpg')" alt="" />
        <div class="flex flex-col items-center relative -top-[40px] z-[1]">
          <span class="text-[26px]">{{ 'Welcome to' }}</span>
          <span class="text-[36px] leading-[20px]">{{ 'Cryptopia' }}</span>
        </div>
        <div class="flex flex-col z-[1] px-[16px] text-center">
          <span>
            {{ 'You are DevCat - a nomad who came from me. To the city of blockchain and airdrops, to the city of zeros and ones.' }}
          </span>
          <span>
            {{ "You'll have to start all over again" }}
          </span>
        </div>
      </div>
      <div class="flex flex-col start-page-img relative">
        <img :src="getImageUrl('img/start/start_page-slide1.jpg')" alt="" />
        <div class="flex flex-col items-center relative -top-[40px] z-[1]">
          <span class="text-[26px]">{{ 'Become the best' }}</span>
          <span class="text-[26px] leading-[20px]">{{ 'DevCat' }}</span>
        </div>
        <div class="flex flex-col z-[1] px-[16px] text-center">
          <span>
            {{ "Study new technologies and improve your skills, participate in events and create your own projects so as not to miss the opportunities that this city can provide. Get to the top and you'll get it all." }}
          </span>
        </div>
      </div>
      <template #arrow="{ prev, next }">
        <div class="custom-arrow">
          <button type="button" class="custom-arrow--left" @click="prev">
            <n-icon><ArrowBack /></n-icon>
          </button>
          <button type="button" class="custom-arrow--right" @click="next">
            <n-icon><ArrowForward /></n-icon>
          </button>
        </div>
      </template>
      <template #dots="{ total, currentIndex, to }">
        <ul class="custom-dots">
          <li
            v-for="index of total"
            :key="index"
            :class="{ ['is-active']: currentIndex === index - 1 }"
            @click="to(index - 1)"
          />
        </ul>
      </template>
    </n-carousel>
    <!-- <n-tabs
      class="w-full tabs-custom1 none-tab h-full"
      :pane-style="'height: inherit;'"
      :pane-wrapper-style="'height: inherit;'"
      @update:value="updateTab" animated>
      <n-tab-pane name="slide1" class="w-full">
        <div class="flex flex-col w-full justify-center h-full relative p-[16px]">
          <span class="text-[#fff] text-[32px] flex mb-[50px]">{{ 'Step 1 info description' }}</span>
     
        </div>
      </n-tab-pane>
      <n-tab-pane name="slide2" class="w-full h-full">
        <div class="flex flex-col w-full h-full justify-center relative p-[16px]">
          <span class="text-[#fff] text-[32px]">{{ 'Step 2 info description' }}</span>
        </div>
        <n-modal
          :show="showModal"
          preset="card"
          :closable="false"
          :content-style="'background: #3C5B6F'"
          :header-style="'background: #3C5B6F'"
          style="border-radius: 8px"
          class="max-w-[90%] rounded-[8px]"
        >
          <template #header-extra>{{ '' }}</template>
          <div class="flex flex-col items-center justify-center">
            <img :src="getImageUrl('loader/Dual_Ball.svg')" class="max-w-[80px]" alt="" />
            <div class="p-[16px]">
              <span class="text-[#fff] font-[600]">{{ 'loading...' }}</span>
            </div>
          </div>
        </n-modal>
      </n-tab-pane>
    </n-tabs>
    <Transition name="slide-up">
      <div v-if="valueTab === 'slide1'" class="flex absolute right-[16px] bottom-[40px]">
        <button
          type="button" 
          class="w-[50px] h-[50px] flex justify-center items-center bg-[#3C5B6F] rounded-[8px]"
          @click="updateTab('slide2')"
        >
          <n-icon :color="'#fff'" :size="30"><ChevronForward /></n-icon>
        </button>
      </div>
      
      <div v-else class="flex w-full px-[16px] absolute right-[0px] bottom-[40px]">
        <button
          type="button" 
          class="w-full h-[50px] flex justify-center items-center bg-[#3C5B6F] rounded-[8px]"
          @click="start"
        >
          <span class="text-[#fff] font-[600]">{{ 'Start Game' }}</span>
        </button>
      </div>
    </Transition> -->
  </div>
</template>

<style scoped>
.start-page-img::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(13,13,13,1) 0%, rgba(13,13,13,0) 100%);
  z-index: 1;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(60px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}

.btn-animation {
  z-index: 2;
}

.btn-animation::after {
    content: '';
    background: #000;
    position: absolute;
    border-radius: 50%;
    left: 0;
    width: 100%;
    top: 0;
    z-index: 1;
    height: 100%;
}

.btn-animation::before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: 1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 1;
    transition: opacity .3s ease-in-out;
    border-radius: 50%;
    
}
@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}

.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}

</style>
