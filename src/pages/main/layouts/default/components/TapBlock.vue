<script setup lang="ts">
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
    <div class="btn-tap flex justify-center items-center">
      <div class="flex items-center text-[14px] text-[#fff]">
        <span>{{ 'Wake up...' }}</span>
        <span v-for="(char, index) in animatedText" :key="index">
          {{ char.char }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
  border-radius: 50%;
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
