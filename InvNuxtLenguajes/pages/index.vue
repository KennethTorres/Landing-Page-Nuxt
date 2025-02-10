<template>
  <div>
    <!-- Header -->
    <header class="fixed top-0 left-0 w-full z-50 py-6 px-8 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center space-x-4">
        <img src="@/assets/image/logo.png" alt="Logo" class="w-24 h-24" />
      </div>

      <!-- Navegación -->
      <nav class="hidden md:flex space-x-6 text-base font-medium">
        <a href="#inicio" class="text-gray-300 hover:text-white transition duration-300">Inicio</a>
        <a href="#contacto" class="text-gray-300 hover:text-white transition duration-300">Contacto</a>
        <a href="#" class="text-gray-300 hover:text-white transition duration-300">Info</a>
      </nav>

      <!-- Ícono de Menú Hamburguesa (Visible solo en dispositivos móviles) -->
      <div class="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-8 h-8 text-gray-300 cursor-pointer hover:text-white transition duration-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </header>

    <!-- Contenido Principal -->
    <HeroBanner id="inicio" />
    <Carousel />
    <CardsSection />
    <VideoSection />
    <ImageCollage />
    <ContactSection id="contacto" />
    <FooterSection />
  </div>
</template>

<script setup>
import HeroBanner from '@/components/HeroBanner.vue';
import Carousel from '@/components/Carousel.vue';
import CardsSection from '@/components/CardsSection.vue';
import VideoSection from '@/components/VideoSection.vue';
import ImageCollage from '@/components/ImageCollage.vue';
import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>