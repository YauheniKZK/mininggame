<script setup lang="ts">
import { BarChartOutline, CogOutline } from '@vicons/ionicons5'
import CardContainer from '@/components/CardContainer.vue'

</script>

<template>
  <div class="flex gap-[16px] w-full">
    <CardContainer :headerWidth="100" class="w-[calc(50%-8px)]">
      <template #header>
        <span class="text-[#909997] text-[16px] mr-[6px]">{{ '$/hour' }}</span>
      </template>
      <template #content>
        <div class="flex flex-col pt-[16px] pb-[16px] relative">
          <div class="flex items-start mb-[8px]">
            <span class="text-[#ebeeda] text-[24px] leading-[28px]">{{ '[ 0.01$ ]' }}</span>
          </div>
        </div>
      </template>
    </CardContainer>
    <CardContainer :headerWidth="100" class="w-[calc(50%-8px)]">
      <template #header>
        <span class="text-[#909997] text-[16px] mr-[6px]">{{ 'Energy' }}</span>
      </template>
      <template #content>
        <div class="flex flex-col pt-[16px] pb-[16px] relative">
          <div class="flex items-start mb-[8px]">
            <span class="text-[#ebeeda] text-[24px] leading-[28px]">{{ '[ 200/200 ]' }}</span>
          </div>
        </div>
      </template>
    </CardContainer>
  </div>
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
