<script setup lang="ts">
const props = defineProps<{ valueTab: string }>()
import SkillItem from '@/components/skills/SkillItem.vue';
import ModalDialog from '@/components/ui/ModalDialog.vue';
import { TrendingUpOutline } from '@vicons/ionicons5';
import { ref, watch } from 'vue';
import { Fireworks } from '@fireworks-js/vue'
import type { FireworksOptions } from '@fireworks-js/vue'


const fw = ref<InstanceType<typeof Fireworks>>()
const options = ref<FireworksOptions>({ opacity: 0.5 })

async function startFireworks() {
  if (!fw.value) return
  fw.value.start()
  await new Promise((resolve) => setTimeout(resolve, 1000))
  await fw.value.waitStop()
}

// watch(fw, () => startFireworks())

const showModal = ref(false)
const loading = ref(false)

const update = async () => {
  loading.value = true
  setTimeout(async () => {
    loading.value = false
    await startFireworks()
  }, 1500)
}

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
    <n-tab-pane name="Dev" tab="Dev" class="w-full">
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
    <n-tab-pane name="Soft" tab="Soft Skills" class="w-full">
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
    <n-tab-pane name="Media" tab="Media" class="w-full">
      <span class="text-[#fff]">{{ 'Media experience' }}</span>
    </n-tab-pane>
    <n-tab-pane name="Experience" tab="Experience" class="w-full">
      <span class="text-[#fff]">{{ 'Experience work' }}</span>
    </n-tab-pane>
    <n-tab-pane name="Pets" tab="Pets" class="w-full">
      <span class="text-[#fff]">{{ 'Pets project' }}</span>
    </n-tab-pane>
  </n-tabs>
  <ModalDialog
    :show-modal="showModal"
    :width="'80%'"
    :max-width="'90%'"
    @close="showModal = false"
  >
    <template #content>
      <div class="flex flex-col w-full relative">
        <div class="top-block"></div>
        <div class="bottom-block"></div>
        <div class="flex pt-[8px]">
          <span class="text-[14px] text-[#fff]">{{ 'Upgrade your knowledge in C++ and reach a new level of software development' }}</span>
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
          <div class="flex items-center w-full">
            <div class="flex justify-center items-center pr-[16px] min-w-[42px] h-[42px]">
              <span class="text-[28px] font-[600] text-[#fff] leading-[42px] relative z-[1]">
                {{ '3' }}
                <sup>{{ '$' }}</sup>
              </span>
            </div>
            <button class="btn z-[1]" @click="update">
              <n-spin v-if="loading" :size="24" :stroke="'#fff'" class="mr-[8px]" />
              <span class="btn__content text-[#000] font-[600]">{{ 'Upgrade' }}</span>
              <span class="btn__label">up</span>
            </button>
          </div>
          <Fireworks
            ref="fw"
            :autostart="false"
            :options="options"
            :style="{
              top: 0,
              left: 0,
              zIndex: 0,
              width: '100%',
              height: '100%',
              position: 'absolute'
            }"
          />
        </div>
      </div>

    </template>
  </ModalDialog>
</template>

<style scoped>
.top-block {
  position: absolute;
  top: -43px;
  left: -16px;
  width: calc(100% + 32px);
  height: 8px;
  background: #faebd729;
  background-image: repeating-linear-gradient(45deg, #f4c543, #f4c543 30px, #050a0e 30px, #050a0e 60px);
}

.bottom-block {
  position: absolute;
  bottom: -35px;
  left: -16px;
  width: calc(100% + 32px);
  height: 8px;
  background: #faebd729;
  background-image: repeating-linear-gradient(45deg, #f4c543, #f4c543 30px, #050a0e 30px, #050a0e 60px);
}
.price-before {
  text-shadow: rgb(0 0 0 / 44%) 0px 3px 8px;
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

:root {
  --yellow-color: #fcee09; 
  --red-color: #ff003c;
  --black-color: #050a0e;
  --blue-color: #00f0ff;
  --white-color: #fafafa;
}

.btn {
  max-width: 100%;
  flex-grow: 1;
  height: 42px;
  border: 0;
  outline: none;
  background: var(--yellow-color);
  cursor: pointer;
  position: relative;
  font-family: Tomorrow, sans-serif;
  font-size: .85rem;
  text-transform: uppercase;
  color: var(--black-color);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
}

.btn__content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background: var(--yellow-color);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
}

.btn--secondary {
  background-color: var(--white-color);
}

.btn.red .btn__content {
  background-color: var(--red-color);
  color: var(--white-color);
}

.btn__label {
  font-size: .40rem;
  position: absolute;
  bottom: -1px;
  right: 8%;
  padding: 0 5px;
  background-color: var(--yellow-color);
  z-index: 3;
  border-left: 1px solid var(--blue-color);
}

.btn.red .btn__label {
  background-color: var(--white-color);
  color: var(--black-color);
}


.btn .btn__glitch,
.btn .btn__content::after,
.btn .btn__glitch,
.btn .btn__content::after {
  display: block;
}



</style>
