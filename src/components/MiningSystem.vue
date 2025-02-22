<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import WebApp from '@twa-dev/sdk';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { onUnmounted } from 'vue';
import { getImageUrl } from '@/utils/images';
import { storeToRefs } from 'pinia';
import { CloseOutline, Flash } from '@vicons/ionicons5'


const appStore = useApplicationStore()
const { availableTapsGetters, maxTapsGetters, mainBalanceUserGetters } = storeToRefs(appStore)
const { switchModalMiningSystem, minusAvailableTaps, plusAvailableTaps, startPassiveEarn } = appStore

const mainContainer = ref()
const monitorActive = ref('')

const textStart = ref('Start')

const video = ref()
const video2 = ref()
const loadingVideo1 = ref(true)
const loadingVideo2 = ref(true)
const activeVideo = ref(true)

const balanceRef = computed(() => {
  if (mainBalanceUserGetters.value) {
    return Number(mainBalanceUserGetters.value / 100).toFixed(2)
  } else {
    return 0
  }
})

const scrollbarContainer = ref()
const scrollbarRef = ref()
const textGeneratedRef = ref<any>()
const textGenerated = ref('')
function generateMatrixSymbol() {
  const characters = '{wq dQ @E!e $% &^686 79 FF } BCD EF GHIJK LMNOPQ RSTUVWXYZ 123 4567890 {}@!%[]()^$';
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

const whiteText = () => {
  const symbol = generateMatrixSymbol()
  textGenerated.value += symbol
  textGeneratedRef.value.textContent = textGenerated.value
  console.log('scrollbarContainer.value.scrollHeight', scrollbarContainer.value.scrollHeight)
  const scrollbar: any = document.querySelector('.scrollbarRef .n-scrollbar-content')
  scrollbarRef.value.scrollTo(0, scrollbar.scrollHeight)
}

WebApp.BackButton.onClick(() => {
  switchModalMiningSystem(false)
})

const closeMining = () => {
  switchModalMiningSystem(false)
}

const setProcent = computed(() => {
  return (availableTapsGetters.value * 100) / maxTapsGetters.value
})

let num = 0
const timer = ref(0)
const interval = ref<any>(null)

watch(() => timer.value, async (newVal) => {
  if (newVal) {
    console.log('newVal', newVal)
    if (newVal > 2) {
      clearInterval(interval.value)
      timer.value = 0
      activeVideo.value = true
    }
  }
})

const intervalAvailableTaps = ref<any>(null)

watch(() => availableTapsGetters.value, (newVal) => {
  if (newVal && newVal < 200) {
    if (!intervalAvailableTaps.value) {
      intervalAvailableTaps.value = setInterval(() => {
        if (intervalAvailableTaps.value >= 200) {
          clearInterval(intervalAvailableTaps.value)
        } else {
          plusAvailableTaps()
        }
        
      }, 1000)
    }
  }
})

const topContainer = ref()
const bottomContainer = ref()

const canvas = ref(null);
const animations = []; // Массив для хранения всех анимаций
const ripples = [];

function createAnimation(x, y, colors, shadowColors, outerRotationSpeeds, innerRotationSpeeds, count) {
  const circles = [];
  for (let i = 0; i < count; i++) {
    circles.push({
      x, y, opacity: 1, outerAngle: 0, innerAngle: 0,
      color: colors[i], shadowColor: shadowColors[i],
      outerRotationSpeed: outerRotationSpeeds[i], innerRotationSpeed: innerRotationSpeeds[i],
      radius: 15 + i * 15 // Размеры кругов увеличиваются с каждым новым кругом
    });
  }
  animations.push({ circles });
}

const action = (e) => {
  activeVideo.value = false
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    timer.value++
  }, 400)
  num++
  minusAvailableTaps()
  startPassiveEarn(0.01)
  whiteText()
  drawCircle(e)
  setTimeout(() => {
    textStart.value = 'Continue'
  }, 1500)
}

function drawCircle(event) {
  const rect = canvas.value.getBoundingClientRect();
  const touch = event.changedTouches[0]
  const x = Math.round(touch.clientX - rect.left);
  const y = Math.round(touch.clientY - rect.top);
  const count = 3; // Задаем количество кругов в анимации
  const colors = new Array(count).fill(null).map(getRandomColor);
  const shadowColors = new Array(count).fill(null).map(getRandomColor);
  const outerRotationSpeeds = new Array(count).fill(null).map(() => Math.random() * 0.2 - 0.1);
  const innerRotationSpeeds = new Array(count).fill(null).map(() => Math.random() * 0.2 - 0.1);
  createAnimation(x, y, colors, shadowColors, outerRotationSpeeds, innerRotationSpeeds, count);
  ripples.push({ x, y, radius: 0, opacity: 0.3 });
  
}

