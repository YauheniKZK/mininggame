<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { getImageUrl } from '@/utils/images';


const appStore = useApplicationStore()
const { currentUserDataGetters } = storeToRefs(appStore)
</script>

<template>
  <div class="flex justify-between">
    <div class="flex items-center">
      <img :src="getImageUrl('img/avatars/cat1.png')" alt="" />
      <div class="flex flex-col pl-[16px]">
        <span>{{ currentUserDataGetters.first_name }}</span>
        <span>{{ 'level: ' + $t(currentUserDataGetters.level) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
