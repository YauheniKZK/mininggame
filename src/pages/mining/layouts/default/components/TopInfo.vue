<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { getImageUrl } from '@/utils/images';
import { formatNumberWithSpaces } from '@/utils/data';

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
  <div class="flex justify-between p-[12px] rounded-[16px] bg-[#373c41] w-full bg-image" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
    <div class="flex items-center">
      <img :src="getImageUrl('img/coin1.png')" class="w-[30px] min-w-[30px] h-auto object-contain mr-[8px]" alt="" />
      <span class="text-[12px] font-[600] text-[#fff] leading-[20px]">
        {{ formatNumberWithSpaces(Number(balanceRef)) }}
        <sup class="font-[400]">{{ ' $' }}</sup>
      </span>
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  position: relative;
}
.bg-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background: url('../../../../../assets/img/coin-bg.png') no-repeat center;
  background-size: contain;
}
</style>
