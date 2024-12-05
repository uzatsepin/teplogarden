import PocketBase from 'pocketbase'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  
  if (!config.public.apiBase) {
    console.error('API Base URL not configured')
    throw new Error('API Base URL not configured')
  }

  const pb = new PocketBase(config.public.apiBase)

  return {
    provide: {
      pb: pb
    }
  }
})