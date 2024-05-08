

import { getUserService, registrationUserService, getLinkRefUserService, tapActionIncr, checkinUserService } from '@/services/tap.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useApplicationStore = defineStore('application', () => {
  // --------State---------

  const totalScore = ref(0)
  const miningTotalScore = ref(0)
  // const totalUserScore = ref(0)
  const currentUserData = ref<any>(null)
  const successCurrentUserData = ref(false)
  const loadingGetUser = ref(false)
  const loadingGetLinkRefUserService = ref(false)
  const successGetLinkRefUserService = ref(false)
  const referrals = ref<any>([])
  const lastCheckinUser = ref<any>(null)
  const currentCheckinUser = ref<any>(null)

  // --------Getters---------

  const currentUserDataGetters = computed(() => currentUserData.value)
  const totalScoreGetters = computed(() => totalScore.value)
  const totalUserScoreGetter = computed(() => currentUserDataGetters.value.balance)
  const loadingGetUserGetters = computed(() => loadingGetUser.value)
  const successCurrentUserDataGetters = computed(() => successCurrentUserData.value)
  const loadingGetLinkRefUserServiceGetters = computed(() => loadingGetLinkRefUserService.value)
  const successGetLinkRefUserServiceGetters = computed(() => successGetLinkRefUserService.value)
  const referralsGetters = computed(() => referrals.value)
  const lastCheckinUserGetters = computed(() => lastCheckinUser.value)
  const currentCheckinUserGetters = computed(() => currentCheckinUser.value)
  const miningTotalScoreGetters = computed(() => miningTotalScore.value)

  // --------Actions---------

  // async function actionGetTotalScore() {
  //   const res = await tapDataAction()
  //   if (res) {
  //     console.log('res', res)
  //     totalUserScore.value = res.data.balance || 0
  //   }
  // }

  async function actionGetUser(type: 'page' |'start' | 'mining') {
    successCurrentUserData.value = false
    if (type === 'start') {
      loadingGetUser.value = true
    }
    try {
      const res = await getUserService()
      if (res && res.data) {
        console.log('getUserService', res)
        currentUserData.value = res.data || null
        lastCheckinUser.value = res.data.checkin
        currentCheckinUser.value = res.data.server_time
        if (res.data.referrals) {
          referrals.value = res.data.referrals
        } else {
          referrals.value = []
        }
        if (type === 'mining') {
          miningTotalScore.value = 0
        }
        successCurrentUserData.value = true
      } else {
        successCurrentUserData.value = false
        lastCheckinUser.value = null
        currentCheckinUser.value = null
      }
      loadingGetUser.value = false
    } catch (error: any) {
      successCurrentUserData.value = false
      lastCheckinUser.value = null
      currentCheckinUser.value = null
      console.log('error', error?.response)
      if (error?.response.status === 419) {
        currentUserData.value = null
      }
      loadingGetUser.value = false
    }
  }

  async function actionMiningMoney(value: number) {
    try {
      const res = await tapActionIncr(value)
      if (res) {
        console.log('actionMiningMoney', res)
        // totalUserScore.value = res.data.balance || 0
      }      
    } catch (error) {
      console.log('error')
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

  async function actionCheckinUserService() {
    try {
      const res = await checkinUserService()
      if (res) {
        console.log('actionCheckinUserService', res)
        // totalUserScore.value = res.data.balance || 0
      }      
    } catch (error) {
      console.log('error')
    }
  }

  async function actionGetLinkRefUserService() {
    loadingGetLinkRefUserService.value = true
    successGetLinkRefUserService.value = false
    try {
      const res = await getLinkRefUserService()
      if (res && res.data) {
        console.log('actionGetLinkRefUserService', res)
        // totalUserScore.value = res.data.balance || 0
        loadingGetLinkRefUserService.value = false
        successGetLinkRefUserService.value = true
      } else {
        loadingGetLinkRefUserService.value = false
        successGetLinkRefUserService.value = false
      }
    } catch (error) {
      loadingGetLinkRefUserService.value = false
      successGetLinkRefUserService.value = false
      console.log('error')
    }
  }

  function updateTotalScore(value: number) {
    totalScore.value = value
  }

  function updateMiningTotalScore() {
    miningTotalScore.value++
  }

  function incrimentTotalScore() {
    const value = 1
    totalScore.value = totalScore.value + value
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
    resetUserData,
    actionGetLinkRefUserService,
    loadingGetLinkRefUserServiceGetters,
    successGetLinkRefUserServiceGetters,
    actionMiningMoney,
    referralsGetters,
    successCurrentUserDataGetters,
    actionCheckinUserService,
    lastCheckinUserGetters,
    currentCheckinUserGetters,
    incrimentTotalScore,
    miningTotalScoreGetters,
    updateMiningTotalScore
  }
})
