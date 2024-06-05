<script setup lang="ts">
import Main from '@/view/Main.vue';
import StartPage from '@/pages/StartPage.vue';
import LoadingStart from '@/components/LoadingStart.vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { onMounted, onBeforeUnmount, watch, ref, computed } from 'vue';
import { Config } from '@/config';
import TestPage from '@/pages/test/TestPage.vue';
// import eruda from 'eruda'
// import WebApp from '@twa-dev/sdk'
// import { tapActionIncr } from '@/services/tap.service';

// const erudaRef = ref()

const appStore = useApplicationStore()
const {
  currentUserDataGetters,
  loadingGetUserGetters,
  successCurrentUserDataGetters,
  isTapingGetters,
  successfullSyncTapClaimGetters,
  earnPassivePerSecGetters,
  isActiveUserGetters
} = storeToRefs(appStore)
const {
  actionGetUser,
  resetUserData,
  actionCheckinUserService,
  actionSyncTapClaim,
  startPassiveEarn,
  actionGetStacksMain
} = appStore

const interval = ref<any>(null)
const interval2 = ref<any>(null)

const intervalPassiveEarn = ref<any>(null)

watch(() => successfullSyncTapClaimGetters.value, (newVal) => {
  if (newVal) {
    intervalPassiveEarn.value = setInterval(() => {
      startPassiveEarn(earnPassivePerSecGetters.value)
    }, 1000)
  } else {
    clearInterval(intervalPassiveEarn.value)
  }
})

const containerForOptions = ref()

onMounted(async () => {
  console.log('222222')
  if (containerForOptions.value) {
    // containerForOptions.value.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false })
    // containerForOptions.value.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false })
  }

  await actionGetUser('start')
  await actionGetStacksMain()
  await actionSyncTapClaim()
  await actionCheckinUserService()

  // if (eruda) {
  //   eruda.init({
  //     container: erudaRef.value,
  //     tool: ['console', 'elements']
  //   })
  // }
  // if (!interval.value) {
  //   interval.value = setInterval(() => {
  //     // incrimentTotalScore()
  //     actionMiningMoney(1)
  //     // updateMiningTotalScore()
  //     console.log('miningTotalScoreGetters', miningTotalScoreGetters.value)
  //     console.log('totalScoreGetters', totalScoreGetters.value)
      
      
  //     actionGetUser('page')
      
  //   }, 1000)
  // } else {
  //   // interval.value = null
  //   clearInterval(interval.value)
  // }
})

watch(() => successCurrentUserDataGetters.value, (newVal) => {
  if (newVal) {
    // updateTotalScore(0)
  }
})

watch(() => isTapingGetters.value, (newVal) => {
  if (newVal) {
    // interval.value = null
    // clearInterval(interval.value)
    // interval2.value = setInterval(() => {
    //   updateMiningTotalScore()
      
    // }, 1000)
  } else {
    // interval2.value = null
    // clearInterval(interval2.value)
    // resetMiningTotalScore()
    
    // interval.value = setInterval(() => {
    //   // incrimentTotalScore()
    //   actionMiningMoney(1)
    //   // updateMiningTotalScore()
    //   console.log('miningTotalScoreGetters', miningTotalScoreGetters.value)
    //   console.log('totalScoreGetters', totalScoreGetters.value)
      
      
    //   actionGetUser('page')
    //   updateTotalScore(0)
      
    // }, 1000)
  }
})

// watch(() => currentUserData.value, (newVal) => {
//   actionMiningMoney(10)
// })

const testMode = computed(() => {
  console.log('Config.TEST_MODE',Config.TEST_MODE)
  return Config.TEST_MODE === 'true'
})

onBeforeUnmount(async () => {
  console.log('1111111111111111111')
  // actionMiningMoney(10)
  // await tapActionIncr(10)
  if (intervalPassiveEarn.value) {
    clearInterval(intervalPassiveEarn.value)
  }
  if (interval.value) {
    clearInterval(interval.value)
    // interval.value = null
  }
  // interval2.value = null
  clearInterval(interval2.value)
  resetUserData()
})
</script>

<template>
  <div class="flex flex-col h-full">
    <TestPage v-if="testMode" />
    <LoadingStart v-if="!testMode && loadingGetUserGetters" />
    <StartPage v-if="!testMode && !currentUserDataGetters && !loadingGetUserGetters && !isActiveUserGetters" />
    <Main v-if="!testMode && currentUserDataGetters && !loadingGetUserGetters && isActiveUserGetters" />
  </div>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(100vh);
}

.slide-up-leave-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
