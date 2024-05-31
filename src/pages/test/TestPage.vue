<script setup lang="ts">
import { ref } from 'vue';
import DetectedUser from '../main/layouts/default/components/DetectedUser.vue';
import MainInfoUser from '../main/layouts/default/components/MainInfoUser.vue';
import { onMounted } from 'vue';
import DotsLayout from '@/components/DotsLayout.vue';
import InfoBalanceUser from '../main/layouts/default/components/InfoBalanceUser.vue';
import TapBlockV2 from '../main/layouts/default/components/TapBlockV2.vue';


</script>

<template>
  <div class="flex flex-col items-center w-full h-full p-[16px]">
    <DotsLayout />
    <DetectedUser />
    <MainInfoUser />
    <InfoBalanceUser class="mb-[16px]" />
    <TapBlockV2 />
  </div>
</template>

<style scoped>
</style>
