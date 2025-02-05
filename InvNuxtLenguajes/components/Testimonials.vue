<template>
  <section class="py-24 bg-gray-50">
    <h2 class="text-4xl font-bold text-center mb-16 text-gray-800">What Our Happy Customers Say</h2>
    <div class="relative overflow-hidden">
      <!-- Carrusel -->
      <div
        class="flex gap-8 transition-transform duration-700 ease-in-out"
        :style="`transform: translateX(-${currentSlide * 100}%)`"
      >
        <!-- Testimonios originales -->
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="testimonial-card flex-none w-full sm:w-1/2 md:w-1/3 bg-white rounded-3xl shadow-sm p-8 flex flex-col justify-between"
        >
          <div>
            <p class="text-gray-700 text-lg italic mb-4">"{{ testimonial.comment }}"</p>
            <div class="flex items-center text-yellow-500 mb-4">
              <svg
                v-for="star in testimonial.rating"
                :key="star"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
          </div>
          <div>
            <h3 class="font-bold text-xl text-gray-900">{{ testimonial.name }}</h3>
            <p class="text-gray-500 text-sm">{{ testimonial.city }}</p>
            <p class="text-gray-500 text-sm italic">{{ testimonial.occupation }}</p>
          </div>
        </div>
      </div>

      <!-- Indicadores (Puntos de Navegación) -->
      <div class="flex justify-center mt-8 space-x-2">
        <button
          v-for="(testimonial, index) in testimonials"
          :key="index"
          @click="currentSlide = index"
          class="w-3 h-3 rounded-full bg-gray-400 cursor-pointer transition-colors duration-300"
          :class="{ 'bg-yellow-500': currentSlide === index }"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const testimonials = [
  {
    name: 'John Smith',
    city: 'NewLand',
    occupation: 'Software Engineer',
    rating: 5,
    comment: 'Great service and support! Highly recommended for quality work.',
  },
  {
    name: 'Jane Doe',
    city: 'OldTown',
    occupation: 'Graphic Designer',
    rating: 4,
    comment: 'Really enjoyed working with them. Fast and reliable team!',
  },
  {
    name: 'Alice Johnson',
    city: 'BrightCity',
    occupation: 'Marketing Manager',
    rating: 5,
    comment: 'Exceptional attention to detail. Loved the results!',
  },
];

// Control del carrusel
const currentSlide = ref(0);
</script>

<style scoped>
/* Espaciado global */
.py-24 {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.mb-16 {
  margin-bottom: 4rem;
}

/* Estilo de las tarjetas */
.testimonial-card {
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03); /* Sombras más suaves */
  background: linear-gradient(145deg, #ffffff, #f9fafb);
  padding: 2rem;
}

/* Transiciones */
.transition-transform {
  transition-property: transform;
  transition-duration: 0.7s;
  transition-timing-function: ease-in-out;
}

/* Texto */
.text-gray-800 {
  color: #2d3748;
}

.text-gray-900 {
  color: #1a202c;
}

.text-yellow-500 {
  color: #facc15;
}

/* Puntos de navegación */
.space-x-2 > * + * {
  margin-left: 0.5rem;
}
</style>