<script setup lang="ts">
// import { getImageUrl } from '@/utils/images';
import { ThemeApp, useApplicationStore } from '@/stores/application/applicationStore';
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n'
import WebApp from '@twa-dev/sdk';
import { onUnmounted } from 'vue';
import { watch } from 'vue';
import { ChevronForward } from '@vicons/ionicons5'

const appStore = useApplicationStore()
const { optionsThemeAppGetters, currentThemeAppGetters, allStacksAppGetters, currentUserDataGetters } = storeToRefs(appStore)
const { actionChooseThemeApp, actionAddMainStack } = appStore

const showModal = ref(false)

const valueTheme = ref(currentThemeAppGetters.value || 'default')

const options = computed(() => {
  return optionsThemeAppGetters.value.map((item) => {
    return {
      label: item,
      value: item
    }
  })
})

WebApp.BackButton.onClick(() => {
  showModal.value = false
  WebApp.BackButton.hide()
})

watch(() => showModal.value, (newVal) => {
  if (!newVal) {
    WebApp.BackButton.hide()
  }
})

onUnmounted(() => {
  WebApp.BackButton.hide()
})

</script>

<template>
  <div
    v-for="item in optionsThemeAppGetters"
    :key="item"
    class="flex items-center justify-between p-[8px_16px] rounded-[12px] item-setting mb-[16px]"
  >
    <span class="text-[14px] text-main-color">{{ item }}</span>
  </div>
</template>

<style scoped>
.item-setting {
  border: 1px solid #D2649A;
}
</style>
