<script setup lang="ts">
import { Menu } from '@vicons/ionicons5';
import Tabs from './components/Tabs.vue';
import TopInfo from './components/TopInfo.vue';

</script>

<template>
  <div class="flex flex-col items-center w-full px-[16px]">
    <TopInfo class="mb-[24px]" />
    <div class="btn-menu w-[50px] h-[50px] rounded-[50%] flex justify-center items-center">
      <n-icon>
        <Menu />
      </n-icon>
    </div>
  </div>
</template>

<style scoped>

</style>
