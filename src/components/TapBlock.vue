<script setup lang="ts">
// import { tapActionIncr } from '@/services/tap.service';
// import WebApp from '@twa-dev/sdk'
import { useApplicationStore } from '@/stores/application/applicationStore';
import { getImageUrl } from '@/utils/images';
import { storeToRefs } from 'pinia';
import { onMounted, ref, watch } from 'vue';

const appStore = useApplicationStore()
const { totalScoreGetters } = storeToRefs(appStore)
const { updateTotalScore, actionMiningMoney, actionGetUser } = appStore

// const tap = ref(false)
const tapBlock = ref()

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
      actionMiningMoney(totalScoreGetters.value)
      
      await actionGetUser('page')
      // updateTotalScore(0)
    }
  }
})

const updateTouchEnd = async () => {
  let value = totalScoreGetters.value
  value++
  // WebApp.CloudStorage.setItem('totalScore', String(value))
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
const updateTouchStart = () => {
  // tapBlock.value.style.transform = `perspective(500px) rotateY(${((event.touches[0].clientX - tapBlock.value.offsetWidth) / 30) * 1}deg) rotateX(${((event.touches[0].clientY - tapBlock.value.offsetHeight) / 3) * -1}deg)`;
}
const imgtap = ref()
const myCanvas = ref()

const clickCanvas = (event: any) => {
  if (myCanvas.value) {
    const texts: any = []
    console.log('1111')
    const rect = myCanvas.value.getBoundingClientRect()
    let y = event.touches[0].clientY - rect.top
    // let alpha = 1.0

    const ctx = myCanvas.value.getContext("2d");
    // const rect = myCanvas.value.getBoundingClientRect()
    const x = event.touches[0].clientX - rect.left;

    function addText(text: string, x: number, y: number, speed: number) {
      texts.push({ text: text, x: x, y: y, speed: speed, alpha: 1.0 });
    }

    function animateTexts() {
      ctx.clearRect(0, 0, myCanvas.value.width, myCanvas.value.height); // Очищаем canvas

      // Обновляем свойства и отрисовываем каждый текст
      texts.forEach(function(textObj: any, index: number) {
        ctx.font = '20px Arial';
        ctx.fillStyle = `rgba(0, 0, 0, ${textObj.alpha})`;
        ctx.fillText(textObj.text, textObj.x, textObj.y);

        // Обновляем координаты и прозрачность для анимации
        textObj.y -= textObj.speed;
        textObj.alpha -= 0.01;

        // Удаляем текст, если он полностью исчез
        if (textObj.alpha <= 0) {
          texts.splice(index, 1);
        }
      });

      // Запускаем следующий кадр анимации
      if (texts.length > 0) {
        requestAnimationFrame(animateTexts);
      }
    }
    addText('11$', x, y, 1);
    animateTexts()
  }
}

onMounted(() => {
  if (imgtap.value && myCanvas.value) {
    // const ctx = myCanvas.value.getContext("2d");
    // // ctx.drawImage(imgtap.value, 10, 10);
    // imgtap.value.addEventListener("load", () => {
    //   ctx.drawImage(imgtap.value, 10, 10);
    // });
  }
})
</script>

<template>
  <div class="flex flex-col">
    <div class="w-[300px] max-w-[100%] h-[300px]">
      <canvas ref="myCanvas" width="400" height="300" class="w-full" @touchend="clickCanvas"></canvas>
    </div>
    <div style="display:none;">
      <img ref="imgtap" :src="getImageUrl('img/keyboard1.png')" alt="" />
    </div>
    <div
      ref="tapBlock"
      class="flex items-center justify-center w-[300px] h-[300px] rounded-[50%] tapBlock"
      @touchend="updateTouchEnd"
      @touchstart="updateTouchStart"
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
