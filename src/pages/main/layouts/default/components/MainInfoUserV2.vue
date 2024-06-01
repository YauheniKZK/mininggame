<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { BarChartOutline, CogOutline } from '@vicons/ionicons5'
import CardContainer from '@/components/CardContainer.vue'
const appStore = useApplicationStore()
const { currentUserDataGetters } = storeToRefs(appStore)

</script>

<template>
  <CardContainer :headerWidth="130" class="w-full">
    <template #header>
      <span class="text-[#909997] text-[16px] mr-[6px]">{{ 'DevCat' }}</span>
    </template>
    <template #extra-header>
      <span class="text-[#909997] text-[14px]">{{ 'Prefs & Rtg' }}</span>
      <div class="flex items-center justify-end">
        <button @click="false" class="flex">
          <n-icon :color="'#909997'" :size="26">
            <CogOutline />
          </n-icon>
        </button>
        <div class="w-[1px] h-[16px] bg-[#909997] m-[0_12px_0_8px] z-[1]"></div>
        <button @click="false" class="flex">
          <n-icon :color="'#909997'" :size="20">
            <BarChartOutline />
          </n-icon>
        </button>
      </div>
    </template>
    <template #content>
      <div class="flex flex-col pt-[16px] pb-[16px] relative">
        <div class="flex items-start mb-[8px]">
          <span class="text-[#ebeeda] text-[24px] leading-[28px]">{{ '[ Beginer ]' }}</span>
          <span class="ml-[8px] text-[16px] leading-[18px] text-[#909997]">{{ 'level' }}</span>
        </div>
        <div class="flex items-start">
          <span class="text-[#ebeeda] text-[24px] leading-[28px]">{{ '[ Javascript ]' }}</span>
          <span class="ml-[8px] text-[16px] leading-[18px] text-[#909997]">{{ 'stack' }}</span>
        </div>
        <div class="flex items-center absolute -left-[16px] w-[calc(100%+32px)] -bottom-[24px] h-[16px] bg-[#ccd1c34a] p-[2px_8px]">
          <span class="text-[10px] text-[#fff] leading-[12px]">{{ 'cryptopia' }}</span>
        </div>
      </div>
    </template>
  </CardContainer>
</template>

<style scoped>
.header-container {
  position: relative;
  width: 130px;
  min-width: 130px;
  left: -32px;
  top: -8px;
  padding: 4px 16px;
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
  height: 28px;
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

.custom-block {
  position: relative;
    -webkit-clip-path: polygon(-10% 0px, 0px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, -10% 100%);
  clip-path: polygon(-10% 0px, 0px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, -10% 100%);
}

.custom-block::before {
  background: #ccd1c34a;
  content: "";
  height: 3px;
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
}
</style>
