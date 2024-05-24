<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { getImageUrl } from '@/utils/images';
import { formatNumberWithSpaces } from '@/utils/data';
import CoinIcon from '@/assets/svg/components/CoinIcon.vue';

const appStore = useApplicationStore()
const { currentUserDataGetters } = storeToRefs(appStore)
const balanceRef = computed(() => {
  if (currentUserDataGetters.value.balance) {
    return Number(currentUserDataGetters.value.balance / 100).toFixed(2)
  } else {
    return 0
  }
})

</script>

<template>
  <!-- bg-[#373c41] -->
  <div
    class="flex justify-between p-[12px] rounded-[16px] w-full"
    style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;backdrop-filter: blur(6px);"
  >
    <div class="flex items-center">
      <n-icon :size="42" class="mr-[8px]">
        <CoinIcon :color="'#fff'" />
      </n-icon>
      <span class="text-[22px] font-[500] text-[#fff] leading-[24px]">
        {{ formatNumberWithSpaces(Number(balanceRef)) }}
        <sup class="font-[400]">{{ ' $' }}</sup>
      </span>
    </div>
  </div>
</template>

<style scoped>
</style>
