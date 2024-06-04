<script setup lang="ts">
import { ref } from 'vue';
import DetectedUser from '../main/layouts/default/components/DetectedUser.vue';
import DetectedUserV2 from '../main/layouts/default/components/DetectedUserV2.vue';
import DetectedUserV3 from '../main/layouts/default/components/DetectedUserV3.vue';
import MainInfoUser from '../main/layouts/default/components/MainInfoUser.vue';
import MainInfoUserV2 from '../main/layouts/default/components/MainInfoUserV2.vue';
import MainInfoUserV3 from '../main/layouts/default/components/MainInfoUserV3.vue';
import { onMounted } from 'vue';
import DotsLayout from '@/components/DotsLayout.vue';
import InfoBalanceUser from '../main/layouts/default/components/InfoBalanceUser.vue';
import InfoBalanceUserV2 from '../main/layouts/default/components/InfoBalanceUserV2.vue';
import ProgressUser from '../main/layouts/default/components/ProgressUser.vue';
import TapBlockV2 from '../main/layouts/default/components/TapBlockV2.vue';
import TapsInfoUser from '../main/layouts/default/components/TapsInfoUser.vue';
import TapBlockV3 from '../main/layouts/default/components/TapBlockV3.vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import MiningSystem from '@/components/MiningSystem.vue';
import Main from '@/view/Main.vue';

const appStore = useApplicationStore()
const { showMiningSystemGetters } = storeToRefs(appStore)


</script>

<template>
  <div class="flex flex-col items-center w-full h-full p-[16px] ">
    <Main />
  </div>
</template>

<style scoped>
</style>
