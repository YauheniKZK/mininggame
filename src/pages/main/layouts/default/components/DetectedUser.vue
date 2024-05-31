<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
const appStore = useApplicationStore()
const { currentUserDataGetters } = storeToRefs(appStore)

</script>

<template>
  <div class="flex items-center w-full">
    <div class="flex items-center detected-container relative">
      <div class="flex items-center mr-[8px]">
        <div class="item-detected"></div>
        <div class="item-detected"></div>
        <div class="item-detected"></div>
        <div class="item-detected"></div>
      </div>
      <span class="text-[#fff] text-[14px] mr-[6px]">{{ 'Detected devcat: ' }}</span>
      <span class="text-[#fff] text-[14px]">{{ '[' + (currentUserDataGetters?.first_name || 'name user') + ']' }}</span>
    </div>
  </div>
</template>

<style scoped>
.detected-container {
  padding: 0px 4px 0px 4px;
}
.detected-container::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-bottom: 1px solid #7b71d4;
  border-left: 1px solid #7b71d4;
  transform: skewX(35deg);
}
.detected-container::after {
  content: '';
  position: absolute;
  left: -16px;
  top: -4px;
  width: 58px;
  height: 24px;
  border-top: 1px solid #7b71d4;
  border-right: 1px solid #7b71d4;
  transform: skewX(35deg);

}
.item-detected {
  display: flex;
  width: 6px;
  margin-right: 4px;
  height: 23px;
  background: #7b71d4;
  transform: skewX(35deg);
}
</style>
