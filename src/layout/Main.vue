<script setup lang="ts">
import Main from '@/view/Main.vue';
import StartPage from '@/pages/StartPage.vue';
import LoadingStart from '@/components/LoadingStart.vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const appStore = useApplicationStore()
const { currentUserDataGetters, loadingGetUserGetters } = storeToRefs(appStore)
const { actionGetUser } = appStore
onMounted(async () => {
  await actionGetUser('start')
})
</script>

<template>
  <div class="flex flex-col h-[calc(100vh-0px)]">
    <LoadingStart v-if="loadingGetUserGetters" />
    <StartPage v-if="!currentUserDataGetters && !loadingGetUserGetters" />
    <Main v-else />
  </div>
</template>

<style scoped>
</style>
