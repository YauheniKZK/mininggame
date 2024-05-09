<script setup lang="ts">
// import { computed, ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
// import WebApp from '@twa-dev/sdk'
import TotalScore from '@/components/TotalScore.vue';
import TapBlock from '@/components/TapBlock.vue';
import UserNameAvatar from '@/components/user/UserNameAvatar.vue';
import UserLevel from '@/components/user/UserLevel.vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';

const appStore = useApplicationStore()
const { currentUserDataGetters } = storeToRefs(appStore)

// const handlebtn = () => {
//   WebApp.showAlert(`Hello World! Current count is `)
// }

</script>

<template>
  <div class="flex flex-col items-center w-full p-[16px]">
    <div class="flex items-center gap-[16px] justify-between w-full mb-[24px]">
      <div class="max-w-[120px] min-w-[120px]">
        <UserNameAvatar :name="currentUserDataGetters.first_name" />
      </div>
      <div class="flex-grow">
        <UserLevel :balance="currentUserDataGetters.balance" />
      </div>
    </div>
    <div class="flex justify-center items-center w-full mb-[24px]">
      <TotalScore />
    </div>
    <div class="flex justify-center">
      <TapBlock />
    </div>
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
