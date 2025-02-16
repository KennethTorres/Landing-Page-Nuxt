<template>
  <div>
    <!-- Modal de formulario -->
    <ModalForm v-if="isModalOpen" @close="closeModal" @submit="handleCommentSubmit" />
    <transition name="fade">
      <Alert v-if="showAlert" @close="hideAlert" />
    </transition>
    <section class="section p-8 bg-gray-100">
      <!-- Título -->
      <h2 class="text-3xl font-bold text-center text-white mb-8">
        Comentarios
      </h2>
      <!-- Botón para abrir el formulario -->
      <div class="flex justify-center mb-8">
        <button
          @click="openModal"
          class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Escribe tu Comentario.
        </button>
      </div>
      <!-- Contenedor de comentarios -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Bucle para mostrar comentarios -->
        <div
          v-for="(comment, index) in comments"
          :key="index"
          class="bg-white bg-opacity-80 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.03]"
        >
          <!-- Avatar y nombre -->
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4"
            >
              {{
                comment.nombre ? comment.nombre.charAt(0).toUpperCase() : "?"
              }}
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-800">
                {{ comment.nombre || "Desconocido" }}
                {{ comment.apellido || "" }}
              </h3>
              <p class="text-sm text-gray-500">
                {{ comment.ubicacion || "N/A" }}
              </p>
            </div>
          </div>
          <!-- Calificación -->
          <div class="flex items-center mb-4">
            <span class="text-yellow-500 mr-2">
              <svg
                v-for="star in parseInt(comment.calificacion) || 0"
                :key="star"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 display inline-block fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </span>
            <span class="text-gray-600"
              >{{ comment.calificacion || "0" }}/5</span
            >
          </div>
          <!-- Descripción -->
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
import { ref, onMounted } from "vue";
import ModalForm from "~/components/ModalForm.vue"; // Asegúrate de que este archivo existe
import Alert from "~/components/Alert.vue"; // Asegúrate de que este archivo existe
import {
  isModalOpen,
  comments,
  openModal,
  closeModal,
  addComment,
  loadCommentsFromLocalStorage,
} from "~/services/logica.js";

// Estado para controlar la visibilidad de la alerta
const showAlert = ref(false);

// Cargar comentarios desde localStorage al montar el componente
onMounted(() => {
  loadCommentsFromLocalStorage();
});

// Función para manejar el envío del comentario
const handleCommentSubmit = (formData) => {
  addComment(formData); // Agregar el comentario
  showAlert.value = true; // Mostrar la alerta
};

// Función para ocultar la alerta
const hideAlert = () => {
  showAlert.value = false;
};
</script>
<style scoped>
.section {
  /* Imagen de fondo */
  background-image: url("assets/image/fondo.jpg");
  background-size: cover; /* Cubre todo el espacio */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita repetición */
  background-color: #333; /* Color de respaldo si la imagen no carga */
  min-height: 100vh; /* Altura mínima de la pantalla */
}

/* Animación para la entrada de la alerta */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0; /* Completamente transparente */
  transform: scale(0.9); /* Ligeramente más pequeña */
}
</style>