<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { BarChartOutline, CogOutline } from '@vicons/ionicons5'
const appStore = useApplicationStore()
const { currentUserDataGetters } = storeToRefs(appStore)

</script>

<template>
  <div class="flex items-center w-full">
    <div class="relative pl-[16px] w-full">
      <div class="flex flex-col bg-[#3c4f5f85] custom-block p-[8px_16px_24px_16px]">
        <div class="flex justify-between">
          <div class="flex items-center header-container relative w-full">
            <span class="corner-border-top-v3"></span>
            <span class="text-[#909997] text-[16px] mr-[6px]">{{ 'DevCat' }}</span>
          </div>
          <div class="flex flex-col items-end">
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
          </div>
        </div>
        
        <div class="flex flex-col pt-[16px]">
          <div class="flex items-end mb-[8px]">
            <n-icon :color="'#909997'" :size="18" class="mr-[8px]">
              <BarChartOutline />
            </n-icon>
            <span class="mr-[8px] text-[20px] leading-[20px] text-[#909997]">{{ 'Level: ' }}</span>
            <span class="text-[#ebeeda] text-[24px] leading-[28px]">{{ '[ Beginer ]' }}</span>
          </div>
          <div class="flex items-end">
            <n-icon :color="'#909997'" :size="18" class="mr-[8px]">
              <BarChartOutline />
            </n-icon>
            <span class="mr-[8px] text-[20px] leading-[20px] text-[#909997]">{{ 'Stack: ' }}</span>
            <span class="text-[#ebeeda] text-[24px] leading-[28px]">{{ '[ Javascript ]' }}</span>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.header-container {
  position: relative;
  width: 130px;
  min-width: 130px;
  left: -32px;
  top: -8px;
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
