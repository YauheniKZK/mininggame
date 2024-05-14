import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import { createPinia } from 'pinia'
const pinia = createPinia()
import WebApp from '@twa-dev/sdk'
import i18n from './i18n'
import '@/assets/css/style.css'


WebApp.themeParams.section_header_text_color = '#FFFFFF'
WebApp.themeParams.secondary_bg_color = '#888888'
WebApp.themeParams.text_color = '#FFFFFF'
WebApp.themeParams.text_color = '#FFFFFF'
WebApp.setHeaderColor('#35374B')
WebApp.ready()

const app = createApp(App)

app.use(pinia)
app.use(naive)
app.use(i18n)
app.mount('#app')
