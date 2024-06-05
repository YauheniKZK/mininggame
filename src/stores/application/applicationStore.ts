

import {
  getUserService,
  registrationUserService,
  getLinkRefUserService,
  tapActionIncr,
  checkinUserService,
  getStackCategories,
  chooseThemeApp,
  addMainStack,
  levelCheck,
  syncCheck,
  syncTapClaim,
  getStacksMain
} from '@/services/tap.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export type ThemeApp = 'default' | 'dev1'

export const useApplicationStore = defineStore('application', () => {
  // --------State---------

  const totalScore = ref(0)
  const miningTotalScore = ref(0)
  const totalUserScore = ref(0)
  const currentUserData = ref<any>(null)
  const isActiveUser = ref<any>(false)
  const successCurrentUserData = ref(false)
  const loadingGetUser = ref(false)
  const loadingGetLinkRefUserService = ref(false)
  const successGetLinkRefUserService = ref(false)
  const referrals = ref<any>([])
  const lastCheckinUser = ref<any>(null)
  const currentCheckinUser = ref<any>(null)
  const isTaping = ref(false)
  const currentThemeApp = ref<ThemeApp>('default')
  const optionsThemeApp = ref<ThemeApp[]>([
    'default',
    'dev1'
  ])
  const allStacksApp = ref([])


  const mainBalanceUser = ref(0)
  const earnPassivePerSec = ref(0)
  const earnPassivePerHour = ref(0)
  const currentUserLevel = ref('BEGINNER')
  const mainStacks = ref<{ id: number, title: string }[]>([])
  const availableTaps = ref(0)
  const earnPerTap = ref(0)

  const successfullSyncTapClaim = ref(false)

  const showModalSetting = ref(false)
  const showModalRating = ref(false)
  const showMiningSystem = ref(false)

  const skillsTab = ref('')

  // --------Getters---------

  const currentUserDataGetters = computed(() => currentUserData.value)
  const isActiveUserGetters = computed(() => isActiveUser.value)
  const totalScoreGetters = computed(() => totalScore.value)
  const totalUserScoreGetter = computed(() => totalUserScore.value)
  const loadingGetUserGetters = computed(() => loadingGetUser.value)
  const successCurrentUserDataGetters = computed(() => successCurrentUserData.value)
  const loadingGetLinkRefUserServiceGetters = computed(() => loadingGetLinkRefUserService.value)
  const successGetLinkRefUserServiceGetters = computed(() => successGetLinkRefUserService.value)
  const referralsGetters = computed(() => referrals.value)
  const lastCheckinUserGetters = computed(() => lastCheckinUser.value)
  const currentCheckinUserGetters = computed(() => currentCheckinUser.value)
  const miningTotalScoreGetters = computed(() => miningTotalScore.value)
  const isTapingGetters = computed(() => isTaping.value)
  const currentThemeAppGetters = computed(() => currentThemeApp.value)
  const optionsThemeAppGetters = computed(() => optionsThemeApp.value)
  const allStacksAppGetters = computed(() => allStacksApp.value)
  const maxTapsGetters = computed(() => currentUserData.value?.max_taps || 0)


  const mainBalanceUserGetters = computed(() => mainBalanceUser.value)
  const earnPassivePerSecGetters = computed(() => earnPassivePerSec.value)
  const successfullSyncTapClaimGetters = computed(() => successfullSyncTapClaim.value)
  const earnPassivePerHourGetters = computed(() => earnPassivePerHour.value)
  const currentUserLevelGetters = computed(() => currentUserLevel.value)
  const mainStacksGetters = computed(() => mainStacks.value)
  const availableTapsGetters = computed(() => availableTaps.value)
  const earnPerTapGetters = computed(() => earnPerTap.value)

  const earnPerTapGettersFront = computed(() => {
    if (earnPerTapGetters.value) {
      return earnPerTapGetters.value > 0 ? Number(Number(earnPerTapGetters.value / 100).toFixed(2)) : 0
    } else {
      return 0
    }
  })
  
  const showModalSettingGetters = computed(() => showModalSetting.value)
  const showModalRatingGetters = computed(() => showModalRating.value)
  const showMiningSystemGetters = computed(() => showMiningSystem.value)

  const skillsTabGetters = computed(() => skillsTab.value)
  

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
        isActiveUser.value = res.data.is_active
        lastCheckinUser.value = res.data.checkin
        currentCheckinUser.value = res.data.server_time
        currentThemeApp.value = res.data.theme || 'default'

        mainBalanceUser.value = res.data.balance
        earnPassivePerSec.value = res.data.earn_passive_per_sec
        earnPassivePerHour.value = res.data.earn_passive_per_hour
        currentUserLevel.value = res.data.level
        availableTaps.value = res.data.available_taps
        earnPerTap.value = res.data.earn_per_tap
        if (res.data.referrals) {
          referrals.value = res.data.referrals
        } else {
          referrals.value = []
        }
        if (type === 'mining') {
          miningTotalScore.value = 0
        }
        totalUserScore.value = res.data.balance
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
      const res = await syncCheck()
      if (res?.data && res?.status === 200) {
        console.log('actionCheckinUserService', res)
        // totalUserScore.value = res.data.balance || 0
        mainBalanceUser.value = res.data.balance
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

  async function actionGetStackCategories() {
    try {
      const res = await getStackCategories()
      if (res) {
        console.log('getStackCategories', res)
        allStacksApp.value = res.data
        // totalUserScore.value = res.data.balance || 0
      }      
    } catch (error) {
      console.log('error')
    }
  }

  async function actionChooseThemeApp(theme: ThemeApp) {
    try {
      const res = await chooseThemeApp(theme)
      if (res?.data) {
        switchThemeApp(theme)
        console.log('chooseThemeApp', res)
        // totalUserScore.value = res.data.balance || 0
      }      
    } catch (error) {
      console.log('error')
    }
  }

  async function actionAddMainStack(stack_id: number) {
    try {
      const res = await addMainStack(stack_id)
      if (res?.data) {
        console.log('chooseThemeApp', res)
        // totalUserScore.value = res.data.balance || 0
      }      
    } catch (error) {
      console.log('error')
    }
  }

  async function actionLevelCheck() {
    try {
      const res = await levelCheck()
      if (res?.data) {
        console.log('chooseThemeApp', res)
        // totalUserScore.value = res.data.balance || 0
      }      
    } catch (error) {
      console.log('error')
    }
  }

  async function actionSyncTapClaim() {
    successfullSyncTapClaim.value = false
    try {
      const res = await syncTapClaim()
      if (res?.data && res?.status === 200) {
        console.log('syncTapClaim', res)
        // totalUserScore.value = res.data.balance || 0
        successfullSyncTapClaim.value = true
      } else {
        successfullSyncTapClaim.value = false
      }  
      
    } catch (error) {
      successfullSyncTapClaim.value = false
      console.log('error')
    }
  }

  async function actionGetStacksMain() {
    successfullSyncTapClaim.value = false
    try {
      const res = await getStacksMain()
      if (res?.data && res?.status === 200) {
        console.log('getStacksMain', res)
        mainStacks.value = res.data
      }
      
    } catch (error) {
      console.log('error')
    }
  }

  function minusAvailableTaps () {
    if (availableTaps.value <= 0) {
      return false
    } else {
      availableTaps.value -= 1
    }
  }

  function plusAvailableTaps () {
    if (availableTaps.value < maxTapsGetters.value && availableTaps.value >= 0) {
      availableTaps.value += 1
    } else {
      return false
    }
  }

  function startPassiveEarn (value: number) {
    mainBalanceUser.value += value
  }


  function updateTotalScore(value: number) {
    totalScore.value = value
  }

  function updateMiningTotalScore() {
    miningTotalScore.value++
  }

  function resetMiningTotalScore() {
    miningTotalScore.value = 0
  }

  function incrimentTotalScore() {
    const value = 1
    totalScore.value = totalScore.value + value
  }

  function resetUserData() {
    currentUserData.value = null
  }

  function actionIsTaping(status: boolean) {
    isTaping.value = status
  }

  function switchThemeApp(theme: ThemeApp) {
    currentThemeApp.value = theme
  }

  function switchModalSetting() {
    showModalSetting.value = !showModalSetting.value
  }

  function switchModalRating() {
    showModalRating.value = !showModalRating.value
  }

  function switchModalMiningSystem(bol: boolean) {
    showMiningSystem.value = bol
  }

  function setSkillsTab(name: string) {
    skillsTab.value = name
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
    updateMiningTotalScore,
    actionIsTaping,
    isTapingGetters,
    resetMiningTotalScore,
    actionGetStackCategories,
    currentThemeAppGetters,
    switchThemeApp,
    optionsThemeAppGetters,
    actionChooseThemeApp,
    allStacksAppGetters,
    actionAddMainStack,
    actionLevelCheck,
    maxTapsGetters,
    availableTapsGetters,
    earnPerTapGetters,
    actionSyncTapClaim,
    successfullSyncTapClaimGetters,
    startPassiveEarn,
    earnPassivePerSecGetters,
    mainBalanceUserGetters,
    earnPassivePerHourGetters,
    currentUserLevelGetters,
    actionGetStacksMain,
    mainStacksGetters,
    earnPerTapGettersFront,
    minusAvailableTaps,
    plusAvailableTaps,
    showModalSettingGetters,
    switchModalSetting,
    showModalRatingGetters,
    switchModalRating,
    showMiningSystemGetters,
    switchModalMiningSystem,
    skillsTabGetters,
    setSkillsTab,
    isActiveUserGetters
  }
})
