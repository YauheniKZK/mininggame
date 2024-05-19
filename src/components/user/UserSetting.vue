<script setup lang="ts">
import { getImageUrl } from '@/utils/images';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import UserSettingDrawer from './UserSettingDrawer.vue';

const appStore = useApplicationStore()
const { currentUserDataGetters } = storeToRefs(appStore)

const showModal = ref(false)

</script>

<template>
  <div class="flex justify-between rounded-[16px] setting-block bg-secondary p-[12px] w-full" style="box-shadow: 0px 0px 15px -3px #1d1d1d;">
    <div class="flex flex-col justify-center">
      <span v-if="currentUserDataGetters?.main_stack" class="text-[14px] text-main-color mb-[6px]">{{ $t('your_main_stack') }}</span>
      <div v-if="currentUserDataGetters?.main_stack" class="h-[20px] flex justify-center items-center rounded-[12px] p-[2px_8px] block-tag">
        <span class="text-[16px] font-[500] leading-[24px] text-center">{{ $t(currentUserDataGetters?.main_stack) }}</span>
      </div>
      <span v-if="!currentUserDataGetters?.main_stack" class="text-[14px] text-[#ffffff7a] w-[70%]">{{ $t('none_main_stack') }}</span>
    </div>
    <div class="flex">
      <button @click="showModal = true">
        <img :src="getImageUrl('svg/settingUser.svg')" class="max-w-[60px]" alt="" />
      </button>
    </div>
    <UserSettingDrawer :showModal="showModal" />
  </div>
</template>

<style scoped>
</style>
