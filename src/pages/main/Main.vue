<script setup lang="ts">
// import TapBlockV2 from '@/components/TapBlockV2.vue';
// import UserNameAvatar from '@/components/user/UserNameAvatar.vue';
// import UserSetting from '@/components/user/UserSetting.vue';
// import UserLevel from '@/components/user/UserLevel.vue';
// import BtnTap from '@/components/BtnTap.vue';
import { useApplicationStore } from '@/stores/application/applicationStore';
import { storeToRefs } from 'pinia';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import MainDefault from './layouts/default/MainDefault.vue';

const appStore = useApplicationStore()
const { showModalSettingGetters } = storeToRefs(appStore)

// const handlebtn = () => {
//   WebApp.showAlert(`Hello World! Current count is `)
// }
const show = ref(false)
// const startCoding = ref(false)

// const startCodingEmit = () => {
//   startCoding.value = !startCoding.value
// }

onMounted(() => {
  show.value = !show.value
})

onBeforeUnmount(() => {
  show.value = !show.value
})

</script>

<template>
  <div class="flex flex-col w-full">
    <MainDefault />
    <!-- <transition name="slide-up">
      <div v-if="!startCoding" class="flex flex-col w-full">
        <div class="flex items-center gap-[16px] justify-between w-full mb-[24px]">
          <div class="max-w-[120px] min-w-[120px]">
            <transition name="bounce">
              <UserNameAvatar v-if="show" class="animation-block" :name="currentUserDataGetters.first_name" />
            </transition>
          </div>
          <div class="flex-grow max-w-[250px]">
            <transition name="bounce-right">
              <UserLevel v-if="show" :balance="currentUserDataGetters.balance" />
            </transition>
          </div>
        </div>
        <UserSetting class="mb-[32px]" />
        <BtnTap @startCoding="startCodingEmit" />
      </div>
      <TapBlockV2 v-else-if="startCoding" @closeTaps="startCoding = false" />
    </transition> -->
    <!-- <div class="flex justify-center items-center w-full mb-[24px]">
      <TotalScore />
    </div>
    <div class="flex justify-center">
      <TapBlock />
    </div> -->
    <Transition name="slide-up">
      <div v-if="showModalSettingGetters" id="containerForOptions" class="flex flex-col mb-[12px]" >
        <div class="flex mb-[24px]">
          <span class="text-[18px] text-main-color">{{ $t('SETTING') }}</span>
        </div>
        <div class="flex flex-col mb-[12px]">
          <ThemeOptions />
        </div>
        <div class="flex flex-col">
          <StackOptions />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(-100vh);
}

.slide-up-leave-to {
  opacity: 1;
  transform: translateY(0);
}




.bounce-enter-active, .bounce-leave-active {
  transition: left 0.3s, transform 0.3s; /* Анимация для входа и выхода */
}

.bounce-enter-from, .bounce-leave-to {
  left: -400px;
  transform: translateX(-50px); /* Начальное положение и отпрыгивание */
}

.bounce-enter-to, .bounce-leave-from {
  left: 0;
  transform: translateX(0); /* Конечное положение после отпрыгивания */
}

.bounce-right-enter-active, .bounce-right-leave-active {
  transition: right 0.3s, transform 0.3s; /* Анимация для входа и выхода */
}

.bounce-right-enter-from, .bounce-right-leave-to {
  right: -400px;
  transform: translateX(50px); /* Начальное положение и отпрыгивание */
}

.bounce-right-enter-to, .bounce-right-leave-from {
  right: 0;
  transform: translateX(0); /* Конечное положение после отпрыгивания */
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
