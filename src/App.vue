<script setup lang="ts">
import Main from '@/layout/Main.vue';
import WebApp from '@twa-dev/sdk'
import { onMounted, onBeforeUnmount } from 'vue';
import { useApplicationStore } from './stores/application/applicationStore';

const appStore = useApplicationStore()
const { actionMiningMoney } = appStore

onMounted(() => {
  WebApp.expand()
  WebApp.themeParams.section_header_text_color = '#fff'
  WebApp.themeParams.text_color = '#fff'
  WebApp.isClosingConfirmationEnabled = true
  console.log('WebApp.version', WebApp.version)
})

onBeforeUnmount(() => {
  actionMiningMoney(10)
})
</script>

<template>
  <n-config-provider>
    <n-loading-bar-provider>
      <n-message-provider :placement="'top-right'">
        <n-notification-provider>
          <Main />
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style scoped>
</style>
