<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
      <span
        @click="$emit('close')"
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer text-2xl"
        >&times;</span
      >
      <h2 class="text-2xl font-bold mb-4">Formulario de Comentarios</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="nombre" class="block text-sm font-medium text-gray-700"
            >Nombre:</label
          >
          <input
            type="text"
            id="nombre"
            v-model="formData.nombre"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label for="apellido" class="block text-sm font-medium text-gray-700"
            >Apellido:</label
          >
          <input
            type="text"
            id="apellido"
            v-model="formData.apellido"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label for="ubicacion" class="block text-sm font-medium text-gray-700"
            >Ubicación:</label
          >
          <input
            type="text"
            id="ubicacion"
            v-model="formData.ubicacion"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            for="calificacion"
            class="block text-sm font-medium text-gray-700"
            >Calificación:</label
          >
          <select
            id="calificacion"
            v-model="formData.calificacion"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label
            for="descripcion"
            class="block text-sm font-medium text-gray-700"
            >Descripción del Comentario:</label
          >
          <textarea
            id="descripcion"
            v-model="formData.descripcion"
            rows="4"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nombre: "",
        apellido: "",
        ubicacion: "",
        calificacion: "",
        descripcion: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      console.log("Datos del formulario antes de emitir:", this.formData);
      this.$emit("submit", { ...this.formData });
      this.$emit("close");
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        nombre: "",
        apellido: "",
        ubicacion: "",
        calificacion: "",
        descripcion: "",
      };
    },
  },
};
</script>
