<script setup lang="ts">
import Main from './view/Main.vue';


</script>

<template>
  <n-config-provider>
    <n-loading-bar-provider>
      <n-message-provider :placement="'top-right'">
        <n-notification-provider>
          <Main />
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style scoped>
</style>
