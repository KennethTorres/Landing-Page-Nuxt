<template>
    <section class="p-8 md:px-24">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">OUR PORTFOLIO GALLERY HERE</h2>
      <div class="grid grid-cols-4 gap-6">
        <!-- Primera columna -->
        <div class="row-span-2 col-span-1 bg-gray-300 rounded-lg overflow-hidden">
          <img src="/assets/img/image1.png" alt="Portfolio Image 1" class="w-full h-full object-cover" />
        </div>
        <div class="col-span-1 bg-gray-300 rounded-lg overflow-hidden">
          <img src="/assets/img/image1.png" alt="Portfolio Image 2" class="w-full h-full object-cover" />
        </div>
        <div class="col-span-1 bg-gray-300 rounded-lg overflow-hidden">
          <img src="/assets/img/image1.png" alt="Portfolio Image 3" class="w-full h-full object-cover" />
        </div>
        <div class="row-span-2 col-span-1 bg-gray-300 rounded-lg overflow-hidden">
          <img src="/assets/img/image1.png" alt="Portfolio Image 4" class="w-full h-full object-cover" />
        </div>
  
        <!-- Segunda fila -->
        <div class="col-span-1 bg-gray-300 rounded-lg overflow-hidden">
          <img src="/assets/img/image1.png" alt="Portfolio Image 5" class="w-full h-full object-cover" />
        </div>
        <div class="col-span-1 bg-gray-300 rounded-lg overflow-hidden">
          <img src="/assets/img/image1.png" alt="Portfolio Image 6" class="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup></script>
  
  <style scoped>
  /* Espaciado global */
  .p-8 {
    padding: 2rem;
  }
  
  .md\:px-24 {
    padding-left: 6rem;
    padding-right: 6rem;
  }
  
  .mb-12 {
    margin-bottom: 3rem;
  }
  
  /* Espaciado entre elementos */
  .gap-6 {
    gap: 1.5rem;
  }
  
  /* Estilo de las imágenes */
  .bg-gray-300 {
    background-color: #d1d5db;
  }
  
  .rounded-lg {
    border-radius: 0.5rem;
  }
  
  .overflow-hidden {
    overflow: hidden;
  }
  
  .object-cover {
    object-fit: cover;
  }
  
  /* Texto */
  .text-gray-800 {
    color: #2d3748;
  }
  </style>