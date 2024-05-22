<script setup lang="ts">
import { ThemeApp, useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { getImageUrl } from '@/utils/images';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import UserSettingDrawer from '@/components/user/UserSettingDrawer.vue';

const appStore = useApplicationStore()
const { currentUserDataGetters, allStacksAppGetters, optionsThemeAppGetters, currentThemeAppGetters } = storeToRefs(appStore)
const { actionChooseThemeApp, actionAddMainStack } = appStore
const { t } = useI18n()

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
    <div class="flex flex-col">
      <div class="flex items-center mb-[8px]">
        <span class="text-[#fff] text-[14px] mr-[6px]">{{ 'Detected devcat: ' }}</span>
        <span class="text-[#fff] text-[14px]">{{ currentUserDataGetters.first_name }}</span>
      </div>
      <div class="flex items-center">
        <img :src="getImageUrl('img/avatars/cat2.png')" class="img-icon" alt="" />
        <div class="flex flex-col pl-[16px]">
          <div class="text-[#fff] flex items-center">
            <span class="text-[#adaeb1]">{{ 'Level: ' }}</span>
            <span class="tag">{{ $t(currentUserDataGetters.level) }}</span>
          </div>
          <div class="text-[#fff] flex items-center">
            <span class="text-[#adaeb1]">{{ 'Stack: ' }}</span>
            <span class="tag2">{{ currentUserDataGetters?.main_stack ? $t(currentUserDataGetters?.main_stack) : '' }}</span>
          </div>
        </div>
      
      </div>
        
    </div>

    <UserSettingDrawer />
  </div>
</template>

<style scoped>

/* .no-scroll-block {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  user-select: none !important;
  touch-action: none !important;
} */
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
  border-radius: 4px;
  background: #fee100;
  color: #8e8381;
  font-size: 12px;
}

.tag2 {
  display: inline-block;
  margin-left: 8px;
  padding: 0px 8px;
  border-radius: 4px;
  background: #888;
  color: #fff;
  font-size: 12px;
}
</style>
