import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { fileURLToPath, URL } from 'node:url'
import { dirname, resolve } from 'path'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mininggame/',
  plugins: [
    vue(),
    basicSsl(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), '../locales')
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'import.meta.env.PACKAGE_VERSION': JSON.stringify(packageJson.version)
  }
})
