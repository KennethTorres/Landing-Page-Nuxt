<template>
  <div class="bg-gray-900 py-16">
    <!-- Título del Componente -->
    <h2 class="text-3xl font-bold text-center text-white mb-10">Explora Nuestro Collage Abstracto</h2>

    <!-- Contenedor del Collage -->
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
        <!-- Elemento Dinámico -->
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="[
            'relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105',
            item.size,
          ]"
        >
          <!-- Video -->
          <video
            v-if="item.type === 'video'"
            :src="item.src"
            autoplay
            loop
            muted
            class="w-full h-full object-cover"
          ></video>

          <!-- Imagen -->
          <img
            v-else
            :src="item.src"
            alt="Collage Image"
            class="w-full h-full object-cover"
          />

          <!-- Descripción en la Parte Inferior -->
          <div
            class="absolute bottom-4 left-4 text-white text-sm sm:text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Importar imágenes y videos desde la carpeta assets
import img2 from '@/assets/image/img22.jpg';
import img3 from '@/assets/image/img33.jpg';
import img4 from '@/assets/image/img44.jpg';
import img5 from '@/assets/image/img55.jpg';
import img7 from '@/assets/image/img7.png';
import img8 from '@/assets/image/img8.jpg'; // Nueva imagen
import video1 from '@/assets/video/video1.mp4'; // Video 1
import video6 from '@/assets/video/video6.mp4'; // Video 6

export default {
  data() {
    return {
      items: [
        {
          type: 'video', // Tipo de contenido: video
          src: video1,
          description:
            'Un lugar mágico para explorar la naturaleza y desconectar del mundo.',
          size: 'col-span-1 row-span-2', // Imagen más alta
        },
        {
          type: 'image', // Tipo de contenido: imagen
          src: img2,
          description:
            'Relájate en las playas más hermosas del mundo mientras disfrutas del sol.',
          size: 'col-span-1 row-span-1', // Imagen estándar
        },
        {
          type: 'image',
          src: img8, // Nueva imagen
          description:
            'Un viaje inolvidable por paisajes llenos de historia y cultura.',
          size: 'col-span-1 row-span-1', // Imagen estándar
        },
        {
          type: 'image',
          src: img3,
          description:
            'Descubre la vida urbana llena de energía y cultura moderna.',
          size: 'col-span-2 row-span-1', // Imagen más ancha
        },
        {
          type: 'image',
          src: img4,
          description:
            'Un refugio natural para desconectar del mundo y encontrar paz.',
          size: 'col-span-1 row-span-1', // Imagen estándar
        },
        {
          type: 'image',
          src: img5,
          description:
            'Experimenta la belleza de los paisajes montañosos y su tranquilidad.',
          size: 'col-span-1 row-span-1', // Imagen estándar
        },
        {
          type: 'video', // Tipo de contenido: video
          src: video6,
          description:
            'Explora los secretos de la selva y su diversidad biológica.',
          size: 'col-span-1 row-span-2', // Imagen más alta
        },
        {
          type: 'image',
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