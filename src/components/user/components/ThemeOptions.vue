<script setup lang="ts">
// import { getImageUrl } from '@/utils/images';
import { ThemeApp, useApplicationStore } from '@/stores/application/applicationStore';
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n'


defineProps<{ showModal: boolean }>()

const { t } = useI18n()
const appStore = useApplicationStore()
const { optionsThemeAppGetters, currentThemeAppGetters, allStacksAppGetters, currentUserDataGetters } = storeToRefs(appStore)
const { actionChooseThemeApp, actionAddMainStack } = appStore

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
  <n-drawer v-model:show="showModal" :placement="'right'" to=".n-config-provider" class="bg-secondary">
    <n-drawer-content>
      <div class="flex flex-col mb-[12px]">
        <div class="flex mb-[24px]">
          <span class="text-[18px] text-main-color">{{ $t('SETTING') }}</span>
        </div>
        <div class="flex flex-col mb-[12px]">
          <span class="text-[12px] text-main-color mb-[6px]">{{ $t('choose_theme_app') }}</span>
          <n-select v-model:value="valueTheme" :options="options" @update:value="updateTheme" />
        </div>
        <div class="flex flex-col">
          <span class="text-[12px] text-main-color mb-[6px]">{{ $t('choose_main_stack') }}</span>
          <n-select v-model:value="valueStack" :options="optionsStack" @update:value="updateStack" />
        </div>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
</style>
