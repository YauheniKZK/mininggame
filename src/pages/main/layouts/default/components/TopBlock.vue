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
        <span class="text-[#fff] text-[18px]">{{ currentUserDataGetters.first_name }}</span>
        <div class="text-[#fff] flex items-center">
          <span class="text-[#636566]">{{ 'level: ' }}</span>
          <span class="tag">{{ $t(currentUserDataGetters.level) }}</span>
        </div>
      </div>
    </div>
    <div class="flex">
      <button @click="false">
        <img :src="getImageUrl('svg/settingUser.svg')" class="max-w-[44px]" alt="" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.img-icon {
  max-width: 50px;
  object-fit: contain;
  height: 60px;
  background: linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, purple, orange) border-box;
  border: 2px solid transparent;
  border-radius: 50px;
}

.tag {
  display: inline-block;
  margin-left: 8px;
  padding: 0px 8px;
  box-shadow: rgba(254, 225, 0, 0.1) 0px 4px 16px, rgba(254, 225, 0, 0.1) 0px 8px 24px, rgba(254, 225, 0, 0.1) 0px 16px 56px;
  border-radius: 16px;
  background: #fee100;
  color: #8e8381;
}
</style>
