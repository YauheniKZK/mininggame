<script setup lang="ts">
// import { tapActionIncr } from '@/services/tap.service';
import WebApp from '@twa-dev/sdk'
import VirtualKeyboard from '@/components/VirtualKeyboard.vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { getImageUrl } from '@/utils/images';
import { storeToRefs } from 'pinia';
import { onMounted, ref, watch } from 'vue';

const appStore = useApplicationStore()
const { totalScoreGetters, miningTotalScoreGetters } = storeToRefs(appStore)
const { updateTotalScore, actionMiningMoney, actionIsTaping } = appStore

// const tap = ref(false)
const tapBlockContainer = ref()

// const updateScore = () => {
//   let value = totalScoreGetters.value
//   value++
//   updateTotalScore(value)
//   tapAction()
//   tap.value = true
//   setTimeout(() => {
//     tap.value = false
//   }, 100)
// }
let num = 0
const timer = ref(0)
const interval = ref<any>(null)

watch(() => timer.value, async (newVal) => {
  if (newVal) {
    console.log('newVal', newVal)
    if (newVal > 0) {
      clearInterval(interval.value)
      timer.value = 0
      actionMiningMoney(totalScoreGetters.value + miningTotalScoreGetters.value)
      
      // await actionGetUser('page')
      
      actionIsTaping(false)
      // resetMiningTotalScore()
      // updateTotalScore(0)
    }
  }
})

const updateTouchEnd = async () => {
  actionIsTaping(true)
  let value = totalScoreGetters.value
  value++
  // WebApp.CloudStorage.setItem('totalScore', String(value))
  WebApp.HapticFeedback.impactOccurred('medium')
  updateTotalScore(value)
  // console.log('props.idUser1', props.idUser)
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    timer.value++
  }, 400)
  num++
  
  if (num > 5) {
    // tapActionIncr(totalScoreGetters.value)
    num = 0
    // updateTotalScore(0)
    // await actionGetUser('page')
    // await actionMiningMoney(totalScoreGetters.value)
  }
  
  // tapAction()
  // tapActionIncr(totalScoreGetters.value)
  // tapBlock.value.style.transform = ``
}
// const updateTouchStart = () => {
//   // tapBlock.value.style.transform = `perspective(500px) rotateY(${((event.touches[0].clientX - tapBlock.value.offsetWidth) / 30) * 1}deg) rotateX(${((event.touches[0].clientY - tapBlock.value.offsetHeight) / 3) * -1}deg)`;
// }
// const imgtap = ref()
const myCanvas = ref()
const texts = ref<any>([])
// const speed = ref(1)
const animationFrameId = ref<any>(null)
const img = new Image()
img.src = getImageUrl('img/keyboard1.png')
img.height = 300
img.width = 300
const ctx = ref()
function addText(text: string, x: number, y: number) {
  texts.value.push({ text: text, x: x, y: y, alpha: 1.0 });
}
const clickCanvas = (event: any) => {
  if (myCanvas.value) {
    // if (navigator.vibrate) {
    //   // Вибрация на 200 миллисекунд
    //   navigator.vibrate(200);
    // }
    
    console.log('1111', event)
    // const speed = 0.5
    // const xImg = (myCanvas.value.width - img.width) / 2; // Вычисляем координату X для центрирования
    // const yImg = (myCanvas.value.height - img.height) / 2; // Вычисляем координату Y для центрирования
    const touch = event.changedTouches[0]
    const rect = myCanvas.value.getBoundingClientRect()
    const xTouch = Math.round(touch.clientX - rect.left);
    const yTouch = Math.round(touch.clientY - rect.top);
    let y = yTouch
    // texts.value.forEach((item: any) => {
    //   item.y = y
    //   item.alpha = 1
    // })
    // let alpha = 1.0

    // const ctx = myCanvas.value.getContext("2d");
    // ctx.imageSmoothingEnabled = true
    // const rect = myCanvas.value.getBoundingClientRect()
    const x = xTouch;

    function animateTexts() {
      ctx.value.clearRect(0, 0, myCanvas.value.width, myCanvas.value.height); // Очищаем canvas
      // ctx.drawImage(img, xImg, yImg, 300, 300);
      // Обновляем свойства и отрисовываем каждый текст
      texts.value.forEach(function(textObj: any, index: number) {
        ctx.value.font = '38px "Ubuntu"';
        ctx.value.fillStyle = `rgba(255, 255, 255, ${textObj.alpha})`;
        ctx.value.fillText(textObj.text, textObj.x, textObj.y);
        // Обновляем координаты и прозрачность для анимации
        
        textObj.y -= 1;
        textObj.alpha -= 0.005;

        // if (textObj.alpha < 3) {
        //   textObj.y -= 2;
        // } else {
        //   textObj.y -= 0.02;
        // }

        // Удаляем текст, если он полностью исчез
        if (textObj.alpha <= 0) {
          texts.value.splice(index, 1);
          animationFrameId.value = null
        }
      });

      // Запускаем следующий кадр анимации
      if (texts.value.some((text: any) => text.y > -24)) {
        animationFrameId.value = requestAnimationFrame(animateTexts);
      } else {
        // Удаляем тексты, которые уже исчезли
        texts.value = texts.value.filter((text: any) => text.y > -24);
        animationFrameId.value = null
      }
      // if (texts.value.length > 0) {
      //   requestAnimationFrame(animateTexts);
      // }
    }
    const symbolsArr = ['%', '$', '#', '@', '!', '/', ')', '{}', 'let', 'var', 'func', '>', 'sync', 'dev', '{', '(', '()', 'oops']; // Ваш список символов

    function getRandomSymbol(symbols: string[]) {
      return symbols[Math.floor(Math.random() * symbols.length)];
    }
    const symbol = getRandomSymbol(symbolsArr)
    addText(symbol, x, y);
    animateTexts()
    // ctx.drawImage(img, xImg, yImg, 300, 300)
    updateTouchEnd()
  }
}

