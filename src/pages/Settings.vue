<script setup lang="ts">
import { onMounted } from 'vue';
import WebApp from '@twa-dev/sdk';
import { onBeforeUnmount } from 'vue';
import ThemeOptions from '@/components/user/components/ThemeOptions.vue';
import StackOptions from '@/components/user/components/StackOptions.vue';
import { ChevronForward, CloseOutline } from '@vicons/ionicons5';

const emit = defineEmits(['back'])

onMounted(async () => {
  WebApp.BackButton.show()
})

WebApp.BackButton.onClick(() => {
  emit('back')
})

onBeforeUnmount(() => {
  WebApp.BackButton.hide()
})

</script>

<template>
  <div class="flex flex-col p-[16px] relative">
    <button
      class="flex justify-center items-center fixed right-0 bottom-[32px] btn-close"
      @click="emit('back')"
    >
      <n-icon :color="'#050a0e'" :size="46" class="">
        <CloseOutline />
      </n-icon>
    </button>
    <div class="flex mb-[24px]">
      <span class="text-[18px] text-main-color">{{ $t('SETTING') }}</span>
    </div>
    <div class="flex flex-col mb-[12px]">
      <n-collapse class="tasks-collapse" accordion>
        <n-collapse-item title="right" name="1">
          <template #arrow>
            <n-icon :color="'#fff'" :size="22">
              <ChevronForward />
            </n-icon>
          </template>
          <template #header>
            <span class="text-[#fff] text-[16px]">{{ 'Theme' }}</span>
          </template>
          <template #header-extra>
            <span class="text-[#48ede7c0] text-[14px]">{{ '' }}</span>
          </template>
          <div class="flex flex-col">
            <ThemeOptions />
          </div>
        </n-collapse-item>
        <n-collapse-item title="right" name="2">
          <template #arrow>
            <n-icon :color="'#fff'" :size="22">
              <ChevronForward />
            </n-icon>
          </template>
          <template #header>
            <span class="text-[#fff] text-[16px]">{{ 'Main stack' }}</span>
          </template>
          <template #header-extra>
            <span class="text-[#48ede7c0] text-[14px]">{{ '' }}</span>
          </template>
          <div class="flex flex-col">
            <StackOptions />
          </div>
        </n-collapse-item>
      </n-collapse>
    </div>
  </div>
</template>

<style scoped>
.btn-close {
  opacity: 1;
  background: #f4c543;
  z-index: 4;
  min-width: 66px;
  height: 50px;
  transition: all 0.2s ease-in-out;
}
</style>
