<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { getImageUrl } from '@/utils/images';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import TopInfo from './components/TopInfo.vue';
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
  <div class="flex flex-col items-center w-full px-[16px]">
    <TopInfo class="mb-[24px]" />
    <div class="flex flex-col w-full">
      <div class="flex items-center mb-[10px]">
        <span class="text-[18px] text-[var(--main-text-color)]">{{ $t('your_referrals') + ` (${referralsGetters.length})` }}</span>
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
              <span class="text-[#3B185F] text-[12px] leading-[24px] text-center">{{ $t(item.main_stack) }}</span>
            </div>
            <div v-if="item.level" class="ml-[8px] h-[20px] flex justify-center items-center rounded-[4px] p-[2px_8px]  bg-[#888]">
              <span class="text-[#fff] text-[12px] leading-[24px] text-center">{{ $t(item.level) }}</span>
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
      <div class="flex justify-center items-center w-full">
        <img :src="getImageUrl('img/none_ref_img2.png')" class="max-w-[50%] min-w-[220px]" alt="" />
      </div>
    </div>
    <button class="btn z-[1]" @click="createLinkRef">
      <n-spin v-if="loadingGetLinkRefUserServiceGetters" :size="24" :stroke="'#fff'" class="mr-[8px]" />
      <span class="btn__content text-[#000] font-[600]">{{ $t('invite_friend') }}</span>
      <span class="btn__glitch"></span>
      <span class="btn__label">DevCat</span>
    </button>
    
  </div>
</template>

<style scoped>

:root {
  --yellow-color: #fcee09; 
  --red-color: #ff003c;
  --black-color: #050a0e;
  --blue-color: #00f0ff;
  --white-color: #fafafa;
}

.btn {
  width: 230px;
  height: 42px;
  border: 0;
  outline: none;
  background: var(--yellow-color);
  cursor: pointer;
  position: relative;
  font-family: Tomorrow, sans-serif;
  font-size: .85rem;
  text-transform: uppercase;
  color: var(--black-color);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
}

.btn__content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background: var(--yellow-color);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
}

.btn--secondary {
  background-color: var(--white-color);
}

.btn.red .btn__content {
  background-color: var(--red-color);
  color: var(--white-color);
}

.btn__label {
  font-size: .40rem;
  position: absolute;
  bottom: -1px;
  right: 8%;
  padding: 0 5px;
  background-color: var(--yellow-color);
  z-index: 3;
  border-left: 1px solid var(--blue-color);
}

.btn.red .btn__label {
  background-color: var(--white-color);
  color: var(--black-color);
}

.btn__glitch {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fcf0095d;
  filter: drop-shadow(-2px 3px #67e3f35b) drop-shadow(-1px -3px #02d7f37e) drop-shadow(2px 1px #02d7f363);
}

.btn.red .btn__glitch {
  background-color: var(--red-color);
}

.btn .btn__glitch,
.btn .btn__content::after,
.btn .btn__glitch,
.btn .btn__content::after {
  display: block;
}

</style>
