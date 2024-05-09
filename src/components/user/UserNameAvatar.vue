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
  <div class="flex flex-col rounded-[16px]" style="box-shadow: 0px 10px 15px -3px var(--main-shadow-color);">
    <div class="flex items-center justify-center">{{ props.name }}</div>
    <div class="flex justify-center items-center">
      <img :src="getImageUrl('img/ghost_user.png')" class="object-contain" alt="" />
    </div>
  </div>
</template>

<style scoped>
</style>
