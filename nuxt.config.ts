// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig:{
    public: {
      apiKey: process.env.FIRE_API_KEY,
    }
  },
  css: ["@/assets/sass/style.sass"],
})
