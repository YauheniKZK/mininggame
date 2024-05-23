<script setup lang="ts">
import Main from '@/view/Main.vue';
import StartPage from '@/pages/StartPage.vue';
import LoadingStart from '@/components/LoadingStart.vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { onMounted, onBeforeUnmount, watch, ref } from 'vue';
import ThemeOptions from '@/components/user/components/ThemeOptions.vue';
import StackOptions from '@/components/user/components/StackOptions.vue';
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
  showModalSettingGetters
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
    containerForOptions.value.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false })
    containerForOptions.value.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false })
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
  <div class="flex flex-col">
    <LoadingStart v-if="loadingGetUserGetters" />
    <StartPage v-if="!currentUserDataGetters && !loadingGetUserGetters" />
    <Main v-if="currentUserDataGetters && !loadingGetUserGetters" />
    <Transition name="slide-up">
      <div v-if="showModalSettingGetters" ref="containerForOptions" class="z-[10] flex flex-col mb-[12px] fixed left-0 top-0 w-full h-screen bg-[#000]" >
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
    </Transition>
  </div>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(-100vh);
}

.slide-up-leave-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
