<template>
  <section class="flex items-center justify-between bg-cover bg-center p-8 md:px-24 lg:px-32" style="background-image: url('/assets/img/image1.png');">
    <!-- Contenido de la izquierda -->
    <div class="w-1/2 text-white">
      <h2 class="text-lg font-medium text-gray-200">SUB TITLE</h2>
      <h1 class="text-5xl font-bold mt-2">MAIN TITLE</h1>
      <p class="mt-4 text-gray-300 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus nec justo quis nisi aliquam
        consequat. Sed euismod, nunc vel bibendum aliquam, justo nulla tristique libero.
      </p>
    </div>

    <!-- Imagen de la derecha -->
    <div class="w-1/2 flex justify-end">
      <img src="/assets/img/image1.png" alt="Tech Image" class="w-full max-w-md rounded-lg shadow-lg" />
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

.lg\:px-32 {
  padding-left: 8rem;
  padding-right: 8rem;
}

/* Texto */
.text-gray-200 {
  color: #e5e7eb;
}

.text-gray-300 {
  color: #d1d5db;
}

.leading-relaxed {
  line-height: 1.625;
}

/* Imagen */
.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.rounded-lg {
  border-radius: 0.5rem;
}
</style>