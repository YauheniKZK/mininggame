<script setup lang="ts">
import Main from '@/layout/Main.vue';
import WebApp from '@twa-dev/sdk'
import { onMounted, onBeforeUnmount } from 'vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';

const appStore = useApplicationStore()
const { totalScoreGetters } = storeToRefs(appStore)
const { actionMiningMoney } = appStore

onMounted(() => {
  WebApp.expand()
  console.log('WebApp.version', WebApp.version)
  WebApp.onEvent('viewportChanged', async (event: any) => {
    console.log('event', event)
    let value = totalScoreGetters.value
    if (event.isStateStable) {
      await actionMiningMoney(value)
    }
  })
})

onBeforeUnmount(async () => {
  await actionMiningMoney(10)
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
