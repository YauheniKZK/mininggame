import { createI18n } from 'vue-i18n'
import { Config } from './config'

function loadLocaleMessages() {
  const locales = import.meta.glob('@/locales/*.json')
  const messages = {}
  for (const path in locales) {
    locales[path]().then((mod) => {
      const array = path.split('/')
      const lanFile = array[array.length - 1]
      const lanFileName = lanFile.split('.')
      Object.assign(messages, { [lanFileName[0]]: mod })
    })
  }
  return messages
}
export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('locale')
    ? localStorage.getItem('locale')
    : Config.I18N_LOCALE || 'en',
  fallbackLocale: localStorage.getItem('locale')
    ? localStorage.getItem('locale')
    : Config.I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})