onMounted(() => {
  if (myCanvas.value) {

    console.log('www', tapBlockContainer.value.clientWidth)
    myCanvas.value.width = tapBlockContainer.value.clientWidth
    myCanvas.value.height = 460
    ctx.value = myCanvas.value.getContext("2d");
    ctx.value.imageSmoothingEnabled = true
    // const ctx = myCanvas.value.getContext("2d");
    // img.onload = function() {
    //   const x = (myCanvas.value.width - img.width) / 2; // Вычисляем координату X для центрирования
    //   const y = (myCanvas.value.height - img.height) / 2; // Вычисляем координату Y для центрирования
    //   ctx.drawImage(img, x, y, 300, 300);
    // }
    // const ctx = myCanvas.value.getContext("2d");
    // // ctx.drawImage(imgtap.value, 10, 10);
    // imgtap.value.addEventListener("load", () => {
    //   ctx.drawImage(imgtap.value, 10, 10);
    // });
  }
})
</script>

<template>
  <div ref="tapBlockContainer" class="flex flex-col relative">
    <VirtualKeyboard />
    <div class="w-[100vh] max-w-[100%] h-[400px] touch-none relative z-[1]">
      <canvas ref="myCanvas" class="absolute -top-[40px]" @touchend="clickCanvas"></canvas>
    </div>
    <!-- <div style="display:none;">
      <img ref="imgtap" :src="getImageUrl('img/keyboard1.png')" alt="" />
    </div> -->
    <div
      ref="tapBlock"
      class="flex items-center justify-center absolute top-[calc(50%-150px)] z-[0] left-[calc(50%-150px)] w-[300px] h-[300px] rounded-[50%] tapBlock"
    >
    </div>
  </div>
</template>

<style scoped>
.tapBlock {
  background: url('../assets/img/keyboard1.png') no-repeat center;
  background-size: contain;
}
</style>
