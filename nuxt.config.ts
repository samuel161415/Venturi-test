// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt3-leaflet'
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','leaflet/dist/leaflet.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      GOOGLEMAPSAPIKEY: process.env.GOOGLEMAPSAPIKEY,
 
    },
  },
})
