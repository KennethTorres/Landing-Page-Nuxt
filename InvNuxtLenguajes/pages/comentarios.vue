<template>
  <div>
    <!-- Encabezado -->
    <header
      class="header bg-blue-600 text-white py-4 px-6 flex justify-between items-center"
    >
      <NuxtLink to="/" class="text-xl font-bold hover:text-blue-300">
        Mi Página
      </NuxtLink>
      <button
        @click="openModal"
        class="bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-gray-200"
      >
        Abrir Formulario
      </button>
    </header>

    <!-- Modal de formulario -->
    <ModalForm v-if="isModalOpen" @close="closeModal" @submit="addComment" />

    <!-- Sección de comentarios -->
    <section class="p-8 bg-gray-100">
      <h2 class="text-2xl font-bold mb-6 text-center">Comentarios</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Bucle para mostrar comentarios -->
        <div
          v-for="comment in comments"
          :key="comment.id"
          class="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
        >
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4"
            >
              {{
                comment.nombre ? comment.nombre.charAt(0).toUpperCase() : "?"
              }}
            </div>
            <div>
              <h3 class="text-lg font-bold">
                {{ comment.nombre || "Desconocido" }}
                {{ comment.apellido || "" }}
              </h3>
              <p class="text-sm text-gray-500">
                {{ comment.ubicacion || "N/A" }}
              </p>
            </div>
          </div>
          <div class="flex items-center mb-4">
            <span class="text-yellow-500 mr-2">
              <svg
                v-for="star in parseInt(comment.calificacion) || 0"
                :key="star"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </span>
            <span class="text-gray-600">
              {{ comment.calificacion || "0" }}/5
            </span>
          </div>
          <p class="text-gray-700">
            {{ comment.descripcion || "Sin descripción." }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Importaciones
import {
  isModalOpen,
  comments,
  openModal,
  closeModal,
  addComment,
  loadCommentsFromLocalStorage,
} from "~/services/logica.js";
import { onMounted } from "vue";

// Cargar comentarios desde localStorage al montar el componente
onMounted(() => {
  loadCommentsFromLocalStorage();
});
</script>

<style scoped>
.header {
  background-image: url("assets/image/fondo.jpg");
}
</style>
