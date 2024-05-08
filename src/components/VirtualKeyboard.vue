<script setup lang="ts">
import { onMounted, ref } from 'vue';

// import { useApplicationStore } from '@/stores/application/applicationStore';
// import { getImageUrl } from '@/utils/images';
// import { storeToRefs } from 'pinia';
// import { onMounted } from 'vue';

//const appStore = useApplicationStore()
// const { totalScoreGetters, totalUserScoreGetter } = storeToRefs(appStore)
const canvaskeyboard = ref()
const tapBlockContainerR = ref()

// const inputField: any = document.getElementById('inputField')
// const buttonWidth = 60;
// const buttonHeight = 40;
// const buttonMargin = 10
// const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]{}/.$'.split('')
// const buttons: any = []

onMounted(() => {
  if (canvaskeyboard.value) {
    const ctx = canvaskeyboard.value.getContext('2d');
    ctx.imageSmoothingEnabled = true
    let buttons: any = [];

    function resizeCanvas() {
        canvaskeyboard.value.width = tapBlockContainerR.value.clientWidth;
        canvaskeyboard.value.height = tapBlockContainerR.value.clientWidth / 2;
        drawKeyboard();
    }

    function drawButton(x: any, y: any, width: any, height: any, text: any, isPressed: any) {
        ctx.fillStyle = isPressed ? '#666' : '#ccc';
        ctx.fillRect(x, y, width, height);
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, x + width / 2, y + height / 2);
    }

    function drawKeyboard() {
        buttons = []; // Reset buttons array
        const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
        const buttonWidth = tapBlockContainerR.value.clientWidth / 13;
        const buttonHeight = buttonWidth * 0.6;
        const buttonMargin = 10;
        const keysPerRow = Math.floor(canvaskeyboard.value.width / (buttonWidth + buttonMargin));
        let x = buttonMargin;
        let y = buttonMargin;

        keys.forEach((key, index) => {
            if (index % keysPerRow === 0 && index !== 0) {
                y += buttonHeight + buttonMargin;
                x = buttonMargin;
            }
            buttons.push({ key, x, y, width: buttonWidth, height: buttonHeight, isPressed: false });
            drawButton(x, y, buttonWidth, buttonHeight, key, false);
            x += buttonWidth + buttonMargin;
        });
    }

    function getButtonAtPosition(x: any, y: any) {
        return buttons.find((button: any) => 
            x >= button.x && x <= button.x + button.width &&
            y >= button.y && y <= button.y + button.height
        );
    }

    canvaskeyboard.value.addEventListener('touchstart', function(event: any) {
        const touch = event.changedTouches[0]
        const rect = canvaskeyboard.value.getBoundingClientRect();
        const mouseX = Math.round(touch.clientX - rect.left);
        const mouseY = Math.round(touch.clientY - rect.top);
        const button = getButtonAtPosition(mouseX, mouseY);
        if (button) {
            button.isPressed = true;
            drawButton(button.x, button.y, button.width, button.height, button.key, true);
        }
    });

    canvaskeyboard.value.addEventListener('touchend', function() {
        buttons.forEach((button: any) => {
            if (button.isPressed) {
                button.isPressed = false;
                drawButton(button.x, button.y, button.width, button.height, button.key, false);
            }
        });
    });

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();     
  }
})
</script>

<template>
  <div ref="tapBlockContainerR" class="flex flex-col w-full">
    <canvas ref="canvaskeyboard"></canvas>
  </div>
</template>

<style>
</style>
