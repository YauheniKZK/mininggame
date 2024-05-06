<script setup lang="ts">
import { tapAction, tapActionIncr } from '@/services/tap.service';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const props = defineProps<{ idUser: number }>()

const appStore = useApplicationStore()
const { totalScoreGetters } = storeToRefs(appStore)
const { updateTotalScore, actionGetTotalScore } = appStore

const tap = ref(false)
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
const updateTouchEnd = async () => {
  let value = totalScoreGetters.value
  value++
  updateTotalScore(value)
  console.log('props.idUser', props.idUser)
  num++
  if (num > 20) {
    tapActionIncr(totalScoreGetters.value)
    num = 0
    updateTotalScore(0)
    await actionGetTotalScore()
  }
  
  // tapAction()
  // tapActionIncr(totalScoreGetters.value)
  // tapBlock.value.style.transform = ``
}
const updateTouchStart = (event) => {
  // tapBlock.value.style.transform = `perspective(500px) rotateY(${((event.touches[0].clientX - tapBlock.value.offsetWidth) / 30) * 1}deg) rotateX(${((event.touches[0].clientY - tapBlock.value.offsetHeight) / 3) * -1}deg)`;
}
</script>

<template>
  <div
    ref="tapBlock"
    class="flex items-center justify-center w-[300px] h-[300px] rounded-[50%] tapBlock"
    @touchend="updateTouchEnd"
    @touchstart="updateTouchStart"
  >
    <!-- <span class="text-[#fff] " :class="{
      'text-[20px]': tap,
      'text-[24px]': !tap
    }">{{ 'Tap' }}</span> -->
  </div>
</template>

<style scoped>
.tapBlock {
  background: url('../assets/img/keyboard1.png') no-repeat center;
  background-size: contain;
}
</style>
