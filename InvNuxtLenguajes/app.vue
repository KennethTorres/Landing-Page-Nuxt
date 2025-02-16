<template>
  <div>
    <!-- Header -->
    <header
      class="fixed top-0 left-0 w-full z-50 py-9 px-10 flex items-center justify-between bg-transparent h-12 border-none shadow-none"
    >
      <!-- Logo -->
      <div class="flex items-center space-x-4">
        <img src="@/assets/image/logo.png" alt="Logo" class="w-24 h-24" />
      </div>
      <!-- Navegación -->
      <nav class="hidden md:flex space-x-6 text-base font-medium">
        <ul class="flex space-x-4 text-base font-medium">
          <li class="font-bold text-white hover:text-gray-900">
            <NuxtLink to="/">Inicio</NuxtLink>
          </li>
          <li class="font-bold text-white hover:text-gray-900">
            <NuxtLink to="/#contacto">Contacto</NuxtLink>
          </li>
          <li class="font-bold text-white hover:text-gray-900">
            <NuxtLink to="/comentarios">Comentarios</NuxtLink>
          </li>
        </ul>
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

    <!-- Contenido Dinámico con Transiciones -->
    <NuxtPage />
    <FooterSection />
  </div>
</template>
<script setup>
import FooterSection from "@/components/FooterSection.vue";
</script>
<style>
/* Estilos para las transiciones de página */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* Estilos generales para el header */
header {
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
