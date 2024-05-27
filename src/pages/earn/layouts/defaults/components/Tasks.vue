<script setup lang="ts">
import { getImageUrl } from '@/utils/images';
import { ChevronForward } from '@vicons/ionicons5'
import ModalDialog from '@/components/ui/ModalDialog.vue';
import { ref } from 'vue';

const showModal = ref(false)

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

const tasks = ref([
  {
    label: 'Subscribe telegram channel',
    isClaim: false,
    count: 10
  },
  {
    label: 'Join X',
    isClaim: false,
    count: 5
  },
  {
    label: 'Change main stack',
    isClaim: false,
    count: 5
  },
  {
    label: 'Invite 3 friends',
    isClaim: false,
    count: 50
  }
])
</script>

<template>
  <div class="flex flex-col w-full">
    <ModalDialog
      :show-modal="showModal"
      :width="'80%'"
      :max-width="'90%'"
      @close="showModal = false"
    >
      <template #content>
        <span class="text-[22px] font-[600] text-[#fff]">
          {{ 'Day 1' }}
        </span>
        <div class="flex flex-col pt-[16px]">
          <span class="text-[#fff] font-[500] text-[22px]">{{ '1$' }}</span>
          <div class="flex justify-center pt-[16px]">
            <div class="min-w-[100px] h-[34px] flex justify-center items-center rounded-[4px]" style="border: 2px solid #fbdd87;">
              <span class="text-[16px] text-[#fff]">{{ 'Claim' }}</span>
            </div>
          </div>
        </div>
      </template>
    </ModalDialog>
    <n-collapse class="tasks-collapse" accordion>
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
          <span class="text-[#48ede7c0] text-[14px]">{{ 'today: +5$' }}</span>
        </template>
        <div class="flex flex-wrap gap-[8px]">
          <div
            v-for="(day, index) in arrayDays"
            :key="index"
            class="flex flex-col p-[4px] rounded-[8px] justify-center items-center"
            :class="day.isClaim ? 'bg-[#9d869d]' : 'bg-[#3d3d3c85]'"
            style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;width: calc(25% - 7px);"
            @click="showModal = true"
          >
            <span class="text-[#ffffff9c] text-[12px] leading-[24px]">{{ day.label }}</span>
            <span class="text-[#9bff00] text-[16px] leading-[24px] p-[4px_2px] font-[500] flex justify-center w-full bg-[#414141] rounded-[4px_4px_6px_6px]">
              {{ day.count + '$' }}
            </span>
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
          <span class="text-[#48ede7c0] text-[14px]">{{ 'no new tasks' }}</span>
        </template>
        <div class="flex flex-col">
          <div
            v-for="(item, index) in tasks"
            :key="index"
            class="flex justify-between items-center mb-[8px] bg-[#496989] p-[8px] rounded-[8px]"
            style="box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
          > 
            <div class="flex items-center">
              <div class="w-[40px] min-w-[40px] h-[40px] rounded-[50%] mr-[16px] bg-[#414141]">

              </div>
              <div class="flex flex-col">
                <span class="text-[#ffffff9c] text-[14px] leading-[20px]">{{ item.label }}</span>
                <span class="text-[#dbdbdb] text-[18px] leading-[22px]">{{ item.count + ' $' }}</span>
              </div>
            </div>
            <div class="flex">
              <n-icon :color="'#fff'" :size="26">
                <ChevronForward />
              </n-icon>
            </div>
          </div>
        </div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<style scoped>
</style>
