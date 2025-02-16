<template>
  <div>
    <!-- Contenido Principal -->
    <HeroBanner id="inicio" />
    <Carousel />
    <CardsSection id="destinos" />
    <VideoSection />
    <ImageCollage />
    <ContactSection id="contacto" />
  </div>
</template>

<script setup>
import HeroBanner from "@/components/HeroBanner.vue";
import Carousel from "@/components/Carousel.vue";
import CardsSection from "@/components/CardsSection.vue";
import VideoSection from "@/components/VideoSection.vue";
import ImageCollage from "@/components/ImageCollage.vue";
import ContactSection from "@/components/ContactSection.vue";
</script>
