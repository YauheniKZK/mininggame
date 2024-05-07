<script setup lang="ts">
import Main from '@/view/Main.vue';
import StartPage from '@/pages/StartPage.vue';
import LoadingStart from '@/components/LoadingStart.vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted } from 'vue';

const appStore = useApplicationStore()
const { currentUserDataGetters, loadingGetUserGetters, totalScoreGetters } = storeToRefs(appStore)
const { actionGetUser, resetUserData, actionMiningMoney } = appStore
onMounted(async () => {
  await actionGetUser('start')
})
onUnmounted(async () => {
  await actionMiningMoney(totalScoreGetters.value)
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
