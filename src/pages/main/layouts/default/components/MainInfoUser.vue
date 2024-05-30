<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
const appStore = useApplicationStore()
const { currentUserDataGetters } = storeToRefs(appStore)

</script>

<template>
  <div class="flex items-center mb-[8px] w-full">
    <div class="info-container w-full">
      <div class="flex w-[100px] min-w-[100px] h-[100px] bg-[#ff1515] img-block">

      </div>
      <div class="flex flex-col justify-between pl-[4px] flex-grow">
        <div class="flex flex-col">
          <div class="level-block flex items-center mb-[4px]">
            <span class="title relative flex pr-[8px] mr-[8px] text-[16px] min-w-[42px]">{{ 'Level:' }}</span>
            <span class="value relative text-[16px] min-w-[42px] pl-[16px]">{{ 'beginer' }}</span>
          </div>

          <div class="level-block flex items-center">
            <span class="title relative flex pr-[8px] mr-[8px] text-[16px] min-w-[42px]">{{ 'Stack:' }}</span>
            <span class="value relative text-[16px] min-w-[42px] pl-[16px]">{{ 'Javascript' }}</span>
          </div>
        </div>

        <div class="flex items-center min-h-[32px] w-full bg-[#ff1515]">

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
  border-top: 2px solid red;
}
.level-block .value::before {
  content: '';
  left: 0;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  border-bottom: 2px solid red;
  border-left: 2px solid red;
  transform: skewX(35deg);
}
</style>
