<script setup lang="ts">
// import { getImageUrl } from '@/utils/images';
import { ThemeApp, useApplicationStore } from '@/stores/application/applicationStore';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import WebApp from '@twa-dev/sdk';
import { onUnmounted } from 'vue';
import { watch } from 'vue';
import { ChevronForward } from '@vicons/ionicons5'
import { onMounted } from 'vue';

const appStore = useApplicationStore()
const { mainStacksGetters } = storeToRefs(appStore)
const { actionChooseThemeApp, actionAddMainStack } = appStore

const showModal = ref(false)


const openOptions = () => {
  showModal.value = true
  WebApp.BackButton.show()
}

WebApp.BackButton.onClick(() => {
  showModal.value = false
})

const updateStack = async (value: string) => {
  await actionAddMainStack(Number(value))
}

const stackContainer = ref()

onMounted(() => {
  const doc = document.querySelector('.n-drawer-body-content-wrapper')
  if(doc) {
    doc.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false })
  }
  if(stackContainer.value) {
    stackContainer.value.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false })
  }
})
</script>

<template>
  <div
    v-for="item in mainStacksGetters"
    :key="item.id"
    class="flex items-center justify-between p-[8px_16px] rounded-[12px] item-setting mb-[16px]"
  >
    <span class="text-[14px] text-main-color">{{ $t(item.title) }}</span>
  </div>
</template>

<style scoped>

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(100vh);
}

.slide-up-leave-to {
  opacity: 1;
  transform: translateX(0);
}
.item-setting {
  border: 1px solid #D2649A;
}
</style>
