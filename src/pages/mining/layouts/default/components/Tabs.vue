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
                <span class="text-[#fff] item-before-lvl relative z-0">{{ ' level 6' }}</span>
              </div>
            </template>
          </n-timeline-item>
          <n-timeline-item type="info" :line-type="'dashed'">
            <template #header>
              <div class="flex items-center">
                <span class="text-[#fff] mr-[4px]">{{ '$/hour: ' }}</span>
                <span class="text-[#fff] item-before-profit relative z-0">{{ ' +0.5$' }}</span>
              </div>
            </template>
          </n-timeline-item>
        </n-timeline>
        <div class="flex justify-end">
          <div class="w-[150px] h-[1px] bg-[#63656661] my-[16px] z-[1]"></div>
        </div>
        <div class="flex justify-end">
          <div class="flex items-center">
            <span class="text-[20px] mr-[40px] font-[600] text-[#fff] relative price-before z-[1]">
              {{ '3' }}
              <sup>{{ '$' }}</sup>
            </span>
            <div class="min-w-[80px] h-[34px] flex justify-center items-center rounded-[4px] btn-item">
              
              <span class="text-[16px] text-[#fff]">{{ 'Up' }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </ModalDialog>
</template>

<style scoped>
.price-before {
  text-shadow: rgb(0 0 0 / 44%) 0px 3px 8px;
}
.price-before::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 36px;
  right: -19px;
  z-index: -1;
  top: -3px;
  background: #5f5f5f;
  transform: skew(-25deg);
}
/* .price-before::after {
  content: "";
  position: absolute;
  width: 21px;
  height: 30px;
  z-index: -1;
  right: 0px;
  top: 0;
  background: linear-gradient(270deg, #fee100, #fee100 8%, #fee10000);
  transform: skew(-25deg);
} */
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
  content: "";
  position: absolute;
  left: 15px;
  top: 0px;
  width: 40px;
  height: 20px;
  z-index: -1;
  transform: skew(-20deg, 0deg);
}

.item-before-lvl::before {
  background: #f0a02094;
}

.item-before-profit::before {
  background: #2080f0;
}

.btn-item {
  --border-radius: 8px;
  --border-width: 2px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  padding: 4px 16px;
  border: 0;
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}

.btn-item::after {
	--m-i: linear-gradient(#000, #000);
	--m-o: content-box, padding-box;

	content: "";
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	padding: var(--border-width);
	border-radius: var(--border-radius);
	background-image: conic-gradient(
		#488cfb,
		#29dbbc,
		#ddf505,
		#ff9f0e,
		#e440bb,
		#655adc,
		#488cfb
	);

	mask-image: var(--m-i), var(--m-i);
	mask-origin: var(--m-o);
	mask-clip: var(--m-o);
	mask-composite: exclude;
	-webkit-mask-composite: destination-out;

	filter: hue-rotate(0);
	animation: hue linear 1000ms infinite;
	animation-play-state: running;
}

@keyframes hue {
	to {
		filter: hue-rotate(1turn);
	}
}


</style>
