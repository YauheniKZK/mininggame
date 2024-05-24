<script setup lang="ts">
import Tabs from './components/Tabs.vue';

import { onMounted, ref } from 'vue';

const valueTab = ref('dev')
const containerTabsSkills = ref()

const updateTab = (value: string) => {
  valueTab.value = value
}
const showModalTabs = ref(false)
const activeMenu = ref('')

const openMenu = () => {
  showModalTabs.value = !showModalTabs.value
  activeMenu.value = showModalTabs.value ? 'active' : ''
}

const checkClickOutside = (event: { target: any; }) => {
  if (containerTabsSkills.value && !containerTabsSkills.value.contains(event.target)) {
    console.log('1111', containerTabsSkills.value.contains(event.target))
  }
}

const containerRef = ref()

onMounted(() => {
  window.addEventListener('click', checkClickOutside);
})

</script>

<template>
  <div class="flex flex-col items-center w-full px-[16px] h-full" ref="containerRef">
    <Tabs :valueTab="valueTab" />
    <div class="btn-menu flex justify-center items-center cursor-pointer bg-[#717070]" @click="openMenu">
      <n-icon :size="26" class="flex justify-center items-center">
        <div class="icon-menu" :class="activeMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </n-icon>
    </div>
    <Transition name="slide-right">
      <div
        v-if="showModalTabs"
        ref="containerTabsSkills"
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
  bottom: 76px;
  right: 16px;
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
  background: #fff;
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
