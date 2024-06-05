<script setup lang="ts">
import Main from '@/layout/Main.vue';
import WebApp from '@twa-dev/sdk'
import { onMounted, onBeforeUnmount, computed, watch, ref } from 'vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { tapActionIncr } from './services/tap.service';
import { levels } from './utils/data';
import { onUpdated } from 'vue';

const appStore = useApplicationStore()
const {
  totalScoreGetters,
  currentThemeAppGetters,
  mainBalanceUserGetters,
  currentUserLevelGetters,
  successCurrentUserDataGetters
} = storeToRefs(appStore)
const { actionMiningMoney, actionGetStackCategories, actionLevelCheck, actionGetUser } = appStore

function setViewportData() {
  console.log('window.innerWidth', window.innerWidth)
  console.log('window.viewportStableHeight', WebApp.viewportStableHeight)
  console.log('window.isExpanded', WebApp.isExpanded)
  if (WebApp.isExpanded) {
    // viewportHeight.value = WebApp.viewportStableHeight
  }
}

const getCurrentLevelUp = computed(() => {
  return levels[currentUserLevelGetters.value]
})

watch(() => successCurrentUserDataGetters.value, async (newVal) => {
  if (newVal) {
    actionGetStackCategories()
    actionLevelCheck()
  }
})

watch(() => mainBalanceUserGetters.value, async (newVal) => {
  if (newVal) {
    if (newVal > getCurrentLevelUp.value) {
      console.log('setLevelUp', newVal > getCurrentLevelUp.value)
      await actionLevelCheck()
      await actionGetUser('page')
    }
  }
})

const mainblock = ref()

onMounted(async () => {
  WebApp.expand()
  console.log('WebApp.initDataUnsafe.user?.photo_url', WebApp.initDataUnsafe.user?.photo_url)
  console.log('WebApp.version', WebApp.version)
  WebApp.onEvent('viewportChanged', setViewportData)
  await actionGetUser('page')
  // window.addEventListener('touchstart', onTouchStart, { passive: false })
  // window.addEventListener('touchmove', onTouchMove, { passive: false })

  // document.addEventListener('touchstart', onTouchStart, { passive: false })
  // document.addEventListener('touchmove', onTouchMove, { passive: false })
  // window.scrollTo(0, overflow)
  // document.addEventListener('touchmove', touchMove, { passive: false })
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
          <Main ref="mainblock" class="bg-main" />
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style scoped>
</style>
