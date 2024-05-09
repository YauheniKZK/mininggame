<script setup lang="ts">
// import { useApplicationStore } from '@/stores/application/applicationStore';
// import { getImageUrl } from '@/utils/images';
// import { storeToRefs } from 'pinia';
// import { onMounted } from 'vue';
import gsap from 'gsap'
import { computed } from 'vue';
const props = defineProps<{ balance: string }>()

const adasd = computed(() => gsap.to(props.balance, { duration: 0.5, number: Number(props.balance) || 0 }))

//const appStore = useApplicationStore()
// const { totalScoreGetters, totalUserScoreGetter } = storeToRefs(appStore)
</script>

<template>
  <div class="flex items-center rounded-[16px] w-full min-h-[100px]" style="box-shadow: 0px 0px 15px -3px var(--main-shadow-color);">
    <div class="flex items-center justify-center p-[8px] w-[40%] min-[40%]">
      <n-progress
        type="circle"
        :gap-offset-degree="180"
        :percentage="65"
        :stroke-width="12"
        style="width: 60px"
        :color="['var(--chart-color)']"
        :rail-color="['#704264']"
      >
        <div class="flex flex-col items-center justify-center">
          <span class="text-[var(--main-text-color)] text-[11px] text-center">
            {{ 'Junior' }}
          </span>
        </div>

      </n-progress>
    </div>
    <div class="flex w-[1px] h-[60px] mx-[4px]" style="background: #54a4af52;"></div>
    <div class="flex flex-col p-[8px]">
      <div class="flex items-center flex-wrap text-[12px]">
        <span class="flex mr-[8px] text-[var(--secondary-color2-light)]">{{ 'Balance: ' }}</span>
        <span class="text-[var(--main-text-color)]">{{ adasd + ' $' }}</span>
      </div>
      <div class="flex w-full h-[1px] my-[4px]" style="background: #54a4af52;"></div>
      <div class="flex items-center flex-wrap text-[12px]">
        <span class="flex mr-[8px] text-[var(--secondary-color2-light)]">{{ 'Up level: ' }}</span>
        <span class="text-[var(--main-text-color)]">{{ '100 000$' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
