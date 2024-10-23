// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/google-fonts'],
  runtimeConfig: {
    public: {
      apiBase: 'https://swapi.dev/api'
    }
  },
  colorMode: {
    classSuffix: ''
  },
  googleFonts: {
    families: {
      Nunito: [400, 700],
      'PT+Sans': [400, 700]
    },
    display: 'swap'
  }
})