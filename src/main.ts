import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import { createPinia } from 'pinia'
const pinia = createPinia()
import WebApp from '@twa-dev/sdk'
import '@/assets/css/style.css'

WebApp.ready()

const app = createApp(App)

app.use(pinia)
app.use(naive)
app.mount('#app')
