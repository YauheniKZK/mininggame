<script setup lang="ts">
import MiningIcon from '@/assets/svg/components/MiningIcon.vue';
</script>

<template>
  <div class="flex justify-between items-center">
    <div class="flex">
      <div class="flex min-w-[4px] w-[4px] h-auto bg-[#fff] mr-[8px]"></div>
      <div class="flex flex-col">
        <div class="bg-[#efea06] p-[0px_40px_0px_0px] w-max mb-[8px] title-block">
          <p class="text-[32px] leading-[16px] font-[600] text-[#050a0e]">
            {{ 'Skills & Events' }}
          </p>
        </div>
 
        <p>
          {{ 'Upgrade your skills and take part in events and earn more so that everyone else is left behind you' }}
        </p>
      </div>
    </div>
 </div>
</template>

<style scoped>
.title-block {
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
  min-height: 40px;
  display: flex;
  align-items: flex-end;
}
</style>
