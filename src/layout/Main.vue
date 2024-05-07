<script setup lang="ts">
import Main from '@/view/Main.vue';
import StartPage from '@/pages/StartPage.vue';
import LoadingStart from '@/components/LoadingStart.vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { onMounted, onBeforeUnmount } from 'vue';
import { tapActionIncr } from '@/services/tap.service';

const appStore = useApplicationStore()
const { currentUserDataGetters, loadingGetUserGetters } = storeToRefs(appStore)
const { actionGetUser, resetUserData } = appStore
onMounted(async () => {
  console.log('222222')
  await actionGetUser('start')
})

// watch(() => currentUserData.value, (newVal) => {
//   actionMiningMoney(10)
// })

onBeforeUnmount(() => {
  console.log('1111111111111111111')
  // actionMiningMoney(10)
  tapActionIncr(10)
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
