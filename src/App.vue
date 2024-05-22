<script setup lang="ts">
import Main from '@/layout/Main.vue';
import WebApp from '@twa-dev/sdk'
import { onMounted, onBeforeUnmount, computed, watch, ref } from 'vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { tapActionIncr } from './services/tap.service';
import { levels } from './utils/data';

const appStore = useApplicationStore()
const { totalScoreGetters, currentThemeAppGetters, mainBalanceUserGetters, currentUserLevelGetters } = storeToRefs(appStore)
const { actionMiningMoney, actionGetStackCategories, actionLevelCheck } = appStore

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

watch(() => mainBalanceUserGetters.value, (newVal) => {
  if (newVal) {
    if (newVal > getCurrentLevelUp.value) {
      console.log('setLevelUp', newVal > getCurrentLevelUp.value)
      actionLevelCheck()
    }
  }
})

onresize = (event) => {
  console.log('event onresize', event)
}

const webAppHeight = computed(() => WebApp.viewportHeight)

watch(() => webAppHeight.value, (newVal) => {
  console.log('rrrrrrrrrr', newVal)  
})

WebApp.onEvent('viewportChanged', async (event: any) => {
  // console.log('event111', event)
  if (WebApp.viewportHeight < 400) {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA');
  }
  // let value = totalScoreGetters.value
  if (event.isStateStable) {
    console.log('event222', event)
    // await actionCheckinUserService()
  }
})

// const overflow = 100
// document.body.style.overflowY = 'hidden'
// document.body.style.marginTop = `${overflow}px`
// document.body.style.height = window.innerHeight + overflow + "px"
// document.body.style.paddingBottom = `${overflow}px`
// window.scrollTo(0, overflow)

const mainblock = ref()

let ts: number | undefined
const onTouchStart = (e: TouchEvent) => {
  ts = e.touches[0].clientY
}
const onTouchMove = (e: TouchEvent) => {
  if (mainblock.value) {
    const scroll = mainblock.value.scrollTop
    const te = e.changedTouches[0].clientY
    if (scroll <= 0 && ts! < te) {
      e.preventDefault()
    }
  } else {
    e.preventDefault()
  }
}

const touchMove = (e: TouchEvent) => {
  e.preventDefault()
}


onMounted(() => {
  WebApp.expand()
  console.log('WebApp.initDataUnsafe.user?.photo_url', WebApp.initDataUnsafe.user?.photo_url)
  console.log('WebApp.version', WebApp.version)
  WebApp.onEvent('viewportChanged', setViewportData)
  actionGetStackCategories()
  actionLevelCheck()
  if (mainblock.value) {
    // mainblock.value.addEventListener('touchstart', onTouchStart, { passive: false })
    // mainblock.value.addEventListener('touchmove', onTouchMove, { passive: false })
    
  }
  document.addEventListener('touchmove', touchMove, { passive: false })
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
