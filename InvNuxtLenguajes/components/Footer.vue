<template>
  <footer class="bg-gray-900 text-white py-12 px-8 md:px-24 lg:px-32">
    <!-- Contenido Principal -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Columna 1: Navegación -->
      <div>
        <h4 class="text-lg font-bold mb-4">Navigation</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-blue-500 transition-colors duration-300">Home</a></li>
          <li><a href="#" class="hover:text-blue-500 transition-colors duration-300">About Us</a></li>
          <li><a href="#" class="hover:text-blue-500 transition-colors duration-300">Services</a></li>
          <li><a href="#" class="hover:text-blue-500 transition-colors duration-300">Contact Us</a></li>
        </ul>
      </div>

      <!-- Columna 2: Servicios -->
      <div>
        <h4 class="text-lg font-bold mb-4">Services</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-blue-500 transition-colors duration-300">Service 1</a></li>
          <li><a href="#" class="hover:text-blue-500 transition-colors duration-300">Service 2</a></li>
          <li><a href="#" class="hover:text-blue-500 transition-colors duration-300">Service 3</a></li>
        </ul>
      </div>

      <!-- Columna 3: Suscripción y Redes Sociales -->
      <div>
        <h4 class="text-lg font-bold mb-4">Stay Connected</h4>
        <p class="text-gray-400 mb-4">Subscribe to our newsletter for updates.</p>
        <form @submit.prevent="subscribe" class="flex space-x-2">
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-2 border border-gray-700 bg-gray-800 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
          <button
            type="submit"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
        <div class="mt-6 flex space-x-4">
          <a href="#" class="hover:text-blue-500 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 2v20m0 0l6-6m-6 6L6 18"
              />
            </svg>
          </a>
          <a href="#" class="hover:text-blue-500 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 2c-5.523 0-10 4.477-10 10v10h20V12c0-5.523-4.477-10-10-10z"
              />
            </svg>
          </a>
          <a href="#" class="hover:text-blue-500 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 2c5.523 0 10 4.477 10 10v10H2V12c0-5.523 4.477-10 10-10z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Línea divisoria -->
    <hr class="border-gray-700 my-8" />

    <!-- Derechos de Autor -->
    <div class="text-center text-gray-400 text-sm">
      &copy; 2025 InvNuxtLenguajes. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script setup>
// Función para manejar la suscripción
const subscribe = () => {
  alert("Thank you for subscribing!");
};
</script>

<style scoped>
/* Espaciado global */
.py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.md\:px-24 {
  padding-left: 6rem;
  padding-right: 6rem;
}

.lg\:px-32 {
  padding-left: 8rem;
  padding-right: 8rem;
}

/* Transiciones */
.transition-colors {
  transition-property: color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}
</style>