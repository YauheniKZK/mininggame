<script setup lang="ts">
// import TopBlock from './components/TopBlock.vue';
// import InfoBlock from './components/InfoBlock.vue';
// import TapBlock from './components/TapBlock.vue';
import DetectedUser from './components/DetectedUser.vue';
import MainInfoUser from './components/MainInfoUser.vue';

import DetectedUserV2 from './components/DetectedUserV2.vue';
import MainInfoUserV2 from './components/MainInfoUserV2.vue';
import MainInfoUserV3 from './components/MainInfoUserV3.vue';

import ProgressUser from './components/ProgressUser.vue';
import DetectedUserV3 from './components/DetectedUserV3.vue';

import InfoBalanceUser from './components/InfoBalanceUser.vue';
import InfoBalanceUserV2 from './components/InfoBalanceUserV2.vue';
import TapBlockV2 from './components/TapBlockV2.vue';
import TapsInfoUser from './components/TapsInfoUser.vue';

</script>

<template>
  <div class="flex flex-col w-full p-[16px_16px_60px_16px]">
    <DetectedUserV3 class="z-[1] mb-[16px]" />
    <MainInfoUserV3 class="z-[1] mb-[16px]" />
    <ProgressUser class="z-[1] mb-[16px]" />
    <InfoBalanceUserV2 class="z-[1] mb-[16px]" />
    <TapsInfoUser  class="z-[1] mb-[16px]" />
    <DetectedUser class="z-[1] mb-[16px]" />
    <MainInfoUser class="z-[1] mb-[16px]" />
    <InfoBalanceUser class="z-[1] mb-[16px]" />
    <TapBlockV2 class="z-[1] mb-[16px]" />
    <!-- <TopBlock class="z-[1]" />
    <div class="w-full h-[1px] bg-[#63656661] my-[16px] z-[1]"></div>
    <InfoBlock class="z-[1] mb-[16px]" />
    <TapBlock /> -->
  </div>
</template>

<style scoped>
</style>
