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


const updateTheme = (value: ThemeApp) => {
  actionChooseThemeApp(value)
}

const updateStack = async (value: string) => {
  await actionAddMainStack(Number(value))
}

onMounted(() => {
  const doc = document.querySelector('.n-drawer-body-content-wrapper')
  if(doc) {
    doc.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false })
  }
})
</script>

<template>
  <div class="flex items-center justify-between p-[8px_16px] rounded-[12px] item-setting" @click="openOptions">
    <span class="text-[14px] text-main-color">{{ $t('choose_main_stack') }}</span>
    <div class="flex">
      <n-icon :size="22" :color="'#D2649A'">
        <ChevronForward />
      </n-icon>
    </div>
  </div>
  <Transition name="slide-up">
    <div v-if="showModal" class="flex flex-col p-[16px] fixed left-0 top-0 w-full h-screen bg-[#000] overflow-auto">
      <div
        v-for="item in mainStacksGetters"
        :key="item.id"
        class="flex items-center justify-between p-[8px_16px] rounded-[12px] item-setting mb-[16px]"
      >
        <span class="text-[14px] text-main-color">{{ $t(item.title) }}</span>
      </div>
    </div>
  </Transition>
  
  <!-- <n-drawer
    v-model:show="showModal"
    :placement="'right'"
    width="90%"
    content-style="flex: 1 1 auto;"
    height="100vh"
    class="bg-secondary fixed"
    style="height: auto;"
  >
    <n-drawer-content>
      
    </n-drawer-content>
  </n-drawer> -->
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
