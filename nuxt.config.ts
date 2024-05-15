// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "~/assets/scss/_main.scss" as *;'
  //       }
  //     }
  //   }
  // },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})