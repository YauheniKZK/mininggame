<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
// import WebApp from '@twa-dev/sdk'

// import { computed, ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
// import WebApp from '@twa-dev/sdk'
// import TotalScore from './components/TotalScore.vue';
// import TapBlock from './components/TapBlock.vue';

// const handlebtn = () => {
//   WebApp.showAlert(`Hello World! Current count is `)
// }
const appStore = useApplicationStore()
const { successGetLinkRefUserServiceGetters, loadingGetLinkRefUserServiceGetters, referralsGetters, currentUserDataGetters } = storeToRefs(appStore)
const { actionGetLinkRefUserService } = appStore

const createLinkRef = async () => {
  await actionGetLinkRefUserService()
}

watch(() => successGetLinkRefUserServiceGetters.value, (newVal) => {
  if (newVal) {
    // WebApp.close()
    console.log('actionMiningMoney', newVal)
  }
})

</script>

<template>
  <div class="flex flex-col items-center w-full h-full p-[16px]">
    <div class="flex w-full mb-[16px] p-[12px] rounded-[16px]" style="box-shadow: 0px 0px 15px -3px var(--main-shadow-color);">
      <div class="flex flex-col min-w-[50%] max-w-[215px]">
        <span class="text-[18px] text-[var(--main-text-color)]">
          {{ 'Hey, ' + currentUserDataGetters.first_name  }}
        </span>
        <span class="text-[14px] text-[var(--main-text-color)]">
          {{ 'Invite friends and earn extra experience points' }}
        </span>
      </div>
      <div class="flex justify-center items-center w-[50%]">
      </div>
    </div>
    <div v-if="referralsGetters.length > 0" class="w-full mb-[24px]">
      <div v-for="(item, index) in referralsGetters" :key="index" class="flex items-center mb-[8px] p-[8px] rounded-[8px] bg-[#77B0AA] w-full">
        <span class="text-[#fff] mr-[12px]">{{ item?.username + ': ' }}</span>
        <span class="text-[#fff]">{{ item?.balance }}</span>
      </div>
    </div>
    <button
      type="button" 
      class="w-full h-[50px] flex justify-center items-center bg-[#3C5B6F] rounded-[8px]"
      @click="createLinkRef"
    >
      <div class="flex items-center">
        <n-spin v-if="loadingGetLinkRefUserServiceGetters" :size="24" :stroke="'#fff'" class="mr-[8px]" />
        <span class="text-[#fff] font-[600]">{{ 'Invite Friend' }}</span>
      </div>
    </button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
