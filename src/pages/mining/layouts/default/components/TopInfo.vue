<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { getImageUrl } from '@/utils/images';
import { formatNumberWithSpaces } from '@/utils/data';
import CoinIcon from '@/assets/svg/components/CoinIcon.vue';

const appStore = useApplicationStore()
const { currentUserDataGetters, skillsTabGetters } = storeToRefs(appStore)
const balanceRef = computed(() => {
  if (currentUserDataGetters.value?.balance) {
    return Number(currentUserDataGetters.value.balance / 100).toFixed(2)
  } else {
    return 0
  }
})

</script>

<template>
  <!-- bg-[#373c41] -->
  <div
    class="flex justify-between p-[12px] w-full block-st"
    style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"
  >
    <div class="flex items-center">
      <n-icon :size="36" class="mr-[8px]">
        <!-- <CoinIcon :color="'#fff'" /> -->
        <img :src="getImageUrl('svg/coin-default.svg')" class="w-[36px] min-w-[36px] h-auto object-contain" alt="" />
      </n-icon>
      <span class="text-[22px] font-[500] text-[#fff] leading-[24px]">
        {{ formatNumberWithSpaces(Number(balanceRef)) }}
        <sup class="font-[400]">{{ ' $' }}</sup>
      </span>
    </div>
    <div class="flex items-center relative">
      <span class="absolute right-[calc(100%-15px)] max-w-[200px] -top-[1px] text-[80px] font-[900] leading-[24px] text-[#ffffff1c]">
        {{ skillsTabGetters }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.block-st {
  position: relative;
  background: #373635e6;
  clip-path: polygon(calc(100% - 20px) 0, 100% calc(100% - 45px), 100% 100%, calc(0% + 20px) 100%, 0% calc(100% - 15px), 0 0);
}
</style>
