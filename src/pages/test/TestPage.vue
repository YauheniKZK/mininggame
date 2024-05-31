<script setup lang="ts">
import { ref } from 'vue';
import DetectedUser from '../main/layouts/default/components/DetectedUser.vue';
import MainInfoUser from '../main/layouts/default/components/MainInfoUser.vue';
import { onMounted } from 'vue';
import DotsLayout from '@/components/DotsLayout.vue';


</script>

<template>
  <div class="flex flex-col items-center w-full h-full">
    <DotsLayout />
    <DetectedUser />
    <MainInfoUser />
  </div>
</template>

<style scoped>
</style>
