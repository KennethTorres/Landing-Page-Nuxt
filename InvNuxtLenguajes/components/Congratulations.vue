<template>
  <div
    v-if="visible"
    class="fixed inset-0 flex items-center justify-center z-50"
  >
    <!-- Fondo Semi-Transparente -->
    <div class="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>

    <!-- Contenido del Mensaje -->
    <div
      class="bg-gray-900 bg-opacity-90 p-8 rounded-3xl shadow-2xl text-center max-w-md mx-auto relative z-10 overflow-hidden border border-gray-700"
    >
      <div class="relative z-10">
        <!-- Título -->
        <h3 class="text-3xl font-bold mb-4 text-green-400">{{ title }}</h3>

        <!-- Mensaje de Agradecimiento -->
        <p class="text-gray-300 mb-6">
          ¡Gracias por contactarnos! Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.
        </p>

        <!-- Botón Cerrar -->
        <button
          @click="close"
          class="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-2 px-6 rounded-full hover:from-green-600 hover:to-green-700 transition duration-300 shadow-lg"
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

<style scoped>
/* Efecto de borde suave */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}
</style>