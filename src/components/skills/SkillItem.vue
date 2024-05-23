<script setup lang="ts">

const props = defineProps<{ title: string, profit: number }>()

</script>

<template>
  <div class="flex flex-col p-[12px] bg-[#3d3d3c85] rounded-[8px]" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
    <div class="flex mb-[8px]">
      <div class="flex flex-col items-center pr-[8px]">
        <div class="w-[42px] h-[42px] rounded-[50%] bg-[#3b3b3b] mb-[6px]">
        </div>
        
      </div>
      <div class="flex flex-col">
        <span class="text-[#fff] text-[12px]">{{ 'lvl: ' + '5' }}</span>
        <span class="text-[#fff] text-[16px]">{{ props.title }}</span>

      </div>
    </div>
    <div class="flex items-center">
      <div class="flex flex-col w-[calc(50%-2px)]">
        <span class="text-[#7c5b5bc5] text-[12px]">{{ 'profit/hour' }}</span>
        <span class="text-[#fff] text-[14px]">{{ props.profit + ' $' }}</span>
      </div>
      <div class="w-[1px] h-[32px] bg-[#63656661] ml-[12px] mr-[16px]"></div>
      <div class="flex flex-col w-[calc(50%-2px)] bg-[#5d5b594f] p-[2px_8px] rounded-[4px]">
        <span class="text-[#7c5b5bc5] text-[12px] mr-[4px]">{{ 'price' }}</span>
        <span class="text-[#52f55f] text-[13px]">{{ props.profit + ' $' }}</span>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
</style>
