<template>
    <div class="relative bg-cover bg-center h-screen flex items-center justify-center text-white" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
  
      <!-- Contenido -->
      <div class="relative z-10 container mx-auto px-4 text-center">
        <!-- Título y Descripción -->
        <h2 class="text-4xl sm:text-5xl font-bold mb-6">Contáctanos</h2>
        <p class="text-lg sm:text-xl mb-10">¿Tienes preguntas o deseas planificar tu próximo viaje? ¡Estamos aquí para ayudarte!</p>
  
        <!-- Formulario de Contacto -->
        <form class="max-w-md mx-auto space-y-4">
          <!-- Nombre -->
          <div>
            <input
              type="text"
              placeholder="Tu nombre"
              class="w-full px-4 py-3 rounded-md bg-gray-800 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <!-- Apellido -->
          <div>
            <input
              type="text"
              placeholder="Tu apellido"
              class="w-full px-4 py-3 rounded-md bg-gray-800 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <!-- Teléfono -->
          <div>
            <input
              type="tel"
              placeholder="Tu teléfono"
              class="w-full px-4 py-3 rounded-md bg-gray-800 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <!-- Email -->
          <div>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              class="w-full px-4 py-3 rounded-md bg-gray-800 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <!-- Mensaje -->
          <div>
            <textarea
              placeholder="Tu mensaje"
              rows="4"
              class="w-full px-4 py-3 rounded-md bg-gray-800 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
  
          <!-- Botón de Envío -->
          <button
            type="submit"
            class="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  // Importar imagen de fondo desde assets
  import backgroundImage from '@/assets/image/img6.png';
  
  export default {
    data() {
      return {
        backgroundImage: backgroundImage,
      };
    },
  };
  </script>