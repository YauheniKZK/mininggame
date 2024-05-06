import api from '@/api/api'
import { Config } from '@/config'
import WebApp from '@twa-dev/sdk'

export const tapDataAction = async () => {
    if (WebApp) {
        const url = `${Config.REST_SERVER}/mining/taps`
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