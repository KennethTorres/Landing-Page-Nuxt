<template>
    <div
      v-if="visible"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        class="bg-white bg-opacity-95 p-8 rounded-3xl shadow-2xl text-center max-w-md mx-auto relative overflow-hidden"
      >
        <!-- Contenido principal -->
        <div class="relative z-10">
          <h3 class="text-3xl font-bold mb-4 text-green-600">{{ title }}</h3>
          <p class="text-gray-700 mb-6">
            Tu comentario ha sido agregado correctamente.
          </p>
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
        default: "¡Comentario agregado!",
      },
    },
    data() {
      return {
        visible: true, // Controla la visibilidad de la alerta
      };
    },
    methods: {
      close() {
        this.visible = false; // Oculta la alerta al hacer clic en el botón
        this.$emit("close"); // Emitir evento para informar al padre
      },
    },
  };
  </script>
  