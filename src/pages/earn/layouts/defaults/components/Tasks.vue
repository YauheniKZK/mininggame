<script setup lang="ts">
import { getImageUrl } from '@/utils/images';
import { ChevronForward } from '@vicons/ionicons5'
import ModalDialog from '@/components/ui/ModalDialog.vue';
import { ref } from 'vue';
import { CheckboxOutline } from '@vicons/ionicons5';

const showModal = ref(false)

const arrayDays = ref([
  {
    label: 'Day 1',
    isClaim: true,
    count: 1
  },
  {
    label: 'Day 2',
    isClaim: false,
    count: 3
  },
  {
    label: 'Day 3',
    isClaim: false,
    count: 8
  },
  {
    label: 'Day 4',
    isClaim: false,
    count: 14
  },
  {
    label: 'Day 5',
    isClaim: false,
    count: 20
  },
  {
    label: 'Day 6',
    isClaim: false,
    count: 50
  },
  {
    label: 'Day 7',
    isClaim: false,
    count: 100
  },
  {
    label: 'Day 8',
    isClaim: false,
    count: 500
  },
  {
    label: 'Day 9',
    isClaim: false,
    count: 1000
  },
  {
    label: 'Day 10',
    isClaim: false,
    count: 3000
  }
])

const tasks = ref([
  {
    label: 'Subscribe telegram channel',
    isClaim: false,
    count: 10
  },
  {
    label: 'Join X',
    isClaim: false,
    count: 5
  },
  {
    label: 'Change main stack',
    isClaim: false,
    count: 5
  },
  {
    label: 'Invite 3 friends',
    isClaim: false,
    count: 50
  }
])
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex justify-start items-center relative min-h-[170px] max-h-[170px] mb-[16px] bg-block">
      <div class="flex flex-col max-w-[55%] text-[#fff] relative z-[1]" style="text-shadow: rgb(77 77 77 / 19%) 3px 2px 0px;">
        <span class="text-[30px] leading-[20px] flex mb-[16px]">{{ 'Your tasks' }}</span>
        <span>{{ 'Complete tasks to earn more money and gain more skills' }}</span>
      </div>
      <!-- <div class="flex justify-center items-center w-[120px] min-w-[120px] h-[120px] rounded-[50%] relative bg-[#63636363]">
        <div class="flex w-full h-full overflow-hidden rounded-[50%]">
          <img :src="getImageUrl('img/bg-subrise.jpg')" class="object-cover" alt="" />
        </div>
        <div class="flex bg-cat"></div>
      </div> -->
      <img :src="getImageUrl('img/full-sunrise-cat4.png')" class="object-cover h-full absolute -right-[75px] top-0" alt="" />
    </div>
    <n-collapse class="tasks-collapse" accordion>
      <n-collapse-item name="1">
        <template #arrow>
          <n-icon :color="'#fff'" :size="22">
            <ChevronForward />
          </n-icon>
        </template>
        <template #header>
          <span class="text-[#fff] text-[16px]">{{ 'Daily tasks' }}</span>
        </template>
        <template #header-extra>
          <span class="text-[#48ede7c0] text-[14px]">{{ 'today: +5$' }}</span>
        </template>
        <div class="flex justify-between">
          <div class="flex flex-col w-[50%]">
            <n-timeline>
              <n-timeline-item type="success" :line-type="'dashed'">
                <template #header>
                  <span class="checkinday-title">{{ 'Day 1' }}</span>
                </template>
                <div class="flex items-center">
                  <span class="checkinday">{{ 'Day confirmed - ' }}</span>
                    <n-icon :color="'#f4c543'" :size="20" class="mx-[8px]">
                    <CheckboxOutline />
                  </n-icon>
                </div>
              </n-timeline-item>
              <n-timeline-item type="warning" :line-type="'dashed'">
                <template #header>
                  <span class="checkinday-title">{{ 'Day 2' }}</span>
                </template>
                <div class="flex flex-col">
                  <span class="checkinday mb-[4px]">{{ '+ 1$' }}</span>
                  <button class="btn z-[1]" @click="false">
                    <n-spin v-if="false" :size="24" :stroke="'#fff'" class="mr-[8px]" />
                    <span class="btn__content text-[#000] font-[600] text-[12px]">{{ 'Confirm day' }}</span>
                    <span class="btn__glitch"></span>
                    <span class="btn__label">day</span>
                  </button>
                </div>
              </n-timeline-item>
              <n-timeline-item type="info" :line-type="'dashed'">
                <template #header>
                  <span class="checkinday-title">{{ 'Day 3' }}</span>
                </template>
                <div class="flex flex-col">
                  <span class="checkinday">{{ '+ 2$' }}</span>
                </div>
              </n-timeline-item>
              <n-timeline-item type="info" :line-type="'dashed'">
                <template #header>
                  <span class="checkinday-title">{{ 'Day 4' }}</span>
                </template>
                <div class="flex flex-col">
                  <span class="checkinday">{{ '+ 5$' }}</span>
                </div>
              </n-timeline-item>
              <n-timeline-item type="info" :line-type="'dashed'">
                <template #header>
                  <span class="checkinday-title">{{ 'Day 5' }}</span>
                </template>
                <div class="flex flex-col">
                  <span class="checkinday">{{ '+ 10$' }}</span>
                </div>
              </n-timeline-item>
            </n-timeline>
          </div>
          <div class="flex flex-col w-[50%]">
            <n-timeline>
              <n-timeline-item type="info" :line-type="'dashed'">
                <template #header>
                  <span class="checkinday-title">{{ 'Day 6' }}</span>
                </template>
                <div class="flex flex-col">
                  <span class="checkinday">{{ '+ 20$' }}</span>
                </div>
              </n-timeline-item>
              <n-timeline-item type="info" :line-type="'dashed'">
                <template #header>
                  <span class="checkinday-title">{{ 'Day 7' }}</span>
                </template>
                <div class="flex flex-col">
                  <span class="checkinday">{{ '+ 50$' }}</span>
                </div>
              </n-timeline-item>
              <n-timeline-item type="info" :line-type="'dashed'">
                <template #header>
                  <span class="checkinday-title">{{ 'Day 8' }}</span>
                </template>
                <div class="flex flex-col">
                  <span class="checkinday">{{ '+ 100$' }}</span>
                </div>
              </n-timeline-item>
              <n-timeline-item type="info" :line-type="'dashed'">
                <template #header>
                  <span class="checkinday-title">{{ 'Day 9' }}</span>
                </template>
                <div class="flex flex-col">
                  <span class="checkinday">{{ '+ 500$' }}</span>
                </div>
              </n-timeline-item>
              <n-timeline-item type="info" :line-type="'dashed'">
                <template #header>
                  <span class="checkinday-title">{{ 'Day 10' }}</span>
                </template>
                <div class="flex flex-col">
                  <span class="checkinday">{{ '+ 1000$' }}</span>
                </div>
              </n-timeline-item>
            </n-timeline>
          </div>
        </div>
      </n-collapse-item>
      <n-collapse-item title="right" name="2">
        <template #arrow>
          <n-icon :color="'#fff'" :size="22">
            <ChevronForward />
          </n-icon>
        </template>
        <template #header>
          <span class="text-[#fff] text-[16px]">{{ 'Main tasks' }}</span>
        </template>
        <template #header-extra>
          <span class="text-[#48ede7c0] text-[14px]">{{ 'no new tasks' }}</span>
        </template>
        <div class="flex flex-col">
          <div
            v-for="(item, index) in tasks"
            :key="index"
            class="flex justify-between items-center mb-[8px] bg-[#496989] p-[8px] rounded-[8px]"
            style="box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
          > 
            <div class="flex items-center">
              <div class="w-[40px] min-w-[40px] h-[40px] rounded-[50%] mr-[16px] bg-[#414141]">

              </div>
              <div class="flex flex-col">
                <span class="text-[#ffffff9c] text-[14px] leading-[20px]">{{ item.label }}</span>
                <span class="text-[#dbdbdb] text-[18px] leading-[22px]">{{ item.count + ' $' }}</span>
              </div>
            </div>
            <div class="flex">
              <n-icon :color="'#fff'" :size="26">
                <ChevronForward />
              </n-icon>
            </div>
          </div>
        </div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<style scoped>
