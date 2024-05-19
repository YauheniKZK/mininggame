<script setup lang="ts">
// import { getImageUrl } from '@/utils/images';
import { ThemeApp, useApplicationStore } from '@/stores/application/applicationStore';
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n'


const { t } = useI18n()
const appStore = useApplicationStore()
const { optionsThemeAppGetters, currentThemeAppGetters, allStacksAppGetters, currentUserDataGetters } = storeToRefs(appStore)
const { actionChooseThemeApp, actionAddMainStack } = appStore

const showModal = ref(false)

const valueTheme = ref(currentThemeAppGetters.value || 'default')
const valueStack = ref<string | null>(currentUserDataGetters.value.main_stack || null)

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

const updateTheme = (value: ThemeApp) => {
  valueTheme.value = value
  actionChooseThemeApp(value)
}

const updateStack = async (value: string) => {
  valueStack.value = value
  await actionAddMainStack(Number(value))
}
</script>

<template>
  <div class="flex items-center justify-between p-[8px_16px] rounded-[12px] item-setting">
    <span class="text-[14px] text-main-color">{{ $t('choose_theme_app') }}</span>
    <div class="flex">
      <n-icon :size="22" :color="'#D2649A'">
        <ChevronForward />
      </n-icon>
    </div>
  </div>
  <n-drawer v-model:show="showModal" :placement="'right'" to=".n-config-provider" class="bg-secondary">
    <n-drawer-content>
      <div class="flex flex-col mb-[12px]">
        {{ 'Themes' }}
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
</style>
