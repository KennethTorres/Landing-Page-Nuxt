<template>
    <div
      v-if="visible"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <!-- Fondo Semi-Transparente -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
  
      <!-- Contenido del Mensaje -->
      <div
        class="bg-white bg-opacity-95 p-8 rounded-3xl shadow-2xl text-center max-w-md mx-auto relative z-10 overflow-hidden"
      >
        <div class="relative z-10">
          <!-- Título -->
          <h3 class="text-3xl font-bold mb-4 text-green-600">{{ title }}</h3>
  
          <!-- Mensaje de Agradecimiento -->
          <p class="text-gray-700 mb-6">
            ¡Gracias por contactarnos! Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.
          </p>
  
          <!-- Botón Cerrar -->
          <button
            @click="close"
            class="bg-green-600 text-white font-bold py-2 px-6 rounded-full hover:bg-green-700 transition duration-300"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: "¡Gracias por tu mensaje!",
      },
    },
    data() {
      return {
        visible: true,
      };
    },
    methods: {
      close() {
        this.visible = false;
        this.$emit("close");
      },
    },
  };
  </script>