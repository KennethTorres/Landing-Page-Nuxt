<template>
    <div class="bg-gray-900 py-16">
      <div class="container mx-auto px-4 max-w-7xl">
        <!-- Título de la Sección -->
        <h2 class="text-3xl font-bold text-center text-white mb-10">Descubre Lugares Increíbles</h2>
  
        <!-- Contenedor de Tarjetas -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 justify-center">
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
  import place1 from '@/assets/image/img1.jpg';
  import place2 from '@/assets/image/img2.jpg';
  import place3 from '@/assets/image/img3.jpg';
  import place4 from '@/assets/image/img4.jpg';
  import place5 from '@/assets/image/img5.jpg';
  
  export default {
    data() {
      return {
        cards: [
          {
            image: place1,
            title: 'Montañas Salvajes',
            description: 'Un paisaje alpino con un lago cristalino y bosque de coníferas.',
          },
          {
            image: place2,
            title: 'Catedral Histórica',
            description: 'Arquitectura icónica con un puente moderno y perspectiva urbana.',
          },
          {
            image: place3,
            title: 'Fiordo Noruego',
            description: 'Tranquilidad natural con botes tradicionales y montañas imponentes.',
          },
          {
            image: place4,
            title: 'Refugio Silencioso',
            description: 'Un hogar solitario rodeado de aguas tranquilas y paisaje montañoso.',
          },
          {
            image: place5,
            title: 'El Coliseo de Roma',
            description: 'Viaja en el tiempo y descubre la majestuosidad del Coliseo.',
          },
        ],
      };
    },
  };
  </script>