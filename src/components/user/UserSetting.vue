<script setup lang="ts">
import { getImageUrl } from '@/utils/images';
import { ThemeApp, useApplicationStore } from '@/stores/application/applicationStore';
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';

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
      label: item.title,
      key: item.title,
      children: item.stacks.map((i: any) => {
        return {
          label: i.title,
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
  <div class="flex justify-between rounded-[16px] setting-block bg-secondary p-[12px] w-full" style="box-shadow: 0px 0px 15px -3px #1d1d1d;">
    <div class="flex flex-col justify-center">
      <span v-if="currentUserDataGetters.main_stack" class="text-[14px] text-main-color mb-[6px]">{{ 'Your stack' }}</span>
      <div v-if="currentUserDataGetters.main_stack" class="h-[20px] flex justify-center items-center rounded-[12px] p-[2px_8px] block-tag">
        <span class="text-[16px] font-[500] leading-[24px] text-center">{{ currentUserDataGetters.main_stack }}</span>
      </div>
      <span v-if="!currentUserDataGetters.main_stack" class="text-[14px] text-[#ffffff7a] w-[70%]">{{ 'Select your main stack in your app settings' }}</span>
    </div>
    <div class="flex">
      <button @click="showModal = true">
        <img :src="getImageUrl('svg/settingUser.svg')" class="max-w-[60px]" alt="" />
      </button>
    </div>
    <n-drawer v-model:show="showModal" :placement="'bottom'" height="80%" to=".n-config-provider" class="bg-secondary">
      <n-drawer-content>
        <div class="flex flex-col mb-[12px]">
          <div class="flex mb-[24px]">
            <span class="text-[18px] text-main-color">{{ 'Setting' }}</span>
          </div>
          <div class="flex flex-col mb-[12px]">
            <span class="text-[12px] text-main-color mb-[6px]">{{ 'Choose a theme for your app' }}</span>
            <n-select v-model:value="valueTheme" :options="options" @update:value="updateTheme" />
          </div>
          <div class="flex flex-col">
            <span class="text-[12px] text-main-color mb-[6px]">{{ 'Choose main stack' }}</span>
            <n-select v-model:value="valueStack" :options="optionsStack" @update:value="updateStack" />
          </div>
        </div>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<style scoped>
</style>
