<script setup lang="ts">

const props = defineProps<{ title: string, profit: number }>()

</script>

<template>
  <div class="flex flex-col p-[12px] bg-[#8f8f8fbe] rounded-[8px]">
    <div class="flex mb-[8px]">
      <div class="flex w-[40%] min-w-[40%]">
        {{ 'icon' }}
      </div>
      <div class="flex flex-col">
        <span class="text-[#fff] text-[18px]">{{ props.title }}</span>
        <span class="text-[#7c5b5bc5] text-[12px]">{{ 'profit/hour' }}</span>
        <span class="text-[#fff] text-[16px]">{{ props.profit + ' $' }}</span>
      </div>
    </div>
    <div class="flex">
      <div class="flex w-[40%] min-w-[40%]">
        <span class="text-[#fff]">{{ 'lvl' }}</span>
      </div>
      <div class="text-[#52f55f]">
        {{ props.profit + ' $' }}
      </div>
    </div>
  </div>
  
</template>

<style scoped>
</style>
