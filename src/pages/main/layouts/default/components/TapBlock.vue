<script setup lang="ts">
import TapBlockV3 from '@/components/TapBlockV3.vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { ref, onMounted } from 'vue';

const appStore = useApplicationStore()
const { currentUserDataGetters, maxTapsGetters, availableTapsGetters, earnPerTapGettersFront } = storeToRefs(appStore)
const firstWord = ref(currentUserDataGetters.value?.first_name || 'neo');
const secondWord = 'DevCat';
const chars = 'TAS%_%%]/_:{_([|]%!?><,=%#<(C';
const animatedText = ref([...firstWord.value].map(c => ({ char: c, isAnimating: false })));
const animationSpeed = ref(100); // Настройте скорость анимации здесь (в миллисекундах)


const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];

const animate = () => {
  const promises: any = [];

  secondWord.split('').forEach((char, index) => {
    let frame = 0;
    const frames = Math.floor(Math.random() * 15) + 5;

    const promise = new Promise<void>(resolve => {
      const interval = setInterval(() => {
        if (frame === frames) {
          if (animatedText.value[index]?.char) {
            animatedText.value[index].char = char;
            clearInterval(interval);
            resolve();
          }
       
        } else {
          if (animatedText.value[index]?.char) {
            animatedText.value[index].char = getRandomChar();
            frame++;
          }
        }
      }, animationSpeed.value);
    });

    promises.push(promise);
  });

  Promise.all(promises).then(() => {
    if (secondWord.length < firstWord.value.length) {
      animatedText.value.length = secondWord.length;
    }
  });
};

const showModal = ref(false)

const closeTapsEmit = () => {
  showModal.value = false
}

onMounted(() => {
  setTimeout(() => {
    animate()
  }, 2000)
  setInterval(() => {
    animate()
  }, 10000)
});
</script>

<template>
  <div class="flex flex-col w-full container-block">
    <div class="flex w-full mb-[16px]">
      <div class="flex items-center block-style1">
        <span class="text-[14px] text-[#fbdd87]">{{ 'Term-001' }}</span>
      </div>
      <div class="flex items-center block-style2">
        <span class="text-[14px] text-[#fbdd87]">{{ '$/tap:' }}</span>
        <span class="text-[#fff] text-[14px]">{{ ' ' + earnPerTapGettersFront + '$' }}</span>
      </div>
      <div class="flex items-center block-style2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fbdd87" viewBox="0 0 24 24">
          <path d="M13 2L3 14h8v8l10-12h-8z"></path>
        </svg>
        <span class="text-[14px] text-[#fbdd87]">{{ ':' }}</span>
        <span class="text-[#fff] text-[14px]">{{ availableTapsGetters + '/' + maxTapsGetters }}</span>
      </div>
    </div>
    <div class="flex items-center gap-[16px] mb-[16px]">
      <div class="flex text-custom z-[1] p-[16px] text-[16px] term-style flex-grow text-[#fff] w-full h-full">
        <span>{{ '> Wake up...' }}</span>
        <span v-for="(char, index) in animatedText" :key="index">
          {{ char.char }}
        </span>
        <span class="cursor"></span>
      </div>
      <div
        class="flex justify-center flex-col items-center w-[70px] h-[70px] p-[4px] min-w-[70px] rounded-[4px] btn-open"
        style="background-color: rgb(26, 255, 128, 0.75);"
        @click="showModal = true"
      >
        <span class="text-[12px] uppercase text-[#000]">{{ 'Open' }}</span>
        <span class="text-[12px] uppercase text-[#000]">{{ 'cat-pad' }}</span>
      </div>
    </div>
    <div class="flex flex-col w-full p-[16px] relative rounded-[4px]" style="border: 1px solid #fbdd87;">
      <span class="text-[14px] text-[#fbdd87] infomation-span">{{ 'brief of day' }}</span>
      <div class="flex w-full items-center mb-[4px]">
        <span class="text-[12px] text-[#000] bg-[#1aff80bf] font-[600] p-[0_12px_0_8px]">{{ 'devcat online' }}</span>
        <div class="grow mx-[6px] relative top-[4px]" style="border: 1px dotted #fbdd87"></div>
        <span class="text-[12px] text-[#fbdd87]">{{ '105 000' }}</span>
      </div>
      <div class="flex w-full items-center mb-[4px]">
        <span class="text-[12px] text-[#000] bg-[#1aff80bf] font-[600] p-[0_12px_0_8px]">{{ 'available task' }}</span>
        <div class="grow mx-[6px] relative top-[4px]" style="border: 1px dotted #fbdd87"></div>
        <span class="text-[12px] text-[#fbdd87]">{{ '3' }}</span>
      </div>
      <div class="flex w-full items-center mb-[4px]">
        <span class="text-[12px] text-[#000] bg-[#1aff80bf] font-[600] p-[0_12px_0_8px]">{{ 'new events' }}</span>
        <div class="grow mx-[6px] relative top-[4px]" style="border: 1px dotted #fbdd87"></div>
        <span class="text-[12px] text-[#fbdd87]">{{ '2' }}</span>
      </div>
      <div class="flex w-full items-center">
        <span class="text-[12px] text-[#000] bg-[#1aff80bf] font-[600] p-[0_12px_0_8px]">{{ 'new skills' }}</span>
        <div class="grow mx-[6px] relative top-[4px]" style="border: 1px dotted #fbdd87"></div>
        <span class="text-[12px] text-[#fbdd87]">{{ '1' }}</span>
      </div>
    </div>
    <n-modal v-model:show="showModal" transform-origin="center" class="rounded-[16px]">
      <div class="flex flex-col absolute top-[16px] left-[16px] w-[calc(100%-32px)] h-[calc(100%-32px)] rounded-[16px] before-block">
        <div class="flex flex-col w-full h-full bg-[#29442f] relative z-[2] rounded-[16px]">
          <TapBlockV3
            @closeTaps="closeTapsEmit"
            :earnPerTapGettersFront="earnPerTapGettersFront"
            :availableTapsGetters="availableTapsGetters"
            :maxTapsGetters="maxTapsGetters"
          />
        </div>
      </div>
    </n-modal>
  </div>
