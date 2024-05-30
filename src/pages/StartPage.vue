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

const currentIndex = ref(0)

const updateCurrentIndex = (value: number) => {
  currentIndex.value = value
}

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
    <n-carousel :touchable="false" :current-index="currentIndex">
      <div class="flex flex-col relative h-screen">
        <div class="flex start-page-img">
          <img :src="getImageUrl('img/start/start_page-slide2.jpg')" alt="" />  
        </div>
        <div class="flex flex-col absolute bottom-[60px] left-0 w-full z-[1]">
          <div class="flex flex-col items-center relative mb-[24px] z-[1]">
            <span class="text-[26px] font-[500]">{{ 'Welcome to the city' }}</span>
            <span class="text-[36px] leading-[20px] font-[600]">{{ 'Cryptopia' }}</span>
          </div>
          <div class="flex flex-col z-[1] px-[16px] text-center">
            <span>
              {{ 'You are DevCat - a nomad who came from me. To the city of blockchain and airdrops, to the city of zeros and ones.' }}
            </span>
            <span>
              {{ "You'll have to start all over again" }}
            </span>
          </div>
          <div class="flex justify-center w-full pt-[16px]">
            <button class="btn z-[1]" @click="updateCurrentIndex(1)">
              <span class="btn__content text-[#fff] font-[600]">Next</span>
              <span class="btn__glitch"></span>
              <span class="btn__label">DevCat</span>
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col relative h-screen">
        <div class="flex start-page-img">
          <img :src="getImageUrl('img/start/start_page-slide1.jpg')" alt="" />
        </div>
        <div class="flex flex-col absolute bottom-[60px] left-0 w-full z-[1]">
          <div class="flex flex-col items-center relative mb-[24px] z-[1]">
            <span class="text-[26px] font-[500]">{{ 'Become the best' }}</span>
            <span class="text-[36px] leading-[20px] font-[600]">{{ 'DevCat' }}</span>
          </div>
          <div class="flex flex-col z-[1] px-[16px] text-center">
            <span>
              {{ "Study new technologies and improve your skills, participate in events and create your own projects so as not to miss the opportunities that this city can provide." }}
            </span>
            <span>
              {{ "Get to the top and you'll get it all." }}
            </span>
          </div>
          <div class="flex justify-center w-full pt-[16px]">
            <button class="btn red z-[1]" @click="start">
              <span class="btn__content text-[#fff] font-[600]">Start</span>
              <span class="btn__glitch"></span>
              <span class="btn__label">New</span>
            </button>
          </div>
        </div>
      </div>
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

<style>
.start-page-img::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(13, 13, 13, 1) 43%, rgba(13, 13, 13, 1) 0%, rgba(13, 13, 13, 0) 90%);
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

:root {
  --yellow-color: #fcee09; 
  --red-color: #ff003c;
  --black-color: #050a0e;
  --blue-color: #00f0ff;
  --white-color: #fafafa;
}

.btn {
  width: 230px;
  height: 42px;
  border: 0;
  outline: none;
  background: var(--yellow-color);
  cursor: pointer;
  position: relative;
  font-family: Tomorrow, sans-serif;
  font-size: .85rem;
  text-transform: uppercase;
  color: var(--black-color);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
}

.btn.red {
  background: var(--black-color);
}

.btn__content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background: #000;
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
}

.btn--secondary {
  background-color: var(--white-color);
}

.btn.red .btn__content {
  background-color: var(--red-color);
  color: var(--white-color);
}

.btn__label {
  font-size: .40rem;
  position: absolute;
  bottom: -1px;
  right: 8%;
  padding: 0 5px;
  background-color: var(--yellow-color);
  z-index: 3;
  border-left: 1px solid var(--blue-color);
}

.btn.red .btn__label {
  background-color: var(--white-color);
  color: var(--black-color);
}

.btn__glitch {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fcf0095d;
  filter: drop-shadow(-2px 3px #67e3f35b) drop-shadow(-1px -3px #02d7f37e) drop-shadow(2px 1px #02d7f363);
}

.btn.red .btn__glitch {
  background-color: var(--red-color);
}

.btn .btn__glitch,
.btn .btn__content::after,
.btn .btn__glitch,
.btn .btn__content::after {
  display: block;
  animation: glitch-animation 2s linear 0s infinite;
}

/* secret trick */
@keyframes glitch-animation {
  0% {
    opacity: 1;
    transform: translateZ(0);
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
  }

  2% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(-5px);
  }

  6% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(5px);
  }

  8% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(-5px);
  }

  9% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(0);
  }

  10% {
    clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
    transform: translate3d(5px, 0, 0);
  }

  13% {
    clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
    transform: translateZ(0);
  }

  13.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    transform: translate3d(5px, 0, 0);
  }

  15% {
    clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
    transform: translate3d(5px, 0, 0);
  }

  20% {
    clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
    transform: translate3d(-5px, 0, 0);
  }

  20.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    transform: translate3d(5px, 0, 0);
  }

  25% {
    clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
    transform: translate3d(5px, 0, 0);
  }

  30% {
    clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
    transform: translate3d(-5px, 0, 0);
  }

  30.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }

  35% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(-5px);
  }

  40% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(5px);
  }

  45% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(-5px);
  }

  50% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(0);
  }

  55% {
    clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
    transform: translate3d(5px, 0, 0);
  }

  60% {
    clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
    transform: translateZ(0);
    opacity: 1;
  }

  60.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    opacity: 1;
  }

  to {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    opacity: 1;
  }
}

</style>
