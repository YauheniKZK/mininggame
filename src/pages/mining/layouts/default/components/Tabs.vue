<script setup lang="ts">
const props = defineProps<{ valueTab: string }>()
import SkillItem from '@/components/skills/SkillItem.vue';
import ModalDialog from '@/components/ui/ModalDialog.vue';
import { TrendingUpOutline } from '@vicons/ionicons5';
import { ref } from 'vue';

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}

</script>

<template>
  <n-tabs
    class="w-full tabs-custom none-tab mb-[24px]"
    :value="props.valueTab"
    animated
    :pane-class="'h-full '"
    :pane-style="'padding-bottom: 60px'"
  >
    <n-tab-pane name="dev" tab="Dev" class="w-full">
      <div class="flex flex-wrap gap-[16px]">
        <SkillItem
          v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]"
          :title="'Title ' + item"
          :profit="42"
          :key="item"
          class="w-[calc(50%-8px)]"
          @click="openModal"
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
  <ModalDialog
    :show-modal="showModal"
    :width="'80%'"
    :max-width="'90%'"
    @close="showModal = false"
  >
    <template #content>
      <div class="flex pt-[8px]">
        <span class="text-[12px] text-[#fff]">{{ 'Upgrade your knowledge in C++ and reach a new level of software development' }}</span>
      </div>
      <div class="w-[150px] h-[1px] bg-[#63656661] my-[8px] z-[1]"></div>
      <div class="flex flex-col pt-[8px]">
        <n-timeline>
          <n-timeline-item type="success" :line-type="'dashed'">
            <template #header>
              <span class="tag">{{ 'C++' }}</span>
            </template>
          </n-timeline-item>
          <n-timeline-item type="warning" :line-type="'dashed'">
            <template #header>
              <div class="flex items-center">
                <span class="text-[#fff] text-[12px]">{{ 'level 5 ' }}</span>
                <n-icon :color="'#fff'" :size="16" class="mx-[8px]">
                  <TrendingUpOutline />
                </n-icon>
                <span class="text-[#fff] item-before-lvl relative">{{ ' level 6' }}</span>
              </div>
            </template>
          </n-timeline-item>
          <n-timeline-item type="info" :line-type="'dashed'">
            <template #header>
              <div class="flex items-center">
                <span class="text-[#fff] mr-[4px]">{{ '$/hour: ' }}</span>
                <span class="text-[#fff] item-before-profit relative">{{ ' +0.5$' }}</span>
              </div>
            </template>
          </n-timeline-item>
        </n-timeline>
        <div class="flex justify-end pt-[16px]">
          <div class="min-w-[100px] h-[34px] flex justify-center items-center rounded-[4px]" style="border: 2px solid #fbdd87;">
            <span class="text-[16px] text-[#fff]">{{ '3$ ' + ' Up' }}</span>
          </div>
        </div>
      </div>
    </template>
  </ModalDialog>
</template>

<style scoped>
.tag {
  display: inline-block;
  padding: 1px 8px;
  border-radius: 4px;
  background: #fee100;
  color: #000000;
  font-size: 14px;
}

.item-before-lvl::before,
.item-before-profit::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 30px;
  height: 20px;
}
</style>
