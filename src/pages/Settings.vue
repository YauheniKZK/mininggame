<script setup lang="ts">
import { onMounted } from 'vue';
import WebApp from '@twa-dev/sdk';
import { onBeforeUnmount } from 'vue';
import ThemeOptions from '@/components/user/components/ThemeOptions.vue';
import StackOptions from '@/components/user/components/StackOptions.vue';

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
  <div class="flex flex-col p-[16px]">
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
</template>

<style>
</style>
