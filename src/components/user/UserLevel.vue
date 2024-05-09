<script setup lang="ts">
// import { useApplicationStore } from '@/stores/application/applicationStore';
// import { getImageUrl } from '@/utils/images';
// import { storeToRefs } from 'pinia';
// import { onMounted } from 'vue';
const props = defineProps<{ balance: string }>()

//const appStore = useApplicationStore()
// const { totalScoreGetters, totalUserScoreGetter } = storeToRefs(appStore)
</script>

<template>
  <div class="flex rounded-[16px] w-full" style="box-shadow: 0px 0px 15px -3px var(--main-shadow-color);">
    <div class="flex items-center justify-center p-[8px] w-[40%] min-[40%]">
      <n-progress
        type="circle"
        :percentage="20"
        :stroke-width="10"
        :rail-color="[{ stroke: 'var(--chart-color)' }]"
      >
        <div class="flex flex-col items-center justify-center">
          <span class="text-[var(--main-text-color)] text-center">
            {{ 'Your level:' }}
          </span>
          <span class="text-[var(--main-text-color)] text-center">
            {{ 'Junior' }}
          </span>
        </div>

      </n-progress>
    </div>
    <div class="flex w-[1px] h-[80px]" style="background: var(--secondary-color-light);"></div>
    <div class="flex flex-col p-[8px]">
      <div class="flex items-center">
        <span class="flex min-w-[80px] mr-[8px] text-[var(--main-text-color)]">{{ 'Balance: ' }}</span>
        <span class="text-[var(--main-text-color)]">{{ props.balance + ' $' }}</span>
      </div>
      <div class="flex items-center">
        <span class="flex min-w-[80px] mr-[8px] text-[var(--main-text-color)]">{{ 'Up level: ' }}</span>
        <span class="text-[var(--main-text-color)]">{{ '100 000$' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
