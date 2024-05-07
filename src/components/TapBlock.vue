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
onMounted(() => {
  if (imgtap.value && myCanvas.value) {
    const ctx = myCanvas.value.getContext("2d");
    ctx.drawImage(imgtap.value, 10, 10);
  }
})
</script>

<template>
  <div class="flex flex-col">
    <div class="w-[300px] max-w-[100%] h-[300px]">
      <canvas ref="myCanvas" width="100%" height="300"></canvas>
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
