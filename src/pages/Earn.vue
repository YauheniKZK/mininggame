<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { getImageUrl } from '@/utils/images';
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

const balanceRef = (balance: number | null) => {
  if (balance) {
    return Number(balance / 100).toFixed(2)
  } else {
    return 0
  }
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
    <div class="flex w-full mb-[24px] p-[12px] rounded-[16px]" style="box-shadow: 0px 0px 15px -3px var(--main-shadow-color);">
      <div class="flex flex-col justify-center min-w-[47%] max-w-[215px]">
        <span class="text-[20px] text-[var(--main-text-color)] mb-[6px]">
          {{ 'Hey, ' + currentUserDataGetters.first_name  }}
        </span>
        <span class="text-[14px] text-[var(--main-text-color)]">
          {{ 'Invite friends and earn extra experience points' }}
        </span>
      </div>
      <div class="flex justify-center items-center w-[53%]">
        <img :src="getImageUrl('img/invite_friend_bg.png')" class="object-contain max-w-[200px] w-full" alt="" />
      </div>
    </div>
    <div class="flex flex-col w-full">
      <div class="flex items-center mb-[10px]">
        <span class="text-[18px] text-[var(--main-text-color)]">{{ `Your referrals (${referralsGetters.length})` }}</span>
      </div>
      <div v-if="referralsGetters.length > 0" class="w-full mb-[24px]">
        <div
          v-for="(item, index) in referralsGetters"
          :key="index"
          style="box-shadow: 7px 6px 5px 0px rgba(0, 0, 0, 0.1);"
          class="flex items-center justify-between mb-[16px] p-[8px] relative rounded-[8px] bg-[#232D3F] w-full"
        >
          <div class="flex items-center justify-end right-[16px] -top-[10px] absolute">
            <div v-if="item.main_stack" class="ml-[8px] h-[20px] flex justify-center items-center rounded-[12px] p-[2px_8px]  bg-[#FEC260]">
              <span class="text-[#3B185F] text-[12px] leading-[24px] text-center">{{ item.main_stack }}</span>
            </div>
            <div v-if="item.level" class="ml-[8px] h-[20px] flex justify-center items-center rounded-[4px] p-[2px_8px]  bg-[#888]">
              <span class="text-[#fff] text-[12px] leading-[24px] text-center">{{ item.level }}</span>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex justify-center items-center mr-[12px]">
              <img :src="getImageUrl('img/invite_user1.png')" class="object-contain max-w-[54px]" alt="" />
            </div>
            <div class="flex flex-col">
              <div class="flex items-center">
                <span class="text-[#fff]">{{ '$ ' + balanceRef(item?.balance || null) }}</span>
              </div>
              <div class="flex items-center">
                <span class="text-[#fff] mr-[12px]">{{ item?.first_name }}</span>
              </div>
            </div>
          </div>
          <div class="flex items-end justify-end">
          </div>
    
        </div>
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
