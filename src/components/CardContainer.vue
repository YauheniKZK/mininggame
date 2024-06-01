<script setup lang="ts">
const props = defineProps({
  headerWidth: {
    type: Number,
    default: 130
  }
})
</script>

<template>
  <div class="flex items-center">
    <div class="relative pl-[16px] w-full">
      <div class="flex flex-col bg-[#3c4f5f85] custom-block p-[8px_16px_24px_16px]">
        <div class="flex justify-between">
          <div class="flex items-center header-container relative w-full" :style="`width: ${props.headerWidth}px;min-width: ${props.headerWidth}px;`">
            <span class="corner-border-top-v3"></span>
            <slot name="header"></slot>
            <!-- <span class="text-[#909997] text-[16px] mr-[6px]">{{ 'DevCat' }}</span> -->
          </div>
          <div class="flex flex-col items-end">
            <slot name="extra-header"></slot>
            <!-- <span class="text-[#909997] text-[14px]">{{ 'Prefs & Rtg' }}</span>
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
            </div> -->
          </div>
        </div>
        <slot name="content"></slot>
        <!-- <div class="flex flex-col pt-[16px] pb-[16px] relative">
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
        </div> -->
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.header-container {
  position: relative;
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
