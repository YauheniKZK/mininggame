<script setup lang="ts">

const props = defineProps<{ title: string, profit: number }>()

</script>

<template>
  <div class="flex flex-col bg-[#3d3d3c85] cursor-pointer item-skill">
    <div class="flex bg-[#332b4b] header-block relative top-[0px] left-[0px] max-w-[90%] min-h-[40px]">
      <div class="flex flex-col">
        <span class="text-[#ffffffbe] text-[22px] leading-[20px] title">{{ props.title }}</span>
      </div>
    </div>
    <div class="flex items-center p-[8px_8px_8px_0]">
      <div class="flex w-[2px] bg-[#ff3f3f] mr-[8px] h-[20px]"></div>
      <span class="text-[#ffffffbe] text-[12px]">{{ 'lvl: ' + '5' }}</span>
    </div>
    <div class="flex items-center">
      <div class="flex w-[60%]">
        <div class="flex w-[4px] bg-[#f4c543] mr-[8px] h-auto"></div>
        <div class="flex flex-col ">
          <span class="text-[#eeeeee7a] text-[12px]">{{ 'profit/hour' }}</span>
          <span class="text-[#fff] text-[14px]">{{ props.profit + ' $' }}</span>
        </div>
      </div>
 
      <div class="flex flex-col flex-grow bg-[#5d5b594f] p-[2px_8px] rounded-[4px]">
        <span class="text-[#eeeeee7a] text-[12px] mr-[4px]">{{ 'price' }}</span>
        <span class="text-[#52f55f] text-[16px] leading-[16px]">{{ props.profit + ' $' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-skill {
  clip-path: polygon(0px 0px, 0px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, -10% 100%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.header-block {
  clip-path: polygon(0px 0px, 0px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, -10% 100%);

}

.header-block .title {
  /* font-family: "Orbitron", sans-serif; */
}
    
</style>
