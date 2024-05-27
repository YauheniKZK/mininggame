<script setup lang="ts">
import { getImageUrl } from '@/utils/images';
import { ChevronForward } from '@vicons/ionicons5'
import { ref } from 'vue';

const arrayDays = ref([
  {
    label: 'Day 1',
    isClaim: true,
    count: 1
  },
  {
    label: 'Day 2',
    isClaim: false,
    count: 3
  },
  {
    label: 'Day 3',
    isClaim: false,
    count: 8
  },
  {
    label: 'Day 4',
    isClaim: false,
    count: 14
  },
  {
    label: 'Day 5',
    isClaim: false,
    count: 20
  },
  {
    label: 'Day 6',
    isClaim: false,
    count: 50
  },
  {
    label: 'Day 7',
    isClaim: false,
    count: 100
  },
  {
    label: 'Day 8',
    isClaim: false,
    count: 500
  },
  {
    label: 'Day 9',
    isClaim: false,
    count: 1000
  },
  {
    label: 'Day 10',
    isClaim: false,
    count: 3000
  }
])
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
        <div class="flex flex-wrap gap-[8px]">
          <div
            v-for="(day, index) in arrayDays"
            :key="index"
            class="flex flex-col p-[8px] rounded-[8px] justify-center items-center"
            :class="day.isClaim ? 'bg-[#9d869d]' : 'bg-[#3d3d3c85]'"
            style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;width: calc(25% - 7px);"
          >
            <span class="text-[#ffffff9c] text-[12px] leading-[24px]">{{ day.label }}</span>
            <span class="text-[#fff] text-[20px] leading-[24px] font-[500]">{{ day.count + '$' }}</span>
          </div>
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
