<script setup lang="ts">
import { getImageUrl } from '@/utils/images';
import { ChevronDown } from '@vicons/ionicons5'
</script>

<template>
  <div class="flex flex-col w-full">
    <n-collapse>
      <n-collapse-item name="1">
        <template #arrow>
          <n-icon :color="'#fff'" :size="22">
            <ChevronDown />
          </n-icon>
        </template>
        <template #header>
          <span class="text-[#fff] text-[18px]">{{ 'Daily tasks' }}</span>
        </template>
        <template #header-extra>
          <span class="text-[#fff] text-[18px]">{{ 'today: +5$' }}</span>
        </template>
        <div class="flex">
          <span>{{ 'Tasks' }}</span>
        </div>
      </n-collapse-item>
      <n-collapse-item title="right" name="2">
        <template #arrow>
          <n-icon :color="'#fff'" :size="22">
            <ChevronDown />
          </n-icon>
        </template>
        <template #header>
          <span class="text-[#fff] text-[18px]">{{ 'Main tasks' }}</span>
        </template>
        <template #header-extra>
          <span>{{ 'no new tasks' }}</span>
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
