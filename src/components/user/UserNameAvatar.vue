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
  <div class="flex flex-col rounded-[16px] max-w-[120px] w-full" style="box-shadow: 0px 10px 15px -3px var(--main-shadow-color);">
    <div class="flex items-center text-center bg-[var(--secondary-bg-color)] justify-center p-[4px] rounded-[16px_16px_0_0] text-[var(--main-text-color)]">
      {{ props.name }}
    </div>
    <div class="flex justify-center items-center p-[4px]">
      <img :src="getImageUrl('img/ghost_user.png')" class="object-contain max-w-[60px]" alt="" />
    </div>
  </div>
</template>

<style scoped>
</style>
