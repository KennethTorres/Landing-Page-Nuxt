<template>
    <section class="p-12 bg-gray-100">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Columna Izquierda: Bloques Verticales -->
        <div class="flex flex-col gap-6">
          <div class="bg-white p-4 shadow rounded-lg inline-block">
            <h3 class="text-lg font-semibold">Lorum 1</h3>
            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="bg-white p-4 shadow rounded-lg inline-block">
            <h3 class="text-lg font-semibold">Lorum 2</h3>
            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="bg-white p-4 shadow rounded-lg inline-block">
            <h3 class="text-lg font-semibold">Lorum 3</h3>
            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
  
        <!-- Columna Derecha: Título y Párrafo -->
        <div class="flex flex-col justify-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">About Our Services</h2>
          <p class="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae nisi nec lorem tincidunt efficitur. 
            Sed euismod, nunc vel bibendum aliquam, justo nulla tristique libero, vel malesuada nisi risus ac urna. 
            Donec non ligula ut justo vestibulum ultricies. Fusce euismod, nisi vel luctus dignissim, velit sapien 
            malesuada nisl, id gravida arcu justo in odio. Curabitur nec enim vel metus pharetra tincidunt.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup></script>
  
  <style scoped>
  /* Espaciado global */
  .p-12 {
    padding: 3rem;
  }
  
  .gap-12 {
    gap: 3rem;
  }
  
  /* Máximo ancho del contenedor */
  .max-w-6xl {
    max-width: 72rem;
  }
  
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Estilo de las tarjetas */
  .bg-white {
    background-color: #ffffff;
  }
  
  .shadow {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  .rounded-lg {
    border-radius: 0.5rem;
  }
  
  .inline-block {
    display: inline-block;
  }
  
  /* Texto */
  .text-gray-600 {
    color: #718096;
  }
  
  .text-gray-800 {
    color: #2d3748;
  }
  
  .leading-relaxed {
    line-height: 1.625;
  }
  </style>