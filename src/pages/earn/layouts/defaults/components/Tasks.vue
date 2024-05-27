<script setup lang="ts">
import { getImageUrl } from '@/utils/images';

</script>

<template>
  <div class="flex flex-col">
    <n-collapse>
      <n-collapse-item title="Da" name="1">
        <template #header>
          <span>{{ 'Daily tasks' }}</span>
        </template>
        <template #header-extra>
          <span>{{ 'today: +5$' }}</span>
        </template>
        <div class="flex">
          <span>{{ 'Tasks' }}</span>
        </div>
      </n-collapse-item>
      <n-collapse-item title="right" name="2">
        <template #header>
          <span>{{ 'Main tasks' }}</span>
        </template>
        <template #header-extra>
          <span>{{ 'no new tasks' }}</span>
        </template>
        <div class="flex">
          <span>{{ 'Tasks' }}</span>
        </div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<style scoped>
</style>