</template>

<style scoped>
.text-custom {
  font-family: "Share Tech Mono", monospace, system-ui;
  text-shadow: 0 0 .25rem rgb(26, 255, 128), 0 0 1rem rgb(26, 255, 128);
}
.container-block {
  padding: 12px;
  border-radius: 16px;
  background: #373c41;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  min-height: 380px;
}
.block-style1 {
  border-top: 2px solid #fbdd87;
  border-right: 2px solid #fbdd87;
  border-radius: 4px;
  min-height: 22px;
  padding: 0 4px;
  min-width: 90px;
  position: relative;
  margin-right: 4px;
  flex-grow: 1;
}
.block-style1 span {
  background: #373c41;
  padding: 0 4px;
  position: absolute;
  left: 9px;
  top: -10px;
  text-shadow: 0 0 .25rem rgb(26, 255, 128), 0 0 1rem rgb(26, 255, 128);
}

.infomation-span {
  background: #373c41;
  padding: 0 4px;
  position: absolute;
  left: 9px;
  top: -13px;
}
.block-style2 {
  border-top: 2px solid #fbdd87;
  border-right: 2px solid #fbdd87;
  border-radius: 4px;
  min-height: 22px;
  padding: 0 4px;
  position: relative;
  margin-right: 4px;
}
.block-style2 span {
  padding: 0 4px;
  text-shadow: 0 0 .25rem rgb(26, 255, 128), 0 0 1rem rgb(26, 255, 128);
}

.btn-open {
  border: 1px solid #fbdd87;
  font-weight: 700;
  cursor: pointer;
}

.term-style {
  border: 1px solid #fbdd87;
  border-radius: 4px;
  min-height: 70px
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.cursor {
  display: inline-block;
  width: 6px;
  height: 1em;
  background-color: #e7e0e09a;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
  position: relative;
  top: 4px;
}

</style>
