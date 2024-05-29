<script setup lang="ts">
import MiningIcon from '@/assets/svg/components/MiningIcon.vue';
</script>

<template>
 <div class="flex justify-between">
  <div class="fleex pr-[24px]">
    <div class="flex min-w-[4px] h-full bg-[#21ce70] mr-[8px]"></div>
    <div class="flex flex-col">
      <p class="text-[18px] font-[600]">
        {{ 'Skills & Events' }}
      </p>
      <p>
        {{ 'Upgrade your skills and take part in events and earn more so that everyone else is left behind you' }}
      </p>
    </div>
  </div>
  <n-icon :size="70">
    <MiningIcon :color="'#fff'" />
    
  </n-icon>
 </div>
</template>

<style scoped>
</style>
