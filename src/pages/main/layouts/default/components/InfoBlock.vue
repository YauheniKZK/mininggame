<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { formatNumberWithSpaces, levels } from '@/utils/data';
import { computed } from 'vue';


const appStore = useApplicationStore()
const { currentUserDataGetters } = storeToRefs(appStore)

const balanceRef = computed(() => {
  if (currentUserDataGetters.value.balance) {
    return Number(currentUserDataGetters.value.balance / 100).toFixed(2)
  } else {
    return 0
  }
})
const setLevelUp = computed(() => {
  return levels[currentUserDataGetters.value.level] / 100
})
</script>

<template>
  <div class="flex justify-between p-[12px] rounded-[16px] bg-[#373c41]">
    <div class="flex flex-col">
      <div class="flex flex-col">
        <span class="text-[#adaeb1] text-[12px] leading-[8px]">{{ $t('BALANCE') + ': ' }}</span>
        <span class="text-[20px] font-[600] text-[#fff]">
          {{ formatNumberWithSpaces(Number(balanceRef)) }}
          <sup>{{ ' $' }}</sup>
        </span>
      </div>
      <div class="w-full max-w-[160px] h-[1px] bg-[#63656661] my-[8px]"></div>
      <div class="flex flex-col">
        <span class="text-[#adaeb1] text-[12px] leading-[8px]">{{ $t('up_level') + ': ' }}</span>
        <span class="text-[20px] font-[600] text-[#fff]">
          {{ formatNumberWithSpaces(setLevelUp) }}
          <sup>{{ ' $' }}</sup>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
