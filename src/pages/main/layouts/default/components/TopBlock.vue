<script setup lang="ts">
import { ThemeApp, useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { getImageUrl } from '@/utils/images';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';


const appStore = useApplicationStore()
const { currentUserDataGetters, allStacksAppGetters, optionsThemeAppGetters, currentThemeAppGetters } = storeToRefs(appStore)
const { actionChooseThemeApp, actionAddMainStack } = appStore
const { t } = useI18n()

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
  <div class="flex justify-between">
    <div class="flex items-center">
      <img :src="getImageUrl('img/avatars/cat2.png')" class="img-icon" alt="" />
      <div class="flex flex-col pl-[16px]">
        <span class="text-[#fff] text-[16px]">{{ currentUserDataGetters.first_name }}</span>
        <div class="text-[#fff] flex items-center">
          <span class="text-[#adaeb1]">{{ 'Level: ' }}</span>
          <span class="tag">{{ $t(currentUserDataGetters.level) }}</span>
        </div>
      </div>
    </div>
    <div class="flex">
      <button @click="showModal = true">
        <img :src="getImageUrl('svg/settingUser.svg')" class="max-w-[44px]" alt="" />
      </button>
    </div>
    <n-drawer v-model:show="showModal" :placement="'bottom'" height="80%" to=".n-config-provider" class="bg-secondary no-scroll-block" style="box-shadow: 0px -25px 20px -16px rgb(191 191 191 / 45%);">
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
  </div>
</template>

<style scoped>

.no-scroll-block {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  user-select: none !important;
  touch-action: none !important;
}
.img-icon {
  max-width: 50px;
  min-width: 50px;
  object-fit: contain;
  height: 50px;
  background: linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, purple, orange) border-box;
  border: 2px solid transparent;
  border-radius: 50px;
}

.tag {
  display: inline-block;
  margin-left: 8px;
  padding: 0px 8px;
  box-shadow: rgba(254, 225, 0, 0.1) 0px 4px 16px, rgba(254, 225, 0, 0.1) 0px 8px 24px, rgba(254, 225, 0, 0.1) 0px 16px 56px;
  border-radius: 4px;
  background: #fee100;
  color: #8e8381;
  font-size: 12px;
}
</style>
