<script setup lang="ts">
import { StepsProps } from 'naive-ui';
import { ref } from 'vue';

const current = ref<number | null>(3)
const currentStatus = ref<StepsProps['status']>('process')
</script>

<template>
  <div class="flex flex-col items-center w-full h-full p-[16px]">
    <n-steps vertical :current="(current as number)" :status="currentStatus" class="steps-info">
      <n-step
        title="Basic game"
        description="Development of the main mechanics of the game"
      />
      <n-step
        title="Referral"
        description="Connecting the referral system"
      />
      <n-step
        title="Skills"
        description="Development of a skills improvement system"
      />
      <n-step
        title="Tasks"
        description="Connecting tasks and rewarding for daily activity"
      />
      <n-step
        title="Comming soon"
        description="There's a lot more to come"
      />
    </n-steps>
  </div>
</template>

<style scoped>
</style>
