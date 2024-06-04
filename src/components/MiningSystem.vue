<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import WebApp from '@twa-dev/sdk';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { onUnmounted } from 'vue';
import { getImageUrl } from '@/utils/images';
import { storeToRefs } from 'pinia';

const appStore = useApplicationStore()
const { availableTapsGetters, maxTapsGetters } = storeToRefs(appStore)
const { switchModalMiningSystem, minusAvailableTaps, plusAvailableTaps } = appStore

const mainContainer = ref()
const monitorActive = ref('')

const video = ref()
const video2 = ref()
const loadingVideo1 = ref(true)
const loadingVideo2 = ref(true)
const activeVideo = ref(true)

const scrollbarContainer = ref()
const scrollbarRef = ref()
const textGeneratedRef = ref<any>()
const textGenerated = ref('')
function generateMatrixSymbol() {
  const characters = 'абвгде ёж зийкл м нопр сту фхц чшщъыьэюяA BCDEFGHIJKLMNOPQ RSTUVWXYZ 123 4567890 {}@!%[]()^$';
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
  switchModalMiningSystem()
})

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
  whiteText()
  drawCircle(e)
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

onUnmounted(() => {
  WebApp.BackButton.hide()
})
</script>

<template>
  <div ref="mainContainer" class="flex flex-col w-full relative" style="height: calc(100vh - 32px);">
    <div ref="topContainer" class="flex flex-col w-full h-[50%] relative z-[1]">
      <div class="flex monitor-block relative w-full p-[16px_8px] mb-[16px]" :class="monitorActive">
        <div class="line-1"></div>
        <div class="line-2"></div>
        <div class="line-3"></div>
        <div ref="scrollbarContainer" class="sub-monitor-block w-full">
          <n-scrollbar ref="scrollbarRef" class="scrollbarRef" style="max-height: 260px">
            <p ref="textGeneratedRef" class="break-words text-term" :class="monitorActive">{{ textGenerated }}</p>
          </n-scrollbar>
          <!-- <span class="text-term" :class="monitorActive">{{ 'Text description' }}</span> -->
        </div>
      </div>
      <div class="flex flex-col bg-[#ffffff08] min-h-[40px]" style="clip-path: polygon(0px 0px, 0px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, -10% 100%);">
        <div class="flex w-full p-[4px_16px]">
          <div class="flex flex-col mr-[24px]">
            <span class="text-[#ffffff91] text-[12px]">{{ '[$/tap]' }}</span>
            <span class="text-[16px] text-[#fff] leading-[22px]">{{ '0.01' }}</span>
          </div>
          <div class="flex flex-col">
            <span class="text-[#ffffff91] text-[12px]">{{ '[Energy]' }}</span>
            <span class="text-[16px] text-[#fff] leading-[22px]">{{ availableTapsGetters + '/' + maxTapsGetters }}</span>
          </div>
        </div>
        <div class="flex h-[4px] relative progress-block overflow-hidden">
          <div class="w-full min-w-[10px] h-full bg-[#f4c543] relative bar-pr" :style="`width: ${setProcent}%`"></div>
        </div>
      </div>
    </div>
    <div ref="bottomContainer" class="flex h-[50%] relative">
      <div class="center-block" :class="activeVideo ? 'active' : ''">
        <span>{{ 'Start' }}</span>
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
  transition: all 0.5s ease-in-out;
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
  transition: all 0.3s ease-in-out;
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
  transition: all 1.5s ease-in-out;
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
</style>
