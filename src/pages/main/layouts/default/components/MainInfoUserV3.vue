<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { CodeWorkingOutline, CogOutline } from '@vicons/ionicons5'
import CardContainer from '@/components/CardContainer.vue'
const appStore = useApplicationStore()
const { currentUserDataGetters } = storeToRefs(appStore)

</script>

<template>
  <div class="flex w-full">
    <div class="flex bg-[#fff] w-[11px] h-auto mr-[6px]">
      <span class="text-[#050914] text-vertical">{{ 'cryptopia' }}</span>
    </div>
    <div class="flex flex-col flex-grow">
      <div class="flex flex-col bg-[#f4c543] p-[8px]">
        <div class="flex items-center justify-between mb-[4px]">
          <span class="text-[#050914] text-[18px] leading-[18px]">{{ 'DevCat: [User Name]' }}</span>
          <div class="flex items-center bg-[#050914] text-[#fff] rounded-[2px] px-[4px] text-[12px]">
            {{ 'ip: 215.y.566.89.T.0' }}
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex items-center mr-[24px]">
            <n-icon :color="'#050914'" :size="20" class="mr-[4px]">
              <CodeWorkingOutline />
            </n-icon>
            <span class="text-[#050914] text-[14px] leading-[20px]">
              {{ 'Beginer' }}
            </span>
          </div>
          <div class="flex items-center">
            <span class="text-[#050914] text-[14px] mr-[8px]">{{ '$/h:' }}</span>
            <span class="text-[#fff] text-[14px] leading-[20px] bg-[#050914] flex rounded-[2px] px-[4px]">
              {{ '+0.01' }}
            </span>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between p-[12px_8px_8px_8px]">
        <div class="flex flex-col">
          <span class="text-[#ffffff91] text-[12px]">{{ '$/tap' }}</span>
          <span class="text-[22px] text-[#f4c543] leading-[26px]">{{ '0.01' }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-[#ffffff91] text-[12px]">{{ 'Energy' }}</span>
          <span class="text-[22px] text-[#fff] leading-[26px]">{{ '200/200' }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-[#ffffff91] text-[12px]">{{ 'Up level' }}</span>
          <span class="text-[22px] text-[#fff] leading-[26px]">{{ '1000' }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-[#ffffff91] text-[12px]">{{ 'Online' }}</span>
          <span class="text-[22px] text-[#fff] leading-[26px]">{{ '500' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  line-height: 10px;
  transform: rotate(180deg);
  position: relative;
  top: 6px;
  transform-origin: center;
  height: min-content;
  font-weight: 500;
}
</style>
