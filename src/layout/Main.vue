<script setup lang="ts">
import Main from '@/view/Main.vue';
import StartPage from '@/pages/StartPage.vue';
import LoadingStart from '@/components/LoadingStart.vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { onMounted, onBeforeUnmount, watch, ref } from 'vue';
// import WebApp from '@twa-dev/sdk'
// import { tapActionIncr } from '@/services/tap.service';

const appStore = useApplicationStore()
const { currentUserDataGetters, loadingGetUserGetters, successCurrentUserDataGetters } = storeToRefs(appStore)
const { actionGetUser, resetUserData, updateTotalScore, actionMiningMoney } = appStore

const interval = ref<any>(null)

onMounted(async () => {
  console.log('222222')
  await actionGetUser('start')
  // await actionCheckinUserService()
  
  if (!interval.value) {
    interval.value = setInterval(() => {
      // incrimentTotalScore()
      actionMiningMoney(1)
      actionGetUser('page')
    }, 1000)
  } else {
    interval.value = null
    clearInterval(interval.value)
  }
})

watch(() => successCurrentUserDataGetters.value, (newVal) => {
  if (newVal) {
    updateTotalScore(0)
  }
})

// watch(() => currentUserData.value, (newVal) => {
//   actionMiningMoney(10)
// })

onBeforeUnmount(async () => {
  console.log('1111111111111111111')
  // actionMiningMoney(10)
  // await tapActionIncr(10)
  if (interval.value) {
    clearInterval(interval.value)
    interval.value = null
  }
  resetUserData()
})
</script>

<template>
  <div class="flex flex-col h-[calc(100vh-0px)]">
    <LoadingStart v-if="loadingGetUserGetters" />
    <StartPage v-if="!currentUserDataGetters && !loadingGetUserGetters" />
    <Main v-if="currentUserDataGetters && !loadingGetUserGetters" />
  </div>
</template>

<style scoped>
</style>
