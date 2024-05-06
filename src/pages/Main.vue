<script setup lang="ts">
// import { computed, ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
// import WebApp from '@twa-dev/sdk'
import TotalScore from '@/components/TotalScore.vue';
import TapBlock from '@/components/TapBlock.vue';

// const handlebtn = () => {
//   WebApp.showAlert(`Hello World! Current count is `)
// }

</script>

<template>
  <div class="flex flex-col items-center w-full">
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
