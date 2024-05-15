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
const setProcent = computed(() => {
  return currentUserDataGetters.value.balance ? currentUserDataGetters.value.balance * 100 / levels[currentUserDataGetters.value.level] : 0
})

</script>

<template>
  <div class="flex justify-between p-[12px] rounded-[16px] bg-[#373c41]">
    <div class="flex flex-col">
      <div class="flex flex-col">
        <span class="text-[#adaeb1] text-[12px] leading-[8px]">{{ $t('BALANCE') + ': ' }}</span>
        <span class="text-[20px] font-[600] text-[#fff] leading-[28px]">
          {{ formatNumberWithSpaces(Number(balanceRef)) }}
          <sup class="font-[400]">{{ ' $' }}</sup>
        </span>
      </div>
      <div class="w-full max-w-[180px] h-[1px] bg-[#63656661] my-[8px]"></div>
      <div class="flex flex-col">
        <span class="text-[#adaeb1] text-[12px] leading-[8px]">{{ $t('up_level') + ': ' }}</span>
        <span class="text-[20px] font-[600] text-[#fff] leading-[28px]">
          {{ formatNumberWithSpaces(setLevelUp) }}
          <sup class="font-[400]">{{ ' $' }}</sup>
        </span>
      </div>
    </div>
    <div class="flex items-end h-auto">
      <div class="h-full p-[4px] rounded-[4px] w-full flex flex-col justify-end">
        <div class="w-full rounded-[4px] min-h-[4px] bg-[#fbdd87]" :style="`height: ${setProcent}%`">

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
