<template>
  <div class="text flex flex-col">
    
    <div class="flex items-center">
      <span>{{ 'Wake up...' }}</span>
      <span v-for="(char, index) in animatedText" :key="index">
        {{ char.char }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const firstWord = 'neo';
const secondWord = 'cat';
const chars = 'awkjbdawdihawlduhauiwgduyawgd';
const animatedText = ref([...firstWord].map(c => ({ char: c, isAnimating: false })));
const animationSpeed = ref(100); // Настройте скорость анимации здесь (в миллисекундах)

const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];

const animate = () => {
  const promises = [];

  secondWord.split('').forEach((char, index) => {
    let frame = 0;
    const frames = Math.floor(Math.random() * 15) + 5;

    const promise = new Promise(resolve => {
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

<style scoped>
.text {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}
</style>