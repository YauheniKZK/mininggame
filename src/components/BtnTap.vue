<script setup lang="ts">
import WebApp from '@twa-dev/sdk';

const emit = defineEmits(['startCoding'])
const startCoding = () => {
  WebApp.HapticFeedback.impactOccurred('medium')
  emit('startCoding')
}

</script>

<template>
  <div class="flex flex-col justify-center items-center w-full">
    <div class="w-[100%] max-w-[200px] h-[200px] btn-animation relative flex justify-center items-center" @click="startCoding">
      <div class="text-center text-[20px] text-main-color flex justify-center flex-col items-center z-[3]">
        <span>{{ 'Start' }}</span>
        <span>{{ 'Coding' }}</span>
      </div>

    </div>
  </div>
</template>

<style scoped>

.btn-animation {
  z-index: 2;
}

.btn-animation::after {
    content: '';
    background: #000;
    position: absolute;
    border-radius: 50%;
    left: 0;
    width: 100%;
    top: 0;
    z-index: 1;
    height: 100%;
}

.btn-animation::before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: 1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 1;
    transition: opacity .3s ease-in-out;
    border-radius: 50%;
    
}
@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
</style>
