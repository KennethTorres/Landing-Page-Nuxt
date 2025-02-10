<template>
    <div class="bg-gray-900 py-16">
      <!-- Título del Componente -->
      <h2 class="text-3xl font-bold text-center text-white mb-10">Explora Nuestro Collage Abstracto</h2>
  
      <!-- Contenedor del Collage -->
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
          <!-- Imagen 1 -->
          <div
            v-for="(image, index) in images"
            :key="index"
            :class="[
              'relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105',
              image.size,
            ]"
          >
            <img :src="image.src" alt="Collage Image" class="w-full h-full object-cover" />
            <!-- Descripción en la Parte Inferior -->
            <div
              class="absolute bottom-4 left-4 text-white text-sm sm:text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {{ image.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Importar imágenes desde la carpeta assets
  import img1 from '@/assets/image/img1.png';
  import img2 from '@/assets/image/img2.jpg';
  import img3 from '@/assets/image/img3.jpg';
  import img4 from '@/assets/image/img4.jpg';
  import img5 from '@/assets/image/img5.jpg';
  import img6 from '@/assets/image/img6.png';
  import img7 from '@/assets/image/img7.png';
  import img8 from '@/assets/image/img8.jpg'; // Nueva imagen
  
  export default {
    data() {
      return {
        images: [
          {
            src: img1,
            description:
              'Un lugar mágico para explorar la naturaleza y desconectar del mundo.',
            size: 'col-span-1 row-span-2', // Imagen más alta
          },
          {
            src: img2,
            description:
              'Relájate en las playas más hermosas del mundo mientras disfrutas del sol.',
            size: 'col-span-1 row-span-1', // Imagen estándar
          },
          {
            src: img8, // Nueva imagen
            description:
              'Un viaje inolvidable por paisajes llenos de historia y cultura.',
            size: 'col-span-1 row-span-1', // Imagen estándar
          },
          {
            src: img3,
            description:
              'Descubre la vida urbana llena de energía y cultura moderna.',
            size: 'col-span-2 row-span-1', // Imagen más ancha
          },
          {
            src: img4,
            description:
              'Un refugio natural para desconectar del mundo y encontrar paz.',
            size: 'col-span-1 row-span-1', // Imagen estándar
          },
          {
            src: img5,
            description:
              'Experimenta la belleza de los paisajes montañosos y su tranquilidad.',
            size: 'col-span-1 row-span-1', // Imagen estándar
          },
          {
            src: img6,
            description:
              'Explora los secretos de la selva y su diversidad biológica.',
            size: 'col-span-1 row-span-2', // Imagen más alta
          },
          {
            src: img7,
            description:
              'Sumérgete en la cultura local y vive experiencias únicas.',
            size: 'col-span-2 row-span-1', // Imagen más ancha
          },
        ],
      };
    },
  };
  </script>