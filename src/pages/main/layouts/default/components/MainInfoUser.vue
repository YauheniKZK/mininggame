<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { BarChartOutline, CogOutline } from '@vicons/ionicons5'
const appStore = useApplicationStore()
const { currentUserDataGetters } = storeToRefs(appStore)

</script>

<template>
  <div class="flex items-center w-full">
    <div class="info-container w-full">
      <div class="flex w-[100px] min-w-[100px] h-[100px] bg-[#ff1515] img-block">

      </div>
      <div class="flex flex-col justify-between pl-[4px] flex-grow">
        <div class="flex flex-col">
          <div class="level-block flex items-center mb-[4px] text-[#fff]">
            <span class="title relative flex pr-[8px] mr-[8px] text-[16px] min-w-[42px]">{{ 'Level:' }}</span>
            <span class="value relative text-[16px] min-w-[42px] pl-[16px]">{{ 'beginer' }}</span>
          </div>

          <div class="level-block flex items-center text-[#fff]">
            <span class="title relative flex pr-[8px] mr-[8px] text-[16px] min-w-[42px]">{{ 'Stack:' }}</span>
            <span class="value relative text-[16px] min-w-[42px] pl-[16px]">{{ 'Javascript' }}</span>
          </div>
        </div>

        <div class="flex items-center justify-between min-h-[32px] w-full bg-[#ff1515] p-[2px_4px] text-[#000] text-[17px] font-[500]">
          <div class="flex items-center">
            <span>{{ 'Prefs & Rtg' }}</span>
          </div>
          <div class="flex items-center">
            <button @click="false" class="flex">
              <n-icon :color="'#000'" :size="28">
                <CogOutline />
              </n-icon>
            </button>
            <div class="w-[1px] h-[16px] bg-[#000] m-[0_12px_0_8px] z-[1]"></div>
            <button @click="false" class="flex">
              <n-icon :color="'#000'" :size="22">
                <BarChartOutline />
              </n-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-block {
  clip-path: polygon(100% 0, 100% 100%, 20% 100%, 0 80%, 0 0);
}
.info-container {
  display: flex;
  padding: 4px;
  border: 1px solid red;
  clip-path: polygon(100% 0, 100% 100%, 8% 100%, 0 74%, 0 0);
}
.level-block .title::before {
  content: '';
  left: 0;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  border-top: 1px solid red;
}
.level-block .value::before {
  content: '';
  left: 0;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid red;
  border-left: 1px solid red;
  transform: skewX(35deg);
}
</style>
