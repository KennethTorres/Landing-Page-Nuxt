<template>
  <div class="relative bg-cover bg-center h-screen flex items-center justify-center text-white" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>

    <!-- Contenido -->
    <div class="relative z-10 container mx-auto px-4 text-center">
      <!-- Título y Descripción -->
      <h2 class="text-4xl sm:text-5xl font-bold mb-6">Contáctanos</h2>
      <p class="text-lg sm:text-xl mb-10">¿Tienes preguntas o deseas planificar tu próximo viaje? ¡Estamos aquí para ayudarte!</p>

      <!-- Formulario de Contacto -->
      <form @submit.prevent="handleSubmit" class="max-w-md mx-auto space-y-4">
        <!-- Nombre -->
        <div>
          <input
            type="text"
            placeholder="Tu nombre"
            v-model="formData.nombre"
            @input="validateField('nombre')"
            :class="isFieldValid('nombre') ? 
              'w-full px-4 py-3 rounded-md bg-green-800 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-green-500' :
              'w-full px-4 py-3 rounded-md bg-red-800 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-red-500'"
          />
        </div>

        <!-- Apellido -->
        <div>
          <input
            type="text"
            placeholder="Tu apellido"
            v-model="formData.apellido"
            @input="validateField('apellido')"
            :class="isFieldValid('apellido') ? 
              'w-full px-4 py-3 rounded-md bg-green-800 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-green-500' :
              'w-full px-4 py-3 rounded-md bg-red-800 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-red-500'"
          />
        </div>

        <!-- Teléfono -->
        <div>
          <input
            type="tel"
            placeholder="Tu teléfono"
            v-model="formData.telefono"
            @input="validateField('telefono')"
            :class="isFieldValid('telefono') ? 
              'w-full px-4 py-3 rounded-md bg-green-800 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-green-500' :
              'w-full px-4 py-3 rounded-md bg-red-800 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-red-500'"
          />
        </div>

        <!-- Email -->
        <div>
          <input
            type="email"
            placeholder="Tu correo electrónico"
            v-model="formData.email"
            @input="validateField('email')"
            :class="isFieldValid('email') ? 
              'w-full px-4 py-3 rounded-md bg-green-800 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-green-500' :
              'w-full px-4 py-3 rounded-md bg-red-800 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-red-500'"
          />
        </div>

        <!-- Mensaje -->
        <div>
          <textarea
            placeholder="Tu mensaje"
            rows="4"
            v-model="formData.mensaje"
            @input="validateField('mensaje')"
            :class="isFieldValid('mensaje') ? 
              'w-full px-4 py-3 rounded-md bg-green-800 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-green-500' :
              'w-full px-4 py-3 rounded-md bg-red-800 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-red-500'"
          ></textarea>
        </div>

        <!-- Botón de Envío -->
        <button
          type="submit"
          class="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition duration-300"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>

    <!-- Componente Congratulations -->
    <Congratulations v-if="showCongratulations" @close="closeCongratulations" />

    <!-- Componente Warning -->
    <Warning
      v-if="showWarning"
      @close="closeWarning"
      title="¡Error!"
      message="Por favor, completa todos los campos antes de enviar el formulario."
    />
  </div>
</template>

<script>
// Importar imagen de fondo desde assets
import backgroundImage from '@/assets/image/img6.png';
import Congratulations from './Congratulations.vue'; // Importar el componente Congratulations
import Warning from './Warning.vue'; // Importar el componente Warning

export default {
  components: {
    Congratulations, // Registrar el componente Congratulations
    Warning, // Registrar el componente Warning
  },
  data() {
    return {
      backgroundImage: backgroundImage,
      formData: {
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        mensaje: "",
      },
      showCongratulations: false, // Controla la visibilidad del componente Congratulations
      showWarning: false, // Controla la visibilidad del componente Warning
    };
  },
  methods: {
    validateField(field) {
      // No se realizan validaciones adicionales, solo se verifica si el campo está vacío
      return;
    },
    isFieldValid(field) {
      // Retorna verdadero si el campo tiene contenido, falso si está vacío
      return this.formData[field].trim() !== "";
    },
    handleSubmit() {
      // Verificar si todos los campos están llenos
      const allFieldsFilled = Object.keys(this.formData).every(
        (field) => this.formData[field].trim() !== ""
      );

      if (!allFieldsFilled) {
        // Mostrar el componente Warning
        this.showWarning = true;
        return;
      }

      // Mostrar el componente Congratulations
      this.showCongratulations = true;

      // Limpiar el formulario después de enviar
      this.resetForm();
    },
    resetForm() {
      // Limpiar todos los campos del formulario
      this.formData = {
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        mensaje: "",
      };
    },
    closeCongratulations() {
      // Ocultar el componente Congratulations
      this.showCongratulations = false;
    },
    closeWarning() {
      // Ocultar el componente Warning
      this.showWarning = false;
    },
  },
};
</script>