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
        <iframe
          class="w-full aspect-video rounded-md"
          :src="videoUrl"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
// Importar imagen de fondo desde assets
import backgroundImage from '@/assets/image/fondo.jpg';

export default {
data() {
  return {
    backgroundImage: backgroundImage,
    title: 'Explora el Mundo',
    description:
      'Sumérgete en experiencias únicas y descubre lugares asombrosos. Desde montañas nevadas hasta playas tropicales, cada rincón del mundo tiene algo especial que ofrecer. Acompáñanos en este viaje y vive momentos inolvidables.',
    videoId: '2trbFv8JhRw', // ID del video de YouTube
  };
},
computed: {
  videoUrl() {
    // Agregar parámetros para autoplay, loop, mute y controles desactivados
    return `https://www.youtube.com/embed/${this.videoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${this.videoId}`;
  },
},
};
</script>