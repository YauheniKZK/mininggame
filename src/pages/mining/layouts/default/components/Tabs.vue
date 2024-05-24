<script setup lang="ts">
const props = defineProps<{ valueTab: string }>()
import SkillItem from '@/components/skills/SkillItem.vue';

</script>

<template>
  <n-tabs
    class="w-full tabs-custom none-tab mb-[24px]"
    :value="props.valueTab"
    animated
    :pane-class="'h-full pb-[60px]'"
  >
    <n-tab-pane name="dev" tab="Dev" class="w-full">
      <div class="flex flex-wrap gap-[16px]">
        <SkillItem
          v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]"
          :title="'Title ' + item"
          :profit="42"
          :key="item"
          class="w-[calc(50%-8px)]"
        />
      </div>
    </n-tab-pane>
    <n-tab-pane name="soft" tab="Soft Skills" class="w-full">
      <div class="flex flex-wrap gap-[16px]">
        <SkillItem
          v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]"
          :title="'Title ' + item"
          :profit="42"
          :key="item"
          class="w-[calc(50%-8px)]"
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
