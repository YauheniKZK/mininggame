<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { getImageUrl } from '@/utils/images';
import { storeToRefs } from 'pinia';
import { computed, onMounted, watch } from 'vue';

defineProps<{ msg: string }>()

const appStore = useApplicationStore()
const { totalScoreGetters, totalUserScoreGetter } = storeToRefs(appStore)
const { actionGetTotalScore } = appStore

// watch(() => totalUserScoreGetter.value, async (newVal) => {
//   if (newVal) {
//     await actionGetTotalScore()
//   }
// })

// const total = computed(() => totalUserScoreGetter.value)

onMounted(async () => {
  await actionGetTotalScore()
})
</script>

<template>
  <div class="flex items-center">
    <img :src="getImageUrl('img/monetka1.png')" class="w-[60px] h-[60px] mr-[8px] object-contain" alt="">
    <div class="flex flex-col">
      <div class="flex items-end">
        <span class="text-[24px] text-[#fff] font-[600] leading-[24px] mr-[6px]">{{ totalScoreGetters }}</span>
        <span class="text-[14px] text-[#fff] font-[600] leading-[18px]">{{ '$/hour' }}</span>
      </div>
      <div class="flex items-center text-[14px] text-[#fff] font-[600] leading-[18px]">
        {{ 'Total: ' + totalUserScoreGetter }}
      </div>
    </div>

  </div>
  
</template>

<style scoped>
</style>
