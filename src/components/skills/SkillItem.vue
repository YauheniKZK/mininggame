<script setup lang="ts">
import ModalDialog from '@/components/ui/ModalDialog.vue';
import { ref } from 'vue';

const props = defineProps<{ title: string, profit: number }>()

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}

</script>

<template>
  <div class="flex flex-col p-[12px] bg-[#3d3d3c85] rounded-[8px] cursor-pointer" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="openModal">
    <div class="flex mb-[8px]">
      <div class="flex flex-col items-center pr-[8px]">
        <div class="w-[42px] h-[42px] rounded-[50%] bg-[#3b3b3b] mb-[6px]">
        </div>
        
      </div>
      <div class="flex flex-col">
        <span class="text-[#fff] text-[12px]">{{ 'lvl: ' + '5' }}</span>
        <span class="text-[#fff] text-[16px]">{{ props.title }}</span>

      </div>
    </div>
    <div class="flex items-center">
      <div class="flex flex-col w-[60%]">
        <span class="text-[#eeeeee7a] text-[12px]">{{ 'profit/hour' }}</span>
        <span class="text-[#fff] text-[14px]">{{ props.profit + ' $' }}</span>
      </div>
      <div class="flex flex-col flex-grow bg-[#5d5b594f] p-[2px_8px] rounded-[4px]">
        <span class="text-[#eeeeee7a] text-[12px] mr-[4px]">{{ 'price' }}</span>
        <span class="text-[#52f55f] text-[13px]">{{ props.profit + ' $' }}</span>
      </div>
    </div>
  </div>
  <ModalDialog
    v-if="showModal"
    :show-modal="showModal"
    :width="'80%'"
    :max-width="'90%'"
    @close="showModal = false"
  >
    <template #content>
      <span class="text-[22px] font-[600]">
        {{ 'Modal' }}
      </span>
      <div class="flex flex-col py-[32px]">
        <span>{{ 'Test' }}</span>
      </div>
    </template>
  </ModalDialog>
</template>

<style scoped>
</style>
