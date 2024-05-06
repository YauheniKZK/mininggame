

import { getUserService, tapDataAction } from '@/services/tap.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useApplicationStore = defineStore('application', () => {
  // --------State---------

  const totalScore = ref(0)
  const totalUserScore = ref(0)

  // --------Getters---------

  const totalScoreGetters = computed(() => totalScore.value)
  const totalUserScoreGetter = computed(() => totalUserScore.value)

  // --------Actions---------

  function updateTotalScore(value: number) {
    totalScore.value = value
  }

  async function actionGetTotalScore() {
    const res = await tapDataAction()
    if (res) {
      console.log('res', res)
      totalUserScore.value = res.data.balance || 0
    }
  }

  async function actionGetUser() {
    try {
      const res = await getUserService()
      if (res) {
        console.log('getUserService', res)
        totalUserScore.value = res.data.balance || 0
      }      
    } catch (error) {
      console.log('error')
    }
  }

  return {
    totalScoreGetters,
    updateTotalScore,
    actionGetTotalScore,
    totalUserScoreGetter,
    actionGetUser
  }
})
