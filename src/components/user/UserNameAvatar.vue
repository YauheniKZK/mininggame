<script setup lang="ts">
// import { useApplicationStore } from '@/stores/application/applicationStore';
import { getImageUrl } from '@/utils/images';
// import { storeToRefs } from 'pinia';
// import { onMounted } from 'vue';
const props = defineProps<{ name: string }>()

//const appStore = useApplicationStore()
// const { totalScoreGetters, totalUserScoreGetter } = storeToRefs(appStore)
</script>

<template>
  <div class="flex flex-col rounded-[16px] max-w-[120px] bg-[var(--secondary-bg-color)] w-full min-h-[100px]" style="box-shadow: 0px 0px 15px -3px #1d1d1d;">
    <div class="flex items-center text-center bg-[var(--secondary2-bg-color)] justify-center p-[4px] rounded-[16px_16px_0_0] text-[var(--main-text-color)]">
      <n-ellipsis :line-clamp="1">
        <span>{{ props.name }}</span>
      </n-ellipsis>
    </div>
    <div class="flex justify-center items-center p-[4px]">
      <img :src="getImageUrl('img/ghost_user.png')" class="object-contain max-w-[60px]" alt="" />
    </div>
  </div>
</template>

<style scoped>
</style>
