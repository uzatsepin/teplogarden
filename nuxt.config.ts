// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE
    }
  },
  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    'vue3-carousel-nuxt',
    '@nuxt/icon',
    '@pinia/nuxt',
  ],
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "~/assets/scss/helpers/_vars.scss" as *;'
        }
      }
    }
  },
  fonts: {
    families: [
      {
        name: 'Cygre',
        local: true,
        src: [
          { path: '~/assets/fonts/Cygre-Regular.woff2', weight: 400 },
          { path: '~/assets/fonts/Cygre-SemiBold.woff2', weight: 600 },
          { path: '~/assets/fonts/Cygre-Black.woff2', weight: 900 },
        ]
      },
      {
        name: 'Rubik',
        provider: 'google'
      }
    ]
  },
})