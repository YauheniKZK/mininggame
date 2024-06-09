<template>
  <n-modal
    :show="showModal"
    preset="card"
    :bordered="false"
    :closable="false"
    class="custom1-card-modal"
    style="padding-bottom: 15px; border-radius: 0px"
    :style="`max-width: ${maxWidth}; width: ${width}`"
    :content-style="'padding-left: 16px;padding-right: 16px;'"
    :header-style="'padding-left: 16px;padding-right: 16px;padding-bottom: 0;'"
    @mask-click="$emit('close')"
  >
    <template #header>{{ '' }}</template>
    <template #header-extra>
      <n-icon :size="24" class="cursor-pointer relative z-10" @click="$emit('close')">
        <img :src="getImageUrl('svg/Close.svg')" alt="" />
      </n-icon>
    </template>
    <slot name="content" />
  </n-modal>
</template>

<script setup lang="ts">
import { getImageUrl } from '@/utils/images'

defineEmits(['close'])

defineProps({
  showModal: { tyle: Boolean, default: false },
  width: { type: String, default: '80%' },
  maxWidth: { type: String, default: '90%' }
})

</script>

<style scoped></style>
