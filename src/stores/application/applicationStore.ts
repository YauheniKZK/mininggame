

import { tapDataAction } from '@/services/tap.service'
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



  return {
    totalScoreGetters,
    updateTotalScore,
    actionGetTotalScore,
    totalUserScoreGetter
  }
})
