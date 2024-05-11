<script setup lang="ts">
// import { getImageUrl } from '@/utils/images';
import { ref } from 'vue';

const textGeneratedRef = ref<any>()
const textGenerated = ref('')
function generateMatrixSymbol() {
  const characters = 'абвгде ёж зийкл м нопр сту фхц чшщъыьэюяA BCDEFGHIJKLMNOPQ RSTUVWXYZ 123 4567890';
  return characters.charAt(Math.floor(Math.random() * characters.length));
}
const whiteText = () => {
  const symbol = generateMatrixSymbol()
  textGenerated.value += symbol
  textGeneratedRef.value.textContent = textGenerated.value
}
</script>

<template>
  <div class="flex flex-col relative">
    <div class="flex mb-[24px] overflow-hidden relative">
      <div class="screen rounded-[16px]">
        <n-scrollbar style="max-height: 260px">
          <p ref="textGeneratedRef" class="break-words">{{ textGenerated }}</p>
        </n-scrollbar>
      </div>
    </div>
    <div class="w-full h-[260px] flex justify-center items-center rounded-[16px] bg-slate-500" @click="whiteText">
      {{ 'Taps' }}
    </div>
  </div>
</template>

<style scoped>
.screen {
  animation:colorPulse 5s infinite ease-in-out;
  background-image:radial-gradient(#444, #111);
  box-shadow:0 0 5vmin 1vmin #000 inset;
  box-sizing:border-box;
  font-family:'Fira Mono', monospace;
  font-size:14px;
  height:20vh;
  overflow:hidden;
  padding: 20px;
  width:100vw;
}

.screen:before {
  animation:wave 10s infinite ease-in-out;
  content:"";
  height:20vh;
  left:0;
  opacity:.5;
  position:absolute;
  right:0;
  z-index:1;
}

.screen:after {
  background-image:linear-gradient(transparent, transparent 3px, #222);
  background-size:4px 4px;
  bottom:0;
  content:"";
  left:0;
  pointer-events:none;
  position:absolute;
  right:0;
  top:0;
  z-index:2;
}

p:last-child:after {
  animation:blink 1s infinite;
  content:"_";
}

@keyframes colorPulse {
  0%, 100% {
    color:#0c0;
  }
  48%, 52% {
    color:#090;
  }
  50% {
    color:#060;
  }
}

@keyframes wave {
  0% {
    box-shadow:0 -10vh 20vh #0c0;
    top:-100vh;
  }
  48%, 52% {
    box-shadow:0 -10vh 20vh #090;
  }
  50% {
    box-shadow:0 -10vh 20vh #060;
  }
  100% {
    box-shadow:0 -10vh 20vh #0c0;
    top:200vh;
  }
}

@keyframes blink {
  50% {
    opacity:0;
  }
}
</style>
