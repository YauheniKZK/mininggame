<script setup lang="ts">
// import { getImageUrl } from '@/utils/images';
import { ThemeApp, useApplicationStore } from '@/stores/application/applicationStore';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import WebApp from '@twa-dev/sdk';
import { onUnmounted } from 'vue';
import { watch } from 'vue';
import { ChevronForward } from '@vicons/ionicons5'

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
  <n-drawer
    v-model:show="showModal"
    :placement="'right'"
    width="90%"
    content-style="flex: 1 1 auto;"
    :min-height="100"
    to=".n-config-provider"
    class="bg-secondary fixed overflow-auto"
    style="height: auto;"
  >
    <n-drawer-content class="overflow-auto h-auto">
      <div class="flex flex-col pl-[16px] ">
        <div
          v-for="item in mainStacksGetters"
          :key="item.id"
          class="flex items-center justify-between p-[8px_16px] rounded-[12px] item-setting mb-[16px]"
        >
          <span class="text-[14px] text-main-color">{{ $t(item.title) }}</span>
        </div>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
.item-setting {
  border: 1px solid #D2649A;
}
</style>
