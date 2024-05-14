<script setup lang="ts">
import Main from '@/layout/Main.vue';
import WebApp from '@twa-dev/sdk'
import { onMounted, onBeforeUnmount, computed, watch } from 'vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';

const appStore = useApplicationStore()
const { totalScoreGetters, currentThemeAppGetters } = storeToRefs(appStore)
const { actionMiningMoney, actionGetStackCategories, actionLevelCheck } = appStore

function setViewportData() {
  console.log('window.innerWidth', window.innerWidth)
  console.log('window.viewportStableHeight', WebApp.viewportStableHeight)
  console.log('window.isExpanded', WebApp.isExpanded)
}

onMounted(() => {
  WebApp.expand()
  console.log('WebApp.initDataUnsafe.user?.photo_url', WebApp.initDataUnsafe.user?.photo_url)
  console.log('WebApp.version', WebApp.version)
  WebApp.onEvent('viewportChanged', setViewportData)
  actionGetStackCategories()
  actionLevelCheck()
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
  <n-config-provider :class="`${currentThemeAppGetters}-theme`">
    <n-loading-bar-provider>
      <n-message-provider :placement="'top-right'">
        <n-notification-provider>
          <Main class="bg-main" />
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style scoped>
</style>
