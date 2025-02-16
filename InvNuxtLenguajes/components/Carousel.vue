<template>
  <div class="relative h-screen bg-black text-white overflow-hidden">
    <!-- List Items -->
    <div class="absolute inset-0">
      <div
        v-for="item in items"
        :key="item.id"
        :class="[
          'absolute inset-0 transition-opacity duration-500 ease-in-out',
          { 'opacity-0': itemActive !== item.id, 'opacity-100': itemActive === item.id },
        ]"
      >
        <img :src="item.image" alt="Slider Image" class="w-full h-full object-cover" />
        <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
        <div class="absolute left-10 top-1/4 max-w-md space-y-4">
          <p class="text-sm uppercase tracking-widest">{{ item.category }}</p>
          <h2 class="text-5xl font-bold">{{ item.title }}</h2>
          <p class="text-lg">{{ item.description }}</p>
        </div>
      </div>
    </div>

    <!-- Button Arrows -->
    <div class="absolute top-1/2 right-10 transform -translate-y-1/2 space-y-4">
      <button
        @click="prevSlide"
        class="w-10 h-10 bg-gray-800 bg-opacity-50 hover:bg-opacity-100 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <
      </button>
      <button
        @click="nextSlide"
        class="w-10 h-10 bg-gray-800 bg-opacity-50 hover:bg-opacity-100 rounded-full flex items-center justify-center text-white transition-colors"
      >
        >
      </button>
    </div>

    <!-- Thumbnails -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
      <div
        v-for="thumbnail in thumbnails"
        :key="thumbnail.id"
        :class="[
          'relative w-32 h-40 cursor-pointer transition-transform duration-300 rounded-md overflow-hidden',
          { 'brightness-150 scale-105': itemActive === thumbnail.id, 'brightness-75': itemActive !== thumbnail.id },
        ]"
        @click="setActive(thumbnail.id)"
      >
        <img :src="thumbnail.image" alt="Thumbnail" class="w-full h-full object-cover" />
        <div
          class="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-xs p-2 text-center truncate"
        >
          {{ thumbnail.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Importar imágenes desde la carpeta assets
import img1 from '@/assets/image/img1.jpg';
import img2 from '@/assets/image/img2.jpg';
import img3 from '@/assets/image/img3.jpg';
import img4 from '@/assets/image/img4.jpg';
import img5 from '@/assets/image/img5.jpg';

export default {
  data() {
    return {
      itemActive: 1,
      refreshInterval: null,
      items: [
        {
          id: 1,
          image: img1,
          category: 'design',
          title: 'Slider 01',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?',
        },
        {
          id: 2,
          image: img2,
          category: 'design',
          title: 'Slider 02',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?',
        },
        {
          id: 3,
          image: img3,
          category: 'design',
          title: 'Slider 03',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?',
        },
        {
          id: 4,
          image: img4,
          category: 'design',
          title: 'Slider 04',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?',
        },
        {
          id: 5,
          image: img5,
          category: 'design',
          title: 'Slider 05',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?',
        },
      ],
      thumbnails: [
        { id: 1, image: img1, name: 'Name Slider 01' },
        { id: 2, image: img2, name: 'Name Slider 02' },
        { id: 3, image: img3, name: 'Name Slider 03' },
        { id: 4, image: img4, name: 'Name Slider 04' },
        { id: 5, image: img5, name: 'Name Slider 05' },
      ],
    };
  },
  mounted() {
    this.startAutoSlider();
  },
  beforeDestroy() {
    clearInterval(this.refreshInterval);
  },
  methods: {
    nextSlide() {
      const currentIndex = this.items.findIndex((item) => item.id === this.itemActive);
      const nextIndex = (currentIndex + 1) % this.items.length;
      this.itemActive = this.items[nextIndex].id;
    },
    prevSlide() {
      const currentIndex = this.items.findIndex((item) => item.id === this.itemActive);
      const prevIndex = (currentIndex - 1 + this.items.length) % this.items.length;
      this.itemActive = this.items[prevIndex].id;
    },
    setActive(id) {
      this.itemActive = id;
    },
    startAutoSlider() {
      this.refreshInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
  },
};
</script>