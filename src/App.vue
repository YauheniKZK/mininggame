<script setup lang="ts">
import Main from '@/layout/Main.vue';
import WebApp from '@twa-dev/sdk'
import { onMounted, onBeforeUnmount, watch, computed } from 'vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';

const appStore = useApplicationStore()
const { totalScoreGetters } = storeToRefs(appStore)
const { actionMiningMoney } = appStore

onMounted(() => {
  WebApp.expand()
  console.log('WebApp.version', WebApp.version)
  console.log('totalScore', WebApp.CloudStorage.getItem('totalScore'))
  WebApp.onEvent('viewportChanged', async (event: any) => {
    console.log('event', event)
    // let value = totalScoreGetters.value
    if (event.isStateStable) {
      // await actionMiningMoney(value)
    }
  })
})

const heightApp = computed(() => WebApp.viewportHeight)

watch(() => heightApp.value, async (newVal) => {
  console.log('viewportHeight', newVal)
  if (newVal > 100) {
    await actionMiningMoney(totalScoreGetters.value)
  }
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
