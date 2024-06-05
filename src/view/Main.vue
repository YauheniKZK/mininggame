<script setup lang="ts">
import Main from '@/pages/main/Main.vue';
import Mining from '@/pages/mining/Mining.vue';
import Earn from '@/pages/earn/layouts/Earn.vue';
import Friends from '@/pages/friends/layouts/Friends.vue';
import Info from '@/pages/info/layouts/Info.vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import TopInfo from '@/pages/mining/layouts/default/components/TopInfo.vue';
import TopDescription from '@/pages/mining/layouts/default/components/TopDescription.vue';
import { watch } from 'vue';
import WebApp from '@twa-dev/sdk';
import { getImageUrl } from '@/utils/images';
import HomeIcons from '@/assets/svg/components/HomeIcons.vue';
import EarnIcons from '@/assets/svg/components/EarnIcons.vue';
import FriendsIcon from '@/assets/svg/components/FriendsIcon.vue';
import InfoIcon from '@/assets/svg/components/InfoIcon.vue';
import MiningIcon from '@/assets/svg/components/MiningIcon.vue';
import TaskIcons from '@/assets/svg/components/TaskIcons.vue';
import Rating from '@/pages/Rating.vue'
import Settings from '@/pages/Settings.vue'
import DotsLayout from '@/components/DotsLayout.vue';
import MiningSystem from '@/components/MiningSystem.vue';

const versionApp = import.meta.env.PACKAGE_VERSION

const appStore = useApplicationStore()
const { showModalSettingGetters, showModalRatingGetters, showMiningSystemGetters } = storeToRefs(appStore)
// const { actionMiningMoney } = appStore

const rulesTabs = ['setting', 'rating']

const valueTab = ref('main')
const updateTab = (value: string) => {
  valueTab.value = value
  if (value === 'setting') {
    WebApp.BackButton.show()
  }
}

watch(() => showModalRatingGetters.value, (newVal) => {
  if (newVal) {
    updateTab('rating')
    WebApp.BackButton.show()
  } else {
    updateTab('main')
    WebApp.BackButton.hide()
  }
})

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
  <div class="flex flex-col justify-between container-drawer h-full w-full">
    <DotsLayout />
    <div v-if="valueTab === 'mining'" class="px-[16px] pt-[16px] mb-[16px] z-[1]">
      <TopDescription />
    </div>
    <div v-if="valueTab === 'mining'" class="sticky top-[16px] px-[16px] z-[1]">
      <TopInfo class="z-[2]" />
    </div>
    <div class="flex flex-grow">
      <n-tabs
        class="w-full tabs-custom1 none-tab mb-[24px] h-full h-"
        :tab-class="'tab-class '"
        :pane-style="'height: inherit;'"
        :pane-wrapper-style="'height: inherit;'"
        :value="valueTab"
        animated
      >
        <n-tab-pane name="main" class="w-full" style="padding-top: 0;">
          <Main />
        </n-tab-pane>
        <n-tab-pane name="mining" class="w-full">
          <Mining />
        </n-tab-pane>
        <n-tab-pane name="earn" class="w-full">
          <Earn />
        </n-tab-pane>
        <n-tab-pane name="friends" class="w-full">
          <Friends />
        </n-tab-pane>
        <n-tab-pane name="info" class="w-full">
          <Info />
        </n-tab-pane>
        <n-tab-pane name="setting" class="w-full">
          <Settings @back="updateTab('main')" />
        </n-tab-pane>
        <n-tab-pane name="rating" class="w-full">
          <Rating @back="updateTab('main')" />
        </n-tab-pane>
        <!-- <Transition name="slide-up">
      <div v-if="showModalSettingGetters" ref="containerForOptions" class="z-[10] flex flex-col mb-[12px] fixed left-0 top-0 w-full h-screen bg-[#000] overflow-hidden" >
        
      </div>
    </Transition> -->
      </n-tabs>
    </div>
    <n-drawer v-model:show="showMiningSystemGetters" :height="'100vh'" :placement="'bottom'" class="mining-system">
      <n-drawer-content>
        <MiningSystem />
      </n-drawer-content>
    </n-drawer>
    <div v-if="!rulesTabs.includes(valueTab)" class="flex flex-col w-full fixed bottom-[8px] px-[8px] z-[10] max-w-[calc(600px-32px)]">
      <div class="flex w-full h-[50px] items-center rounded-[2px] footer-before" style="box-shadow: 0px -10px 15px -3px rgba(0,0,0,0.1);">
        <n-tabs type="segment" class="w-full tabs-custom1 main-footer custom-bg-1" :value="valueTab" animated @update:value="updateTab">
          <n-tab name="info">
            <div class="flex flex-col items-center justify-center">
              <n-icon :size="22">
                <InfoIcon :color="valueTab === 'info' ? '#050a0e' : '#fff'" />
              </n-icon>
              <!-- <img :src="getImageUrl('svg/b2-infoIcon.svg')" alt="" /> -->
              <span>{{ 'Info' }}</span>
            </div>
          </n-tab>

          <n-tab name="friends">
            <div class="flex flex-col items-center justify-center">
              <n-icon :size="22">
                <FriendsIcon :color="valueTab === 'friends' ? '#050a0e' : '#fff'" />
              </n-icon>
              <!-- <img :src="getImageUrl('svg/b2-friendsIcon.svg')" alt="" /> -->
              <span>{{ 'Friends' }}</span>
            </div>
          </n-tab>

          <n-tab name="main">
            <div class="flex flex-col items-center justify-center">
              <n-icon :size="24">
                <HomeIcons :color="valueTab === 'main' ? '#050a0e' : '#fff'" />
              </n-icon>
              <!-- <img :src="getImageUrl('svg/homeIcon.svg')" alt="" /> -->
              <span>{{ 'Home' }}</span>
            </div>
          </n-tab>

          <n-tab name="earn">
            <div class="flex flex-col items-center justify-center">
              <n-icon :size="22">
                <TaskIcons :color="valueTab === 'earn' ? '#050a0e' : '#fff'" />
              </n-icon>
              <!-- <img :src="getImageUrl('svg/b2-earnIcon.svg')" alt="" /> -->
              <span>{{ 'Tasks' }}</span>
            </div>
          </n-tab>

          <n-tab name="mining">
            <div class="flex flex-col items-center justify-center">
              <n-icon :size="22">
                <MiningIcon :color="valueTab === 'mining' ? '#050a0e' : '#fff'" />
                
              </n-icon>
              <!-- <img :src="getImageUrl('svg/b2-miningIcon.svg')" alt="" /> -->
              <span>{{ 'Skills' }}</span>
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
  border-radius: 2px;
}

</style>
