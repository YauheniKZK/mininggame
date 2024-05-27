<script setup lang="ts">
import { getImageUrl } from '@/utils/images';
import { ChevronForward } from '@vicons/ionicons5'
</script>

<template>
  <div class="flex flex-col w-full">
    <n-collapse class="tasks-collapse">
      <n-collapse-item name="1">
        <template #arrow>
          <n-icon :color="'#fff'" :size="22">
            <ChevronForward />
          </n-icon>
        </template>
        <template #header>
          <span class="text-[#fff] text-[18px]">{{ 'Daily tasks' }}</span>
        </template>
        <template #header-extra>
          <span class="text-[#ffffffc0] text-[14px]">{{ 'today: +5$' }}</span>
        </template>
        <div class="flex">
          <span>{{ 'Tasks' }}</span>
        </div>
      </n-collapse-item>
      <n-collapse-item title="right" name="2">
        <template #arrow>
          <n-icon :color="'#fff'" :size="22">
            <ChevronForward />
          </n-icon>
        </template>
        <template #header>
          <span class="text-[#fff] text-[18px]">{{ 'Main tasks' }}</span>
        </template>
        <template #header-extra>
          <span class="text-[#ffffffc0] text-[14px]">{{ 'no new tasks' }}</span>
        </template>
        <div class="flex">
          <span class="text-[#fff] text-[18px]">{{ 'Tasks' }}</span>
        </div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<style scoped>
</style>
