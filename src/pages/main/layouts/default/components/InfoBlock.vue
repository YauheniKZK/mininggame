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
  <div class="flex justify-between">
    <div class="flex flex-col">
      <div class="flex flex-col">
        <span class="text-[#636566]">{{ $t('BALANCE') + ': ' }}</span>
        <span class="text-[24px] font-[600] text-[#fff]">
          {{ formatNumberWithSpaces(Number(balanceRef)) }}
          <sup>{{ ' $' }}</sup>
        </span>
      </div>
      <div class="flex items-center flex-wrap text-[12px]">
        <span class="text-[#636566]">{{ $t('up_level') + ': ' }}</span>
        <span class="text-[22px] font-[600] text-[#fff]">{{ formatNumberWithSpaces(setLevelUp) + ' $' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
