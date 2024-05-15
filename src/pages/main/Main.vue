<script setup lang="ts">
// import TapBlockV2 from '@/components/TapBlockV2.vue';
// import UserNameAvatar from '@/components/user/UserNameAvatar.vue';
// import UserSetting from '@/components/user/UserSetting.vue';
// import UserLevel from '@/components/user/UserLevel.vue';
// import BtnTap from '@/components/BtnTap.vue';
// import { useApplicationStore } from '@/stores/application/applicationStore';
// import { storeToRefs } from 'pinia';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import MainDefault from './layouts/default/MainDefault.vue';

// const appStore = useApplicationStore()
// const { currentUserDataGetters } = storeToRefs(appStore)

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
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
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
