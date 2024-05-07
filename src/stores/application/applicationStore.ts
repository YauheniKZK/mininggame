

import { getUserService, registrationUserService } from '@/services/tap.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useApplicationStore = defineStore('application', () => {
  // --------State---------

  const totalScore = ref(0)
  const totalUserScore = ref(0)
  const currentUserData = ref<any>(null)
  const loadingGetUser = ref(false)

  // --------Getters---------

  const currentUserDataGetters = computed(() => currentUserData.value)
  const totalScoreGetters = computed(() => totalScore.value)
  const totalUserScoreGetter = computed(() => totalUserScore.value)
  const loadingGetUserGetters = computed(() => loadingGetUser.value)

  // --------Actions---------

  // async function actionGetTotalScore() {
  //   const res = await tapDataAction()
  //   if (res) {
  //     console.log('res', res)
  //     totalUserScore.value = res.data.balance || 0
  //   }
  // }

  async function actionGetUser(type: 'page' |'start') {
    if (type === 'start') {
      loadingGetUser.value = true
    }
    try {
      const res = await getUserService()
      if (res && res.data) {
        console.log('getUserService', res)
        currentUserData.value = res.data || null
      }
      loadingGetUser.value = false
    } catch (error: any) {
      console.log('error', error?.response)
      if (error?.response.status === 419) {
        currentUserData.value = null
      }
      loadingGetUser.value = false
    }
  }

  async function actionRegistrationUser() {
    try {
      const res = await registrationUserService()
      if (res) {
        console.log('registrationUserService', res)
        // totalUserScore.value = res.data.balance || 0
      }      
    } catch (error) {
      console.log('error')
    }
  }

  function updateTotalScore(value: number) {
    totalScore.value = value
  }

  function resetUserData() {
    currentUserData.value = null
  }

  return {
    totalScoreGetters,
    updateTotalScore,
    // actionGetTotalScore,
    totalUserScoreGetter,
    actionGetUser,
    actionRegistrationUser,
    currentUserDataGetters,
    loadingGetUserGetters,
    resetUserData
  }
})
