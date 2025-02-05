<template>
  <header class="flex justify-between items-center bg-gray-100 py-6 px-8 md:px-24 lg:px-32">
    <!-- Logo -->
    <div>
      <h1 class="text-2xl font-bold text-gray-800">Logo</h1>
    </div>

    <!-- Menú de Navegación -->
    <nav class="flex gap-6 justify-center flex-grow">
      <a href="#" class="text-gray-600 hover:text-blue-500 transition-colors duration-300 font-medium text-lg relative group">
        Home
        <span
          class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
        ></span>
      </a>
      <a href="#" class="text-gray-600 hover:text-blue-500 transition-colors duration-300 font-medium text-lg relative group">
        About Us
        <span
          class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
        ></span>
      </a>
      <a
        href="#"
        @click.prevent="openModal"
        class="text-gray-600 hover:text-blue-500 transition-colors duration-300 font-medium text-lg relative group"
      >
        Contact Us
        <span
          class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
        ></span>
      </a>
    </nav>
  </header>

  <!-- Modal -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <!-- Nombre -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <!-- Teléfono -->
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            v-model="formData.phone"
            pattern="^\+?[0-9]{1,3}?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder=""
            required
          />
        </div>

        <!-- Dirección -->
        <div>
          <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            v-model="formData.address"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder=""
            required
          />
        </div>

        <!-- Mensaje -->
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="4"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>

        <!-- Botones -->
        <div class="flex justify-end space-x-2">
          <button
            type="button"
            @click="closeModal"
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Estado del modal
const isModalOpen = ref(false);

// Datos del formulario
const formData = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  message: '',
});

// Función para abrir el modal
const openModal = () => {
  isModalOpen.value = true;
};

// Función para cerrar el modal
const closeModal = () => {
  isModalOpen.value = false;
};

// Validación personalizada
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^\+?[0-9]{1,3}?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  return phoneRegex.test(phone);
};

// Función para manejar el envío del formulario
const submitForm = () => {
  if (!validateEmail(formData.value.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!validatePhone(formData.value.phone)) {
    alert("Please enter a valid phone number.");
    return;
  }

  console.log('Form submitted:', formData.value);

  // Cerrar el modal después de enviar
  closeModal();

  // Limpiar el formulario
  formData.value = {
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  };
};
</script>

<style scoped>
/* Espaciado global */
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
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
.text-gray-600 {
  color: #718096;
}

.text-gray-800 {
  color: #2d3748;
}

.font-medium {
  font-weight: 500;
}

/* Transiciones */
.transition-colors {
  transition-property: color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

.transition-transform {
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}
</style>