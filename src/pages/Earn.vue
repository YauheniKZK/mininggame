<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
// import WebApp from '@twa-dev/sdk'

// import { computed, ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
// import WebApp from '@twa-dev/sdk'
// import TotalScore from './components/TotalScore.vue';
// import TapBlock from './components/TapBlock.vue';

// const handlebtn = () => {
//   WebApp.showAlert(`Hello World! Current count is `)
// }
const appStore = useApplicationStore()
const { successGetLinkRefUserServiceGetters, loadingGetLinkRefUserServiceGetters } = storeToRefs(appStore)
const { actionGetLinkRefUserService } = appStore

const createLinkRef = async () => {
  await actionGetLinkRefUserService()
}

watch(() => successGetLinkRefUserServiceGetters.value, (newVal) => {
  if (newVal) {
    // WebApp.close()
    console.log('actionMiningMoney', newVal)
  }
})

</script>

<template>
  <div class="flex flex-col items-center w-full h-full">
    <button
      type="button" 
      class="w-full h-[50px] flex justify-center items-center bg-[#3C5B6F] rounded-[8px]"
      @click="createLinkRef"
    >
      <div class="flex items-center">
        <n-spin v-if="loadingGetLinkRefUserServiceGetters" :size="24" :stroke="'#fff'" class="mr-[8px]" />
        <span class="text-[#fff] font-[600]">{{ 'Invite Friend' }}</span>
      </div>
    </button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
