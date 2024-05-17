<script setup lang="ts">
import TapBlockV3 from '@/components/TapBlockV3.vue';
import { ref, onMounted } from 'vue';

const firstWord = 'neo';
const secondWord = 'cat';
const chars = 'awkjbdawdihawlduhauiwgduyawgd';
const animatedText = ref([...firstWord].map(c => ({ char: c, isAnimating: false })));
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
          animatedText.value[index].char = char;
          clearInterval(interval);
          resolve();
        } else {
          animatedText.value[index].char = getRandomChar();
          frame++;
        }
      }, animationSpeed.value);
    });

    promises.push(promise);
  });

  Promise.all(promises).then(() => {
    if (secondWord.length < firstWord.length) {
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
  <div class="flex justify-center items-center w-full">
    <div class="btn-tap flex justify-center items-center" @click="showModal = true">
      <div class="flex items-center justify-center z-[1] text-[14px] text-[#fff] bg-[#1d1d1d] w-full h-full rounded-[50%]">
        <span>{{ 'Wake up...' }}</span>
        <span v-for="(char, index) in animatedText" :key="index">
          {{ char.char }}
        </span>
        <span class="cursor"></span>
      </div>
    </div>
    <n-modal v-model:show="showModal" transform-origin="center" class="rounded-[16px]">
      <div class="flex flex-col absolute top-[16px] left-[16px] w-[calc(100%-32px)] h-[calc(100%-32px)] rounded-[16px] before-block">
        <div class="flex flex-col w-full h-full bg-[#29442f] relative z-[2] rounded-[16px]">
          <TapBlockV3 @closeTaps="closeTapsEmit" />
        </div>
      </div>
    </n-modal>
  </div>
</template>

<style scoped>
.before-block::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(2px);
  border-radius: 16px;
  z-index: 1;
}
.btn-tap {
  --borderWidth: 3px;
  background: #1D1F20;
  position: relative;
  border-radius: 50%;
  width: 250px;
  height: 250px;
}
.btn-tap:after {
  content: '';
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  border-radius: calc(2 * var(--borderWidth));
  z-index: 0;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
  border-radius: 50%;
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
}


@keyframes animatedgradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
