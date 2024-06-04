<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import Tabs from './components/Tabs.vue';

import { computed, onMounted, ref } from 'vue';

const appStore = useApplicationStore()

const { setSkillsTab } = appStore

const valueTab = ref('Dev')
const containerTabsSkills = ref()
const btnMenuRef = ref()

const updateTab = (value: string) => {
  valueTab.value = value
  setSkillsTab(value)
}
const showModalTabs = ref(false)
const activeMenu = computed(() => showModalTabs.value ? 'active' : '')

const openMenu = () => {
  showModalTabs.value = !showModalTabs.value
}

const checkClickOutside = (event: { target: any; }) => {
  if (btnMenuRef.value && !btnMenuRef.value.contains(event.target) && containerTabsSkills.value && !containerTabsSkills.value.contains(event.target)) {
    showModalTabs.value = false
  }
}

const containerRef = ref()

onMounted(() => {
  window.addEventListener('click', checkClickOutside);
  setSkillsTab('Dev')
})
</script>

<template>
  <div class="flex flex-col items-center w-full px-[16px] h-full" ref="containerRef">
    <Tabs :valueTab="valueTab" />
    <div ref="btnMenuRef" class="btn-menu flex justify-center items-center cursor-pointer" @click="openMenu">
      <n-icon :size="26" class="flex justify-center items-center">
        <div class="icon-menu" :class="activeMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </n-icon>
    </div>
    <div v-if="showModalTabs" class="fixed top-0 left-0 h-screen w-full z-[9]" @click="showModalTabs = false"></div>
    <Transition name="slide-right">
      <div
        v-if="showModalTabs"
        ref="containerTabsSkills"
        class="z-[10] flex flex-col mb-[12px] fixed right-0 top-0 pl-[30px] h-screen bg-[#373c41] justify-end pb-[170px]"
        >
          <n-tabs placement="right" class="w-full" :value="valueTab" animated @update:value="updateTab">
            <n-tab name="Dev">
              <span class="text-[16px] text-[#fff]">{{ 'Dev' }}</span>
            </n-tab>
            <n-tab name="Soft">
              <span class="text-[16px] text-[#fff]">Soft</span>
            </n-tab>
            <n-tab name="Media">
              <span class="text-[16px] text-[#fff]">Media</span>
            </n-tab>
            <n-tab name="Experience">
              <span class="text-[16px] text-[#fff]">Experience</span>
            </n-tab>
            <n-tab name="Pets">
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
  width: 66px;
  height: 50px;
  border-radius: 0;
  position: fixed;
  bottom: 76px;
  right: 0;
  display: flex;
  justify-content: flex-start;
  padding: 0 0px 0 16px;
  background: #f4c543;
}

.contaner-menu {
  transform: translateX(100%);
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: transform 0.3s;
}
.slide-right-enter-from, .slide-right-leave-to {
  transform: translateX(100%);
}

.item-setting {
  border: 1px solid #D2649A;
}

.icon-menu {
 display:flex;
  flex-direction:column;
  width:70px;
  cursor:pointer;
}

.icon-menu span{
  background: #050a0e;
  border-radius:10px;
  height: 3px;
  margin: 2px 0;
  transition: .4s  cubic-bezier(0.68, -0.6, 0.32, 1.6);

}


.icon-menu span:nth-of-type(1){
  width:50%;
}

.icon-menu span:nth-of-type(2){
  width:100%;
}


.icon-menu span:nth-of-type(3){
  width:75%;
 
}

.icon-menu.active span:nth-of-type(1){
  transform-origin:bottom;
  transform: rotate(45deg) translate(3px);
}


.icon-menu.active span:nth-of-type(2){
  
  transform-origin:top;
  transform:rotatez(-45deg)
}


.icon-menu.active span:nth-of-type(3){
  
  transform-origin:bottom;
  width:50%;
  transform: translate(11px,-3px) rotate(45deg);

}
</style>
