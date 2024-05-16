<script setup lang="ts">
import { ref, onMounted } from 'vue';

const phrases = ['cat', 'neo'];
const currentPhrase = ref(phrases[0]);
const animatedText = ref(currentPhrase.value);
const chars = '!<>-_\\/[]{}—=+*^?#________';
let charIndex = 0;
let phraseIndex = 0;

const scramble = (from: string | any[], to: string | any[]) => {
  let text = '';
  for (let i = 0; i < from.length || i < to.length; i++) {
    if (i < from.length && (i < charIndex || Math.random() < 0.5)) {
      text += from[i];
    } else if (i < to.length) {
      text += to[i];
    } else {
      text += chars[Math.floor(Math.random() * chars.length)];
    }
  }
  return text;
};

const update = () => {
  animatedText.value = scramble(currentPhrase.value, phrases[phraseIndex]);

  if (charIndex < phrases[phraseIndex].length) {
    charIndex++;
    setTimeout(update, 50);
  } else if (phraseIndex < phrases.length - 1) {
    phraseIndex++;
    charIndex = 0;
    setTimeout(update, 1500);
  }
};

onMounted(() => {
  setTimeout(update, 1500);
});
</script>

<template>
  <div class="flex justify-center items-center w-full">
    <div class="btn-tap flex justify-center items-center">
      <span class="text-[#fff]">
        {{ animatedText }}
      </span>
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