function drawRotatingCircles(ctx, circle) {
  ctx.save();
  ctx.translate(circle.x, circle.y);
  // Вращаем внешний круг
  ctx.rotate(circle.outerAngle);
  drawHollowHalfCircle(ctx, 0, 0, 45, true, circle.color, circle.shadowColor);
  ctx.restore();
  
  ctx.save();
  ctx.translate(circle.x, circle.y);
  // Вращаем внутренний круг в противоположном направлении
  ctx.rotate(-circle.innerAngle);
  drawHollowHalfCircle(ctx, 0, 0, 30, false, circle.color, circle.shadowColor);
  ctx.restore();
  
  // Обновляем углы для следующего кадра
  circle.outerAngle += circle.outerRotationSpeed;
  circle.innerAngle += circle.innerRotationSpeed;

  ctx.fillStyle = 'rgba(255, 255, 255, 0.5'; // Цвет буквы
  ctx.font = '18px Arial'; // Шрифт и размер буквы
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(getRandomSymbol(symbolsArr), circle.x, circle.y)
}

function drawHollowHalfCircle(ctx, x, y, radius, isOuter, color, shadowColor) {
  ctx.strokeStyle = color;
  // ctx.shadowColor = shadowColor;
  // ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.arc(Math.round(x), Math.round(y), Math.round(radius), Math.PI, 0, isOuter);
  ctx.stroke();
  ctx.closePath();
}
const symbolsArr = ['%', '$', '#', '@', '!', '/', ')', '{','num', 'l', 'a', 'f', '>', 's', 'd', '{', '(', ')', '?', 'func', 'num', 'var', 'let', 'flo']; // Ваш список символов
function getRandomSymbol(symbols: string[]) {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function drawRipple(ctx, ripple) {
  ctx.beginPath();
  ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 255, ${ripple.opacity})`;
  ctx.fill();
}

import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin)

onMounted(() => {
  video.value.addEventListener('canplaythrough', function() {
    loadingVideo1.value = false
  })
  video2.value.addEventListener('canplaythrough', function() {
    loadingVideo2.value = false
  })
  const dpr = window.devicePixelRatio || 1;
  if (bottomContainer.value) {
    
    canvas.value.width = bottomContainer.value.clientWidth
    canvas.value.height = bottomContainer.value.clientHeight;
  }
  WebApp.BackButton.show()
  monitorActive.value = 'active'

  const ctx = canvas.value.getContext('2d');
  // ctx.scale(dpr, dpr)
  const animationLoop = () => {
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
    for (let ripple of ripples) {
      if (ripple.opacity <= 0) {
        ripples.splice(ripples.indexOf(ripple), 1);
      } else {
        drawRipple(ctx, ripple);
        // Увеличиваем радиус и уменьшаем прозрачность
        ripple.radius += 2;
        ripple.opacity -= 0.02;
      }
    }
    animations.forEach((anim, animIndex) => {
      anim.circles.forEach((circle, circleIndex) => {
        if (circle.opacity <= 0) {
          anim.circles.splice(circleIndex, 1);
        } else {
          ctx.globalAlpha = circle.opacity;
          drawRotatingCircles(ctx, circle);
          circle.opacity -= 0.035; // Плавное уменьшение прозрачности
        }
      });
      if (anim.circles.length === 0) {
        animations.splice(animIndex, 1);
      }
    });
    requestAnimationFrame(animationLoop);
  };
  animationLoop();
})

const showModalTasks = ref(false)

onUnmounted(() => {
  WebApp.BackButton.hide()
})

const title = ref()
const task1 = ref()
const task2 = ref()
const task3 = ref()
const setTextTitle = () => {

  setTimeout(() => {
    if (title.value) {
      gsap.to(title.value, {duration: 0.5, text: `Your task today`})
    }
    setTimeout(() => {
      if (task1.value) {
        gsap.to(task1.value, {duration: 0.5, text: `Make 50 taps -`})
      }
    }, 500)
    setTimeout(() => {
      if (task2.value) {
        gsap.to(task2.value, {duration: 0.5, text: `Make 100 taps -`})
      }
    }, 1000)
    setTimeout(() => {
      if (task3.value) {
        gsap.to(task3.value, {duration: 0.5, text: `Make 1000 taps -`})
      }
    }, 1500)
  }, 500)

}

watch(() => showModalTasks.value, (newVal) => {
  if (newVal) {
    setTextTitle()
  }
})
</script>

<template>
  <div ref="mainContainer" class="flex flex-col w-full relative" style="height: calc(100vh - 32px);">
    <div v-if="showModalTasks" class="fixed top-0 left-0 h-screen w-full z-[9]" @click="showModalTasks = false"></div>
    <Transition name="slide-right">
      <div
        v-if="showModalTasks"
        ref="containerTabsSkills"
        class="z-[10] mb-[12px] fixed right-0 min-w-[260px] max-w-[260px] top-0 pl-[30px] h-screen container-tasks pt-[100px] pb-[170px]"
        style="border-left: 1px solid #ffffff59;box-shadow: 1px 1px 24px 12px #0a0a0a4f;"
        >
          <div class="flex flex-col z-[1] perspective-block">
            <div class="line1"></div>
            <span ref="title" class="text-[#ffffffb3] text-[30px] flex mb-[16px] text-item"></span>
            <div class="flex flex-col">
              
              <span class="text-[#ffffffb3] text-[18px] text-item" ref="task1"></span>
              <span class="text-[#ffffffb3] text-[18px] text-item" ref="task2"></span>
              <span class="text-[#ffffffb3] text-[18px] text-item" ref="task3"></span>
            </div>
          </div>
      </div>
    </Transition>
    <div ref="topContainer" class="flex flex-col w-full h-[50%] relative z-[1]">
      
      <Transition name="slide-right">
        <div v-if="!showModalTasks" class="btn-menu-task" @click="showModalTasks =  true">
          <span>{{ 'tasks' }}</span>
        </div>
      </Transition>
      
      <div class="flex monitor-block relative w-full p-[16px_8px] mb-[16px]" :class="monitorActive">
        <div class="line-1"></div>
        <div class="line-2"></div>
        <div class="line-3"></div>
        <div ref="scrollbarContainer" class="sub-monitor-block w-full">
          <n-scrollbar ref="scrollbarRef" class="scrollbarRef" style="max-height: 260px">
            <p class="text-term" :class="monitorActive">
              <span ref="textGeneratedRef" class="cursor">{{ textGenerated }}</span>
            </p>
          </n-scrollbar>
          <!-- <span class="text-term" :class="monitorActive">{{ 'Text description' }}</span> -->
        </div>
      </div>
      <div class="flex flex-col bg-[#ffffff08] min-h-[40px]" style="clip-path: polygon(0px 0px, 0px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, -10% 100%);">
        <div class="flex w-full p-[4px_16px] justify-between">
          <div class="flex items-center">
            <div class="flex flex-col mr-[24px]">
              <span class="text-[#ffffff91] text-[12px]">{{ '[$/tap]' }}</span>
              <span class="text-[16px] text-[#fff] leading-[22px]">{{ '0.01' }}</span>
            </div>
            <div class="flex flex-col mr-[24px]">
              <div class="text-[#ffffff91] text-[12px] flex items-center">
                {{ '[' }}
                <n-icon :color="'#f4c543'" :size="14" class="">
                  <Flash />
                </n-icon>
                {{ '/tap]' }}</div>
              <span class="text-[16px] text-[#fff] leading-[22px]">{{ '1' }}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[#ffffff91] text-[12px]">{{ '[Energy]' }}</span>
              <span class="text-[16px] text-[#fff] leading-[22px]">{{ availableTapsGetters + '/' + maxTapsGetters }}</span>
            </div>
          </div>
          <div class="flex justify-end">
            <span class="text-[#f4c543] text-[20px] leading-[40px]">{{ '$ ' + balanceRef }}</span>
            
          </div>
        </div>
        <div class="flex h-[4px] relative progress-block overflow-hidden">
          <div class="w-full min-w-[10px] h-full bg-[#f4c543] relative bar-pr" :style="`width: ${setProcent}%`"></div>
        </div>
      </div>
    </div>
    <div ref="bottomContainer" class="flex h-[50%] relative">
      <button
        class="flex justify-center items-center absolute -right-[16px] bottom-0 btn-close"
        :class="activeVideo ? 'active' : ''"
        @click="closeMining"
      >
        <n-icon :color="'#050a0e'" :size="46" class="">
          <CloseOutline />
        </n-icon>
      </button>
      <div class="center-block" :class="activeVideo ? 'active' : ''">
        <span>{{ textStart }}</span>
      </div>
      <canvas ref="canvas" class="relative z-[2]" @touchend="e => action(e)"></canvas>
      <img :src="getImageUrl('img/background-grid.jpg')" class="absolute left-0 top-0 object-cover w-full h-full opacity-[0.3] z-[1]" alt="">
      <span v-if="loadingVideo1 && loadingVideo2" class="absolute left-0 top-0 object-cover w-full h-full opacity-[0.8] text-[#fff]">{{ 'Loading' }}</span>
      <video
        v-show="!loadingVideo2 && !loadingVideo1"
        ref="video"
        width="320"
        height="240"
        autoplay
        muted
        loop
        class="absolute z-[0] video-block left-0 top-0 object-cover w-full h-full"
        :class="activeVideo ? 'active' : ''"
      >
        <source :src="getImageUrl('video/bg_tiny2.mp4')" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <video
        v-show="!loadingVideo2 && !loadingVideo1"
        ref="video2"
        width="320"
        height="240"
        autoplay
        muted
        loop
        class="absolute z-[0] left-0 top-0 object-cover w-full h-full opacity-[0.1]"
      >
        <source :src="getImageUrl('video/bg_tiny.mp4')" type="video/mp4">
        Your browser does not support the video tag.
      </video> 
    </div>
  </div>
</template>

<style scoped>

.perspective-block {
  transform: rotateX(10deg) rotateY(-18deg) rotateZ(3deg);
  padding-right: 24px;
  align-items: flex-end;
}

.text-item {
  text-shadow: 4px 14px 4px #ffffff30;
  text-align: right;
}

.container-tasks {
  display: flex;
  flex-flow: column;
}

.container-tasks .line1 {
  position: absolute;
  right: 16px;
  top: -12px;
  height: 1px;
  width: calc(100% - 16px);
  background: #ffffff3b;
}

.container-tasks .line1::before {
  content: '';
  width: 4px;
  height: 4px;
  position: absolute;
  left: 0;
  top: 0;
  background: #ffffff3b;
}

.container-tasks::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
}

.btn-menu-task {
  position: absolute;
  right: -38px;
  top: calc(50% - 65px);
  background: #f4c543;
  line-height: 18px;
  min-width: 70px;
  transform: rotate(-90deg);
  display: flex;
  justify-content: center;
  padding: 8px 16px;
  z-index: 2;
  clip-path: polygon(calc(100% - 10px) -1px, 100% 10px, 100% 100%, calc(0% + 0px) 100%, 0% calc(100% - 10px), 0 0);
}

.btn-menu-task span {
  position: relative;
  height: min-content;
  font-weight: 500;
  font-size: 20px;
  line-height: 12px;
}

.btn-close {
  opacity: 0;
  background: #f4c543;
  z-index: 4;
  min-width: 66px;
  height: 50px;
  transition: all 0.2s ease-in-out;
}

.btn-close.active {
  opacity: 1;
  transition: all 0.2s ease-in-out;
}

.center-block {
  opacity: 0;
  position: absolute;
  top: calc(50% - 25px);
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  color: #ffffff8a;
  line-height: 50px;
  font-size: 50px;
  text-align: center;
  letter-spacing: 10px;
  transition: all 0.5s ease-in-out;
}

.center-block.active {
  opacity: 1;
  transition: all 0.5s 1s ease-in-out;
}

.progress-block {
  background: #ffffff21;
}

.bar-pr {
  transition: all 0.2s ease-in-out;
}

.video-block {
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.video-block.active {
  opacity: 0.3;
  transition: all 0.3s 1s ease-in-out;
}

.text-term {
  color: #ffffff85;
  font-size: 22px;
  letter-spacing: -2px;
  line-height: 20px;
  text-shadow: 1px 1px #ffffff12;
  opacity: 0;
  display: none;
  transition: all 1.5s ease-in-out;
}

.text-term.active {
  display: flex;
  opacity: 1;
  transition: all 1.5s 1s ease-in-out;
}

.monitor-block {
  width: 36px;
  min-height: calc(100% - 90px);
  border-radius: 8px/6px;
  /* clip-path: polygon(15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px), 0 15px); */
  background: #7a7a7a1f;
  border-left: 1px solid #ffffff7e;
  border-right: 1px solid #ffffff7e;
  border-top: 8px solid #ffffff15;
  border-bottom: 8px solid #ffffff15;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 20px 30px -10px;
  transition: all 1s ease-in-out;
}

.monitor-block.active {
  transition: all 1s ease-in-out;
  width: 100%;
  transform: perspective(800px) rotateY(25deg) scale(0.9) rotateX(10deg);
}

.monitor-block .line-1,
.monitor-block .line-2 {
  position: absolute;
  width: 100%;
  height: 1px;
  background: #ffffff0e;
  top: 50%;
  left: 0;
  transform: rotate(33deg);
}

.monitor-block .line-2 {
  transform: rotate(-33deg);
}

.monitor-block .line-3 {
  position: absolute;
  width: 100%;
  height: 1px;
  background: #ffffff0e;
  top: 50%;
  left: 0;
}

.sub-monitor-block {
  overflow: hidden;
  border-left: 1px solid #f4c543;
  border-right: 1px solid #f4c543;
  padding: 0 8px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}


.cursor {
  position: relative;
}
.cursor::before {
  content: '';
  right: -10px;
  top: 0;
  position: absolute;
  display: inline-block;
  width: 6px;
  height: 20px;
  background-color: #e7e0e09a;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: transform 0.3s;
}
.slide-right-enter-from, .slide-right-leave-to {
  transform: translateX(100%);
}
</style>
