// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss", // Módulo de TailwindCSS
  ],
  app: {
    pageTransition: {
      name: "page", // Nombre de la transición
      mode: "out-in", // Modo de transición
    },
  },
});
