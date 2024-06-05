<script setup lang="ts">
import { getImageUrl } from '@/utils/images';
</script>

<template>
  <div class="flex flex-col items-center w-full relative">
    <div class="flex justify-center items-center mb-[16px]">
      <span class="text-[#fff] text-[42px] leading-[36px]">{{ 'Referrals' }}</span>
    </div>
    <div class="flex flex-col color-block relative w-full">
      <div class="flex items-end w-full">
        <div class="item1"></div>
        <div class="item2"></div>
      </div>
      <div class="main-color-block w-full mb-[8px]">
        <div class="flex items-center absolute -right-[35px] -top-[12px]">
          <img :src="getImageUrl('img/arrow-right-bg.png')" alt="" class="h-[116px]" />
        </div>
        <div class="flex items-center">
          <span class="text-[20px] font-[400] mr-[8px]">{{ '+' }}</span>
          <span class="text-[26px] font-[600] mr-[8px]">{{ '$10' }}</span>
          <span class="text-[20px] font-[400]">{{ 'per friend' }}</span>
        </div>
        <div class="flex items-center">
          <span class="text-[20px] font-[400] mr-[8px]">{{ '+' }}</span>
          <span class="text-[26px] font-[600] mr-[8px]">{{ '$100' }}</span>
          <span class="text-[20px] font-[400]">{{ 'per friend premium' }}</span>
        </div>
      </div>
      <div class="flex items-center">
        <span class="text-[#fff] text-[16px]">{{ $t('invite_friends_text') }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-block .main-color-block {
  position: relative;
  background: #f4c543;
  padding: 8px 16px;
  clip-path: polygon(0px 0px, 0px 0px, 100% 0px, 100% calc(100% - 20px), calc(100% - 20px) 100%, -10% 100%);
}
.color-block .item1 {
  width: 60px;
  height: 16px;
  background: #f4c543;
  clip-path: polygon(30px 5px, 43px 0px, 130px 85px, 0 20px, 0 5px);
  margin-right: 40%;

}

.color-block .item2 {
  width: 30px;
  height: 8px;
  position: relative;
  background: #f4c543;
  clip-path: polygon(21% 0, 80% 0%, 100% 100%, 0% 100%);
}

.color-block::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 8px;
  background: #0c0c0c;
  left: calc(40% + 50px);
  top: 16px;
  z-index: 1;
  clip-path: polygon(0 0, 40% 100%, 100% 0);
}
</style>
