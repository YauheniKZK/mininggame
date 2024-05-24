<script setup lang="ts">
import Main from '@/pages/main/Main.vue';
import Mining from '@/pages/mining/Mining.vue';
import Earn from '@/pages/Earn.vue';
import Info from '@/pages/Info.vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import EarnDefault from '@/pages/friends/layouts/defaults/EarnDefault.vue';
import ThemeOptions from '@/components/user/components/ThemeOptions.vue';
import StackOptions from '@/components/user/components/StackOptions.vue';
import TopInfo from '@/pages/mining/layouts/default/components/TopInfo.vue';
import { watch } from 'vue';
import WebApp from '@twa-dev/sdk';
import { getImageUrl } from '@/utils/images';
import HomeIcons from '@/assets/svg/components/HomeIcons.vue';
import EarnIcons from '@/assets/svg/components/EarnIcons.vue';
import FriendsIcon from '@/assets/svg/components/FriendsIcon.vue';
import InfoIcon from '@/assets/svg/components/InfoIcon.vue';
import MiningIcon from '@/assets/svg/components/MiningIcon.vue';


const versionApp = import.meta.env.PACKAGE_VERSION

const appStore = useApplicationStore()
const { showModalSettingGetters } = storeToRefs(appStore)
// const { actionMiningMoney } = appStore


const valueTab = ref('main')
const updateTab = (value: string) => {
  valueTab.value = value
  if (value === 'setting') {
    WebApp.BackButton.show()
  }
}

watch(() => showModalSettingGetters.value, (newVal) => {
  if (newVal) {
    updateTab('setting')
    WebApp.BackButton.show()
  } else {
    updateTab('main')
    WebApp.BackButton.hide()
  }
})

WebApp.BackButton.onClick(() => {
  updateTab('main')
})

onMounted(async () => {
  // await actionGetUser()
})
// onUnmounted(async () => {
//   await actionMiningMoney(totalScoreGetters.value)
// })
</script>

<template>
  <div class="flex flex-col justify-between container-drawer h-full">
    <div v-if="valueTab === 'mining'" class="sticky top-[16px] px-[16px] z-[1]">
      <TopInfo class="mb-[8px] z-[2]" />
    </div>
    <div class="flex h-auto">
      <n-tabs
        class="w-full tabs-custom1 none-tab mb-[24px] h-full"
        :tab-class="'tab-class '"
        :pane-class="'h-full'"
        :value="valueTab"
        animated
      >
        <n-tab-pane name="main" class="w-full" style="padding-top: 0;">
          <Main />
        </n-tab-pane>
        <n-tab-pane name="mining" class="w-full h-full">
          <Mining />
        </n-tab-pane>
        <n-tab-pane name="earn" class="w-full">
          <Earn />
        </n-tab-pane>
        <n-tab-pane name="friends" class="w-full">
          <EarnDefault />
        </n-tab-pane>
        <n-tab-pane name="info" class="w-full">
          <Info />
        </n-tab-pane>
        <n-tab-pane name="setting" class="w-full">
          <div class="flex flex-col p-[16px]">
            <div class="flex mb-[24px]">
              <span class="text-[18px] text-main-color">{{ $t('SETTING') }}</span>
            </div>
            <div class="flex flex-col mb-[12px]">
              <ThemeOptions />
            </div>
            <div class="flex flex-col">
              <StackOptions />
            </div>
          </div>
          
        </n-tab-pane>
        <!-- <Transition name="slide-up">
      <div v-if="showModalSettingGetters" ref="containerForOptions" class="z-[10] flex flex-col mb-[12px] fixed left-0 top-0 w-full h-screen bg-[#000] overflow-hidden" >
        
      </div>
    </Transition> -->
      </n-tabs>
    </div>
    <div v-if="valueTab !== 'setting'" class="flex flex-col w-full fixed bottom-[8px] px-[8px] z-[10]">
      <div class="flex justify-start p-[8px_12px]">
        <span class="text-[#fff]">{{ versionApp }}</span>
      </div>
      <div class="flex w-full h-[56px] items-center rounded-[12px] footer-before" style="box-shadow: 0px -10px 15px -3px rgba(0,0,0,0.1);">
        <n-tabs type="segment" class="w-full tabs-custom1 custom-bg-1" :value="valueTab" animated @update:value="updateTab">
          <n-tab name="main">
            <div class="flex flex-col items-center justify-center">
              <n-icon :size="22">
                <HomeIcons :color="'#fff'" />
              </n-icon>
              <!-- <img :src="getImageUrl('svg/homeIcon.svg')" alt="" /> -->
              <span>{{ 'Home' }}</span>
            </div>
          </n-tab>
          <n-tab name="mining">
            <div class="flex flex-col items-center justify-center">
              <n-icon :size="22">
                <MiningIcon :color="'#fff'" />
                
              </n-icon>
              <!-- <img :src="getImageUrl('svg/b2-miningIcon.svg')" alt="" /> -->
              <span>{{ 'Mining' }}</span>
            </div>
          </n-tab>
          <n-tab name="earn">
            <div class="flex flex-col items-center justify-center">
              <n-icon :size="22">
                <InfoIcon :color="'#fff'" />
                
              </n-icon>
              <!-- <img :src="getImageUrl('svg/b2-earnIcon.svg')" alt="" /> -->
              <span>{{ 'Earn' }}</span>
            </div>
          </n-tab>
          <n-tab name="friends">
            <div class="flex flex-col items-center justify-center">
              <n-icon :size="22">
                <FriendsIcon :color="'#fff'" />
              </n-icon>
              <!-- <img :src="getImageUrl('svg/b2-friendsIcon.svg')" alt="" /> -->
              <span>{{ 'Friends' }}</span>
            </div>
          </n-tab>
          <n-tab name="info">
            <div class="flex flex-col items-center justify-center">
              <n-icon :size="22">
                <EarnIcons :color="'#fff'" />
              </n-icon>
              <!-- <img :src="getImageUrl('svg/b2-infoIcon.svg')" alt="" /> -->
              <span>{{ 'Info' }}</span>
            </div>
          </n-tab>
        </n-tabs>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.footer-before {
  position: relative;
}
.footer-before::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #413e41f0;
  border-radius: 12px;
}

</style>
