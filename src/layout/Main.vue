<script setup lang="ts">
import Main from '@/view/Main.vue';
import StartPage from '@/pages/StartPage.vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const appStore = useApplicationStore()
const { currentUserDataGetters } = storeToRefs(appStore)
const { actionGetUser } = appStore
onMounted(async () => {
  await actionGetUser()
})
</script>

<template>
  <div class="flex flex-col h-[calc(100vh-0px)]">
    <StartPage v-if="!currentUserDataGetters" />
    <Main v-else />
  </div>
</template>

<style scoped>
</style>
