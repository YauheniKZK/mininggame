<script setup lang="ts">
import { onMounted, ref } from 'vue';
import WebApp from '@twa-dev/sdk';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { onUnmounted } from 'vue';

const appStore = useApplicationStore()
const { switchModalMiningSystem } = appStore

const mainContainer = ref()
const monitorActive = ref('')

WebApp.BackButton.onClick(() => {
  switchModalMiningSystem()
})

onMounted(() => {
  WebApp.BackButton.show()
  monitorActive.value = 'active'
})

onUnmounted(() => {
  WebApp.BackButton.hide()
})
</script>

<template>
  <div ref="mainContainer" class="flex flex-col w-full">
    <div class="flex monitor-block relative w-full p-[16px_8px] mb-[16px]" :class="monitorActive">
      <div class="line-1"></div>
      <div class="line-2"></div>
      <div class="line-3"></div>
      <div class="sub-monitor-block w-full">
        <span class="text-term" :class="monitorActive">{{ 'Text description' }}</span>
      </div>
    </div>
    <div class="flex bg-[#ffffff08] min-h-[40px]">

    </div>
  </div>
</template>

<style scoped>

.text-term {
  color: #ffffff85;
  font-size: 22px;
  letter-spacing: -2px;
  line-height: 16px;
  text-shadow: 4px 4px #ffffff12;
  opacity: 0;
  display: none;
  transition: all 1.5s ease-in-out;
  white-space: nowrap;
}

.text-term.active {
  display: flex;
  opacity: 1;
  transition: all 1.5s ease-in-out;
}

.monitor-block {
  width: 36px;
  min-height: 230px;
  border-radius: 8px/6px;
  /* clip-path: polygon(15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px), 0 15px); */
  background: #7a7a7a1f;
  border-left: 1px solid #ffffff7e;
  border-right: 1px solid #ffffff7e;
  border-top: 8px solid #ffffff15;
  border-bottom: 8px solid #ffffff15;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 20px 30px -10px;
  transition: all 1s ease-in-out;
}

.monitor-block.active {
  transition: all 1s ease-in-out;
  width: 100%;
  transform: perspective(800px) rotateY(25deg) scale(0.9) rotateX(10deg);
}

.monitor-block .line-1,
.monitor-block .line-2 {
  position: absolute;
  width: 100%;
  height: 1px;
  background: #ffffff0e;
  top: 50%;
  left: 0;
  transform: rotate(33deg);
}

.monitor-block .line-2 {
  transform: rotate(-33deg);
}

.monitor-block .line-3 {
  position: absolute;
  width: 100%;
  height: 1px;
  background: #ffffff0e;
  top: 50%;
  left: 0;
}

.sub-monitor-block {
  overflow: hidden;
  border-left: 1px solid #f4c543;
  border-right: 1px solid #f4c543;
  padding: 0 8px;
}
</style>
