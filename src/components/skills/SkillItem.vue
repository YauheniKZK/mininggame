<script setup lang="ts">

const props = defineProps<{ title: string, profit: number }>()

</script>

<template>
  <div class="flex flex-col p-[12px] bg-[#3d3d3c85] cursor-pointer item-skill">
    <div class="flex mb-[8px] bg-[#332b4b] header-block relative -top-[10px] -left-[10px]">
      <div class="flex flex-col">
        <span class="text-[#ffffffbe] text-[22px] leading-[20px] title">{{ props.title }}</span>
        <span class="text-[#ffffffbe] text-[12px]">{{ 'lvl: ' + '5' }}</span>
        

      </div>
    </div>
    <div class="flex items-center">
      <div class="flex flex-col w-[60%]">
        <span class="text-[#eeeeee7a] text-[12px]">{{ 'profit/hour' }}</span>
        <span class="text-[#fff] text-[14px]">{{ props.profit + ' $' }}</span>
      </div>
      <div class="flex flex-col flex-grow bg-[#5d5b594f] p-[2px_8px] rounded-[4px]">
        <span class="text-[#eeeeee7a] text-[12px] mr-[4px]">{{ 'price' }}</span>
        <span class="text-[#52f55f] text-[13px]">{{ props.profit + ' $' }}</span>
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
  font-family: "Orbitron", sans-serif;
}
    
</style>
