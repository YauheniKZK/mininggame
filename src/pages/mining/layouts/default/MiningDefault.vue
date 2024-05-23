<script setup lang="ts">
import { Menu } from '@vicons/ionicons5';
import Tabs from './components/Tabs.vue';
import TopInfo from './components/TopInfo.vue';
import { ref } from 'vue';

const valueTab = ref('dev')

const updateTab = (value: string) => {
  valueTab.value = value
}
const showModalTabs = ref(false)

</script>

<template>
  <div class="flex flex-col items-center w-full px-[16px] h-full">
    <TopInfo class="mb-[24px]" />
    <Tabs :valueTab="valueTab" />
    <div class="btn-menu flex justify-center items-center cursor-pointer bg-[#717070]" @click="showModalTabs = !showModalTabs">
      <n-icon :size="26">
        <Menu />
      </n-icon>
    </div>
    <Transition name="slide-up">
      <div
        v-if="showModalTabs"
        ref="containerForOptions"
        class="z-[10] flex flex-col mb-[12px] fixed right-0 top-0 pl-[30px] h-screen bg-[#373c41] justify-end pb-[170px]"
        >
          <n-tabs placement="right" class="w-full" :value="valueTab" animated @update:value="updateTab">
            <n-tab name="dev">
              <span class="text-[16px] text-[#fff]">{{ 'Dev' }}</span>
            </n-tab>
            <n-tab name="soft">
              <span class="text-[16px] text-[#fff]">Soft</span>
            </n-tab>
            <n-tab name="media">
              <span class="text-[16px] text-[#fff]">Media</span>
            </n-tab>
            <n-tab name="experience">
              <span class="text-[16px] text-[#fff]">Experience</span>
            </n-tab>
            <n-tab name="pets">
              <span class="text-[16px] text-[#fff]">Pets</span>
            </n-tab>
          </n-tabs>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.btn-menu {
  z-index: 12;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 100px;
  right: 16px;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transition: all 0.25s ease-out;
  transform: translateX(100vh);
}

.slide-up-leave-to {
  opacity: 1;
  transition: all 0.25s ease-out;
  transform: translateX(0);
}
.item-setting {
  border: 1px solid #D2649A;
}
</style>
