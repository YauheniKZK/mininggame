<script setup lang="ts">
import TopBlock from './components/TopBlock.vue';
import InfoBlock from './components/InfoBlock.vue';

</script>

<template>
  <div class="flex flex-col w-full p-[16px]">
    <TopBlock class="z-[1]" />
    <div class="w-full h-[1px] bg-[#63656661] my-[16px] z-[1]"></div>
    <InfoBlock class="z-[1]" />
  </div>
</template>

<style scoped>
</style>
