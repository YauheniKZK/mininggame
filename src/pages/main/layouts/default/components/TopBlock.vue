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
      <img :src="getImageUrl('img/avatars/cat2.png')" class="img-icon" alt="" />
      <div class="flex flex-col pl-[16px]">
        <span class="text-[#fff]">{{ currentUserDataGetters.first_name }}</span>
        <div class="text-[#fff] flex items-center">
          <span>{{ 'level: ' }}</span>
          <span>{{ $t(currentUserDataGetters.level) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-icon {
  max-width: 60px;
  background: linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, purple, orange) border-box;
  border: 2px solid transparent;
  border-radius: 50px;
}
</style>
