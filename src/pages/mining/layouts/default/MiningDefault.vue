<script setup lang="ts">
import { Menu } from '@vicons/ionicons5';
import Tabs from './components/Tabs.vue';
import TopInfo from './components/TopInfo.vue';

</script>

<template>
  <div class="flex flex-col items-center w-full px-[16px] h-full">
    <TopInfo class="mb-[24px]" />
    <div class="btn-menu flex justify-center items-center cursor-pointer bg-[#717070]">
      <n-icon :size="26">
        <Menu />
      </n-icon>
    </div>
  </div>
</template>

<style scoped>
.btn-menu {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