.checkinday {
  color: #fff;
  font-size: 14px;
}
.checkinday-title {
  color: #fff;
  font-size: 18px;
}
.bg-block {
  overflow: hidden;
  padding: 16px 0 16px 16px;
  clip-path: polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%);
  background: #5757579a;
}
.bg-cat {
  background: url('../../../../../assets/img/sunrise-cat.png') no-repeat bottom;
  background-size: cover;
  width: 147px;
  position: absolute;
  left: -1px;
  bottom: -7px;
  height: 153px;
  border-radius: 50%;
  background-position: -20px -7px;
  opacity: 0.9;
}

:root {
  --yellow-color: #fcee09; 
  --red-color: #ff003c;
  --black-color: #050a0e;
  --blue-color: #00f0ff;
  --white-color: #fafafa;
}

.btn {
  width: 110px;
  height: 24px;
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

.btn__glitch {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fcf0095d;
  filter: drop-shadow(-2px 3px #67e3f35b) drop-shadow(-1px -3px #02d7f37e) drop-shadow(2px 1px #02d7f363);
}

.btn.red .btn__glitch {
  background-color: var(--red-color);
}

.btn .btn__glitch,
.btn .btn__content::after,
.btn .btn__glitch,
.btn .btn__content::after {
  display: block;
}
</style>
