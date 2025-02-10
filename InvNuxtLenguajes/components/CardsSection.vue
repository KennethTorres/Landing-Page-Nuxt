<template>
    <div class="bg-gray-900 py-16">
      <div class="container mx-auto px-4 max-w-7xl">
        <!-- Título de la Sección -->
        <h2 class="text-3xl font-bold text-center text-white mb-10">Descubre Lugares Increíbles</h2>
  
        <!-- Contenedor de Tarjetas -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          <!-- Tarjeta 1 -->
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 w-full md:w-5/6 lg:w-full mx-auto"
          >
            <!-- Imagen -->
            <img :src="card.image" alt="Card Image" class="w-full h-64 object-cover" />
            <!-- Contenido -->
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white">{{ card.title }}</h3>
              <p class="text-sm text-gray-400 mt-2">{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Importar imágenes desde la carpeta assets
  import place1 from '@/assets/image/img1.png';
  import place2 from '@/assets/image/img2.jpg';
  import place3 from '@/assets/image/img3.jpg';
  import place4 from '@/assets/image/img4.jpg';
  
  export default {
    data() {
      return {
        cards: [
          {
            image: place1,
            title: 'Montañas Nevadas',
            description: 'Un lugar mágico para explorar la naturaleza.',
          },
          {
            image: place2,
            title: 'Playa Tropical',
            description: 'Relájate en las playas más hermosas del mundo.',
          },
          {
            image: place3,
            title: 'Ciudad Moderna',
            description: 'Descubre la vida urbana llena de energía.',
          },
          {
            image: place4,
            title: 'Bosque Encantado',
            description: 'Un refugio natural para desconectar del mundo.',
          },
        ],
      };
    },
  };
  </script>