<script setup lang="ts">
import { ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
// import WebApp from '@twa-dev/sdk'
// import TotalScore from './components/TotalScore.vue';
// import TapBlock from './components/TapBlock.vue';
import SkillItem from '@/components/skills/SkillItem.vue'
// WebApp.setHeaderColor
// const handlebtn = () => {
//   WebApp.showAlert(`Hello World! Current count is `)
// }

const skills = ref([
  {
    id: 0,
    title: 'C#',
    profit: 11.5
  },
  {
    id: 1,
    title: 'C++',
    profit: 25.50
  },
  {
    id: 2,
    title: 'PHP',
    profit: 23.10
  },
  {
    id: 3,
    title: 'JS',
    profit: 19.40
  }
])

</script>

<template>
  <div class="flex flex-col items-center w-full">
    <n-tabs type="segment" class="w-full tabs-custom mb-[24px]" animated>
      <n-tab-pane name="hard" tab="Hard SKills" class="w-full">
        <div class="flex w-full flex-wrap gap-[12px]">
          <SkillItem
            v-for="sk in skills"
            :key="sk.id"
            :title="sk.title"
            :profit="sk.profit"
            class="mb-[12px]"
          />
        </div>
        
      </n-tab-pane>
      <n-tab-pane name="soft" tab="Soft Skills" class="w-full">
        <span class="text-[#fff]">{{ 'Hard SKills' }}</span>
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
