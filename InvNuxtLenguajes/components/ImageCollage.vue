<template>
  <div class="bg-gray-900 py-16">
    <!-- Título del Componente -->
    <h2 class="text-3xl font-bold text-center text-white mb-10">Explora Nuestro Colección de destinos</h2>

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
          <video
            v-if="item.type === 'video'"
            :src="item.src"
            autoplay
            loop
            muted
            class="w-full h-full object-cover"
          ></video>

          <img
            v-else
            :src="item.src"
            alt="Collage Image"
            class="w-full h-full object-cover"
          />
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
import img2 from '@/assets/image/img22.jpg';
import img3 from '@/assets/image/img33.jpg';
import img4 from '@/assets/image/img44.jpg';
import img5 from '@/assets/image/img55.jpeg';
import img7 from '@/assets/image/img7.png';
import img8 from '@/assets/image/img8.jpg';
import video1 from '@/assets/video/video1.mp4';
import video6 from '@/assets/video/video6.mp4';

export default {
  data() {
    return {
      items: [
        {
          type: 'video',
          src: video1,
          description:
            'Un rincón tropical de ensueño con aguas cristalinas, arena dorada y acantilados cubiertos de vegetación. Un destino perfecto para relajarse y disfrutar del sol.',
          size: 'col-span-1 row-span-2',
        },
        {
          type: 'image',
          src: img2,
          description:
            'Un espectacular lago rodeado de montañas con picos nevados, reflejando su belleza en las aguas turquesas. Un destino ideal para los amantes de la naturaleza y la aventura.',
          size: 'col-span-1 row-span-1',
        },
        {
          type: 'image',
          src: img8,
          description:
            'Explora la majestuosidad de las antiguas ruinas mayas, testigos de una civilización fascinante. Historia, cultura y naturaleza en un solo lugar.',
          size: 'col-span-1 row-span-1',
        },
        {
          type: 'image',
          src: img3,
          description:
            'Escápate a un paraíso rodeado de palmeras y aguas cristalinas. Un destino de lujo para quienes buscan relajación y experiencias inolvidables.',
          size: 'col-span-2 row-span-1',
        },
        {
          type: 'image',
          src: img4,
          description:
            'El Lago Maroon Bells en Colorado te espera con sus aguas cristalinas que reflejan las majestuosas Montañas Rocosas.',
          size: 'col-span-1 row-span-1',
        },
        {
          type: 'image',
          src: img5,
          description:
            'El Castillo de Oberhofen se alza sobre las turquesas aguas del Lago Thun. Este castillo medieval, rodeado por los Alpes, combina historia y belleza natural en un entorno de cuento de hadas.',
          size: 'col-span-1 row-span-1',
        },
        {
          type: 'video',
          src: video6,
          description:
            'Nuestro destino invernal ofrece aventuras sobre cumbres nevadas con atardeceres espectaculares sobre un mar de nubes.',
          size: 'col-span-1 row-span-2',
        },
        {
          type: 'image',
          src: img7,
          description:
            'Machu Picchu, la legendaria ciudad inca en Perú, te invita a explorar sus misteriosas ruinas y terrazas, una experiencia única para los amantes de la cultura y la historia.',
          size: 'col-span-2 row-span-1',
        },
      ],
    };
  },
};
</script>