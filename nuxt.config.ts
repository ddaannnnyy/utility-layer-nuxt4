// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-11-26',
  devtools: { enabled: true },
  modules: ["@nuxt/scripts", '@vueuse/nuxt', '@nuxt/test-utils/module'],
  runtimeConfig: {
    name: 'layer-utility',
    version: {
      version: 'v1.0.0',
      fatal: false,
      breakingChanges: false
    }
  }
})