<script setup lang="ts">
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { ChevronForward } from '@vicons/ionicons5'
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin)
const appStore = useApplicationStore()
const { currentUserDataGetters } = storeToRefs(appStore)
const firstWord = ref('');
const secondWord = 'DevCat';
const chars = 'TAS%_%%]/_:{_([|]%!?><,=%#<(C';
const animatedText = ref([...firstWord.value].map(c => ({ char: c, isAnimating: false })));
const animationSpeed = ref(100); // Настройте скорость анимации здесь (в миллисекундах)

const versionApp = import.meta.env.PACKAGE_VERSION



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

const textAnimated = ref()



onMounted(() => {
  if (textAnimated.value) {
    gsap.to(textAnimated.value, {duration: 3, text: `Wake up...`})
  }
  setTimeout(() => {
    firstWord.value = currentUserDataGetters.value?.first_name || 'DevCat'
    animatedText.value = [...firstWord.value].map(c => ({ char: c, isAnimating: false }))
    animate()
  }, 3000)
  setInterval(() => {
    animate()
  }, 10000)
});

</script>

<template>
  <div class="flex items-center justify-between w-full pb-[16px]">
    <div class="flex text-custom z-[1] text-[16px] relative term-style flex-grow text-[#fff] w-full h-full">
      <div class="line"></div>
      <n-icon :color="'#f4c543'" :size="20" class="mr-[4px]">
        <ChevronForward />
      </n-icon>
      <span class="text-[#f4c543] absolute left-[12px] top-[0px]">{{ '_' }}</span>
      <div ref="textAnimated"></div>
      <span v-for="(char, index) in animatedText" :key="index">
        {{ char.char }}
      </span>
      <span class="cursor"></span>
    </div>
    <div class="flex min-w-[50px] h-[20px] items-center justify-end text-[#ffffff4d] text-[12px] pr-[8px]" style="border-right: 2px solid #ffffff70;">
      <span>{{ 'v.' + versionApp }}</span>
    </div>
  </div>
</template>

<style scoped>
.line {
  position: absolute;
  left: 0;
  top: 35px;
  height: 1px;
  width: 100%;
  background: #ffffff3b;
}

.line::before {
  content: '';
  width: 4px;
  height: 4px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: #ffffff3b;
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
