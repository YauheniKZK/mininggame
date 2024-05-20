import api from '@/api/api'
import { Config } from '@/config'
import { ThemeApp } from '@/stores/application/applicationStore'
import WebApp from '@twa-dev/sdk'

export const getUserService = async () => {
    if (WebApp) {
        const url = `${Config.REST_SERVER}/mining/user`
        const res = await api.get(url)
        console.log('res', res)    
        return res
    }
}

export const registrationUserService = async () => {
    if (WebApp) {
        const url = `${Config.REST_SERVER}/mining/start`
        const res = await api.get(url)
        console.log('res', res)    
        return res
    }
}

export const tapActionIncr = async (value: number) => {
    if (WebApp) {
        const url = `${Config.REST_SERVER}/mining/taps/increment/${value}`
        const res = await api.get(url)
        console.log('res', res)    
        return res
    }
}

export const getLinkRefUserService = async () => {
    if (WebApp) {
        const url = `${Config.REST_SERVER}/referral/link`
        const res = await api.get(url)
        console.log('res', res)    
        return res
    }
}

export const getStackCategories = async () => {
    if (WebApp) {
        const url = `${Config.REST_SERVER}/stacks/categories`
        const res = await api.get(url)
        console.log('res', res)    
        return res
    }
}

export const chooseThemeApp = async (theme: ThemeApp) => {
    if (WebApp) {
        const url = `${Config.REST_SERVER}/player/theme/${theme}`
        const res = await api.get(url)
        console.log('res', res)    
        return res
    }
}

export const addMainStack = async (stack_id: number) => {
    if (WebApp) {
        const url = `${Config.REST_SERVER}/stacks/add-main/${stack_id}`
        const res = await api.get(url)
        console.log('res', res)    
        return res
    }
}

export const levelCheck = async () => {
    if (WebApp) {
        const url = `${Config.REST_SERVER}/levels/check`
        const res = await api.get(url)
        console.log('res', res)    
        return res
    }
}

export const syncCheck = async () => {
    if (WebApp) {
        const url = `${Config.REST_SERVER}/sync`
        const res = await api.get(url)
        console.log('res', res)    
        return res
    }
}

export const syncTapClaim = async () => {
    if (WebApp) {
        const url = `${Config.REST_SERVER}/mining/passive-earn`
        const res = await api.get(url)
        console.log('res', res)    
        return res
    }
}