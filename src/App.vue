<script setup lang="ts">
import Main from '@/layout/Main.vue';
import WebApp from '@twa-dev/sdk'
import { onMounted, onBeforeUnmount, computed, watch } from 'vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';

const appStore = useApplicationStore()
const { totalScoreGetters } = storeToRefs(appStore)
const { actionMiningMoney } = appStore

onMounted(() => {
  WebApp.expand()
  console.log('WebApp.version', WebApp.version)
})

onresize = (event) => {
  console.log('event onresize', event)
}

const webAppHeight = computed(() => WebApp.viewportHeight)

watch(() => webAppHeight.value, (newVal) => {
  console.log('rrrrrrrrrr', newVal)  
})

WebApp.onEvent('viewportChanged', async (event: any) => {
  console.log('event111', event)
  if (WebApp.viewportHeight < 200) {
    // await actionCheckinUserService()
  }
  // let value = totalScoreGetters.value
  if (event.isStateStable) {
    console.log('event222', event)
    // await actionCheckinUserService()
  }
})

onBeforeUnmount(async () => {
  await actionMiningMoney(totalScoreGetters.value)
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
