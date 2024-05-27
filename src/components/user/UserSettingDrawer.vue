<script setup lang="ts">
import { getImageUrl } from '@/utils/images';
import { ThemeApp, useApplicationStore } from '@/stores/application/applicationStore';
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n'
import { BarChartOutline, ChevronForward, CogOutline } from '@vicons/ionicons5'
import WebApp from '@twa-dev/sdk';
import ThemeOptions from './components/ThemeOptions.vue';
import StackOptions from './components/StackOptions.vue';
import { watch } from 'vue';
import { onUnmounted } from 'vue';


const { t } = useI18n()
const appStore = useApplicationStore()
const { optionsThemeAppGetters, currentThemeAppGetters, allStacksAppGetters, currentUserDataGetters } = storeToRefs(appStore)
const { actionChooseThemeApp, actionAddMainStack, switchModalSetting, switchModalRating } = appStore

const showModal = ref(false)

const valueTheme = ref(currentThemeAppGetters.value || 'default')
const valueStack = ref<string | null>(currentUserDataGetters.value?.main_stack || null)

const options = computed(() => {
  return optionsThemeAppGetters.value.map((item) => {
    return {
      label: item,
      value: item
    }
  })
})

const optionsStack = computed(() => {
  return allStacksAppGetters.value.map((item: any) => {
    return {
      type: 'group',
      label: t(item.title),
      key: item.title,
      children: item.stacks.map((i: any) => {
        return {
          label: t(i.title),
          value: i.id
        }
      })
    }
  })
})

watch(() => showModal.value, (newVal) => {
  if (newVal) {
    WebApp.BackButton.show()
  } else {
    WebApp.BackButton.hide()
  }
})

WebApp.BackButton.onClick(() => {
  showModal.value = false
  WebApp.BackButton.hide()
})

const updateTheme = (value: ThemeApp) => {
  valueTheme.value = value
  actionChooseThemeApp(value)
}

const updateStack = async (value: string) => {
  valueStack.value = value
  await actionAddMainStack(Number(value))
}

const touchmoveEv = (e) => {
  e.preventDefault()
  touchmoveEv(e)
}

onUnmounted(() => {
  WebApp.BackButton.hide()
})
</script>

<template>
  <div class="flex flex-col">
    <button @click="switchModalSetting" class="flex justify-center items-center">
      <n-icon :color="'#fff'" :size="28">
        <CogOutline />
      </n-icon>
      <!-- <img :src="getImageUrl('svg/settingUser.svg')" class="max-w-[44px]" alt="" /> -->
    </button>
    <div class="w-[50px] h-[1px] bg-[#63656661] my-[8px] z-[1]"></div>
    <button @click="switchModalRating" class="flex justify-center items-center">
      <n-icon :color="'#fff'" :size="22">
        <BarChartOutline />
      </n-icon>
    </button>
  </div>
  <!-- <n-drawer
    v-model:show="showModal"
    :placement="'bottom'"
    height="100vh"
    class="bg-secondary no-scroll-block fixed "
    content-style="flex: 1 1 auto;"
    style="box-shadow: 0px -25px 20px -16px rgb(191 191 191 / 45%);flex: 1 1 auto;"
  >
    <n-drawer-content>
      <div id="containerForOptions" class="flex flex-col mb-[12px]" >
        <div class="flex mb-[24px]">
          <span class="text-[18px] text-main-color">{{ $t('SETTING') }}</span>
        </div>
        <div class="flex flex-col mb-[12px]">
          <ThemeOptions />
        </div>
        <div class="flex flex-col">
          <StackOptions />
        </div>
      </div>
    </n-drawer-content>
  </n-drawer> -->
</template>

<style scoped>
</style>
