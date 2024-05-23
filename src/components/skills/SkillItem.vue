<script setup lang="ts">

const props = defineProps<{ title: string, profit: number }>()

</script>

<template>
  <div class="flex flex-col p-[12px] bg-[#3d3d3c85] rounded-[8px]">
    <div class="flex mb-[8px]">
      <div class="flex flex-col pr-[8px]">
        <div class="w-[42px] h-[42px] rounded-[50%] bg-[#3b3b3b]">
        </div>
        <span class="text-[#fff] text-[12px]">{{ 'lvl: ' + '5' }}</span>
      </div>
      <div class="flex flex-col">
        <span class="text-[#7c5b5bc5] text-[12px]">{{ 'profit/hour' }}</span>
        <span class="text-[#fff] text-[14px]">{{ props.profit + ' $' }}</span>
        <span class="text-[#7c5b5bc5] text-[12px]">{{ 'price' }}</span>
        <span class="text-[#52f55f] text-[14px]">{{ props.profit + ' $' }}</span>
      </div>
    </div>
    <div class="flex">
      <div class="flex w-[40%] min-w-[40%]">
        <span class="text-[#fff] text-[16px]">{{ props.title }}</span>
        
      </div>
    </div>
  </div>
  
</template>

<style scoped>
</style>
