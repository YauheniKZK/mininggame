<script setup lang="ts">
import Main from '@/pages/Main.vue';
import Mining from '@/pages/Mining.vue';
import Earn from '@/pages/Earn.vue';
import Info from '@/pages/Info.vue';
// import { useApplicationStore } from '@/stores/application/applicationStore';
// import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const versionApp = import.meta.env.PACKAGE_VERSION

// const appStore = useApplicationStore()
// const { totalScoreGetters } = storeToRefs(appStore)
// const { actionMiningMoney } = appStore


const valueTab = ref('main')
const updateTab = (value: string) => {
  valueTab.value = value
}

onMounted(async () => {
  // await actionGetUser()
})
// onUnmounted(async () => {
//   await actionMiningMoney(totalScoreGetters.value)
// })
</script>

<template>
  <div class="flex flex-col justify-between h-full">
    <div class="flex h-full">
      <n-tabs
        class="w-full tabs-custom1 none-tab mb-[24px] h-full"
        :tab-class="'tab-class'"
        :pane-wrapper-class="'h-full'"
        :pane-class="'h-full'"
        :value="valueTab"
        animated
      >
        <n-tab-pane name="main" class="w-full h-full">
          <Main />
        </n-tab-pane>
        <n-tab-pane name="mining" class="w-full">
          <Mining />
        </n-tab-pane>
        <n-tab-pane name="earn" class="w-full">
          <Earn />
        </n-tab-pane>
        <n-tab-pane name="info" class="w-full">
          <Info />
        </n-tab-pane>
      </n-tabs>
    </div>
    <div class="flex flex-col w-full fixed bottom-[8px] px-[8px] z-[10]">
      <div class="flex justify-end p-[8px_12px]">
        <span class="text-[#fff]">{{ versionApp }}</span>
      </div>
      <div class="flex w-full h-[56px] items-center rounded-[12px] footer-before" style="box-shadow: 0px -10px 15px -3px rgba(0,0,0,0.1);">
        <n-tabs type="segment" class="w-full tabs-custom1 custom-bg-1" :value="valueTab" animated @update:value="updateTab">
          <n-tab name="main">
            Main
          </n-tab>
          <n-tab name="mining">
            Mining
          </n-tab>
          <n-tab name="earn">
            Earn
          </n-tab>
          <n-tab name="info">
            Info
          </n-tab>
        </n-tabs>
      </div>

    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.footer-before {
  position: relative;
}
.footer-before::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #535474f2;
  border-radius: 12px;
}
</style>
