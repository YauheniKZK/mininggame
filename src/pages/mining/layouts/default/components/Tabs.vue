<script setup lang="ts">
import SkillItem from '@/components/skills/SkillItem.vue';

</script>

<template>
  <n-tabs type="segment" class="w-full tabs-custom mb-[24px]" animated>
    <n-tab-pane name="dev" tab="Dev" class="w-full">

    </n-tab-pane>
    <n-tab-pane name="soft" tab="Soft Skills" class="w-full">
      <span class="text-[#fff]">{{ 'Hard SKills' }}</span>
      <div class="flex flex-col gap-[16px]">
        <SkillItem
          v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]"
          :title="'Title'"
          :profit="42"
          :key="item"
          class="mb-[16px]"
        />
      </div>
    </n-tab-pane>
    <n-tab-pane name="media" tab="Media" class="w-full">
      <span class="text-[#fff]">{{ 'Hard SKills' }}</span>
    </n-tab-pane>
    <n-tab-pane name="experience" tab="Experience" class="w-full">
      <span class="text-[#fff]">{{ 'Hard SKills' }}</span>
    </n-tab-pane>
    <n-tab-pane name="pets" tab="Pets" class="w-full">
      <span class="text-[#fff]">{{ 'Hard SKills' }}</span>
    </n-tab-pane>
  </n-tabs>
</template>

<style scoped>

</style>
