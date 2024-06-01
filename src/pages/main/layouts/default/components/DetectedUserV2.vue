<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
const appStore = useApplicationStore()
const { currentUserDataGetters } = storeToRefs(appStore)

</script>

<template>
  <div class="flex items-center w-full">
    <div class="flex items-center header-container relative w-full">
      <span class="corner-border-top-v3"></span>
      <span class="text-[#909997] text-[16px] mr-[6px]">{{ 'Detected devcat: ' }}</span>
      <span class="text-[#909997] text-[16px]">{{ '[' + (currentUserDataGetters?.first_name || 'name user') + ']' }}</span>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  padding: 16px;
  border-left: 1px solid #ffffff4d;
  border-top: 1px solid #ffffff4d;
  /* -webkit-clip-path: polygon(0 0px, 0px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
  clip-path: polygon(0 0px, 0px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%); */
}
.header-container::before {
  content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    height: 38px;
    background: #ffffff4d;
}
.header-container::after {
  content: '';
  position: absolute;
  left: 9px;
  bottom: 0;
  width: calc(100% - 18px);
  height: 18px;
  border-right: 1px solid #ffffff4d;
  border-bottom: 1px solid #ffffff4d;
  transform: skewX(-45deg);
}


</style>
