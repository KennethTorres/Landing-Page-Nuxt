<template>
  <div class="relative bg-cover bg-center h-screen flex items-center justify-center text-white" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <!-- Contenido -->
    <div class="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-start justify-between">
      <!-- Texto (Izquierda) -->
      <div class="lg:w-1/2 mb-8 lg:mb-0">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{{ title }}</h1>
        <p class="text-base sm:text-lg lg:text-xl leading-relaxed">{{ description }}</p>
      </div>
      <!-- Video (Derecha) -->
      <div class="lg:w-1/2">
        <video
          class="w-full aspect-video rounded-md"
          autoplay
          loop
          muted
          playsinline
        >
          <source :src="localVideo" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImage from '@/assets/image/fondo.jpg';
import localVideo from '@/assets/video/CostaRicaNatureFilm.mp4';

export default {
  data() {
    return {
      backgroundImage: backgroundImage,
      title: 'Explora el Mundo',
      description:
        'Sumérgete en experiencias únicas y descubre lugares asombrosos. Desde montañas nevadas hasta playas tropicales, cada rincón del mundo tiene algo especial que ofrecer. Acompáñanos en este viaje y vive momentos inolvidables.',
      localVideo: localVideo,
    };
  },
};
</script>