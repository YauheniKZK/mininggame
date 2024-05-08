<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { getImageUrl } from '@/utils/images';
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref, watch } from 'vue';
import moment from 'moment'

const appStore = useApplicationStore()
const { totalScoreGetters, totalUserScoreGetter, lastCheckinUserGetters } = storeToRefs(appStore)
// const { actionGetTotalScore } = appStore

const oldValue = ref(0)

watch(() => totalScoreGetters.value, (newVal, oldVal) => {
  if (oldVal) {
    oldValue.value = oldVal
  }
  if (newVal) {
    console.log('newVal', newVal)
  }
})

// watch(() => totalUserScoreGetter.value, async (newVal) => {
//   if (newVal) {
//     await actionGetTotalScore()
//   }
// })

// const total = computed(() => totalUserScoreGetter.value)

const getDiffTiem = computed(() => {
  if (lastCheckinUserGetters.value) {
    return Math.abs(moment(lastCheckinUserGetters.value).diff(moment(), 'seconds')) + ' sec'
  }
  return '--'
})

onMounted(async () => {
  // await actionGetTotalScore()
})
</script>

<template>
  <div class="flex items-center">
    <img :src="getImageUrl('img/monetka1.png')" class="w-[60px] h-[60px] mr-[8px] object-contain" alt="">
    <div class="flex flex-col">
      <div class="flex items-end">
        <!-- <n-number-animation
          ref="numberAnimationInstRef"
          :from="oldValue"
          :to="totalScoreGetters"
          :active="true"
          :precision="0"
        /> -->
        <span class="text-[24px] text-[#fff] font-[600] leading-[24px] mr-[6px]">{{ totalUserScoreGetter + totalScoreGetters }}</span>
        <span class="text-[14px] text-[#fff] font-[600] leading-[18px]">{{ '$/hour' }}</span>
      </div>
      <div class="flex items-center text-[14px] text-[#fff] font-[600] leading-[18px]">
        {{ 'TotaL: ' + totalUserScoreGetter }}
      </div>
      <div class="flex items-center text-[14px] text-[#fff] font-[600] leading-[18px]">
        {{ 'How long have you been gone: ' + getDiffTiem }}
      </div>
    </div>

  </div>
  
</template>

<style scoped>
</style>
