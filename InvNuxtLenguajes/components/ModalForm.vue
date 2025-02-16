<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <!-- Modal -->
    <div class="bg-white rounded-lg shadow-lg w-full max-w-md relative overflow-hidden">
      <!-- Botón de Cierre -->
      <span
        @click="$emit('close')"
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer text-2xl"
      >
        &times;
      </span>

      <!-- Título del Formulario -->
      <h2 class="text-2xl font-bold mb-4 p-4 border-b border-gray-200">Formulario de Comentarios</h2>

      <!-- Contenido Scrollable -->
      <div class="max-h-[60vh] overflow-y-auto p-4">
        <form @submit.prevent="submitForm" class="space-y-4">
          <!-- Campo Nombre -->
          <div>
            <label
              for="nombre"
              :class="isFieldValid('nombre') ? 'block mb-2 text-sm font-medium text-green-700' : 'block mb-2 text-sm font-medium text-red-700'"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              v-model="formData.nombre"
              @input="validateField('nombre')"
              :class="isFieldValid('nombre') ? 
                'bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5' :
                'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5'"
              placeholder="Ej. Juan"
            />
            <p v-if="errors.nombre" class="mt-2 text-sm text-red-600">
              {{ errors.nombre }}
            </p>
          </div>

          <!-- Campo Apellido -->
          <div>
            <label
              for="apellido"
              :class="isFieldValid('apellido') ? 'block mb-2 text-sm font-medium text-green-700' : 'block mb-2 text-sm font-medium text-red-700'"
            >
              Apellido:
            </label>
            <input
              type="text"
              id="apellido"
              v-model="formData.apellido"
              @input="validateField('apellido')"
              :class="isFieldValid('apellido') ? 
                'bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5' :
                'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5'"
              placeholder="Ej. Pérez"
            />
            <p v-if="errors.apellido" class="mt-2 text-sm text-red-600">
              {{ errors.apellido }}
            </p>
          </div>

          <!-- Campo Ubicación -->
          <div>
            <label
              for="ubicacion"
              :class="isFieldValid('ubicacion') ? 'block mb-2 text-sm font-medium text-green-700' : 'block mb-2 text-sm font-medium text-red-700'"
            >
              Ubicación:
            </label>
            <input
              type="text"
              id="ubicacion"
              v-model="formData.ubicacion"
              @input="validateField('ubicacion')"
              :class="isFieldValid('ubicacion') ? 
                'bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5' :
                'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5'"
              placeholder="Ej. Ciudad"
            />
            <p v-if="errors.ubicacion" class="mt-2 text-sm text-red-600">
              {{ errors.ubicacion }}
            </p>
          </div>

          <!-- Campo Calificación -->
          <div>
            <label
              for="calificacion"
              :class="isFieldValid('calificacion') ? 'block mb-2 text-sm font-medium text-green-700' : 'block mb-2 text-sm font-medium text-red-700'"
            >
              Calificación:
            </label>
            <select
              id="calificacion"
              v-model="formData.calificacion"
              @change="validateField('calificacion')"
              :class="isFieldValid('calificacion') ? 
                'bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5' :
                'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5'"
            >
              <option value="" disabled selected>Selecciona una opción</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <p v-if="errors.calificacion" class="mt-2 text-sm text-red-600">
              {{ errors.calificacion }}
            </p>
          </div>

          <!-- Campo Descripción -->
          <div>
            <label
              for="descripcion"
              :class="isFieldValid('descripcion') ? 'block mb-2 text-sm font-medium text-green-700' : 'block mb-2 text-sm font-medium text-red-700'"
            >
              Descripción del Comentario:
            </label>
            <textarea
              id="descripcion"
              v-model="formData.descripcion"
              rows="4"
              @input="validateField('descripcion')"
              :class="isFieldValid('descripcion') ? 
                'bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5' :
                'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5'"
              placeholder="Escribe tu comentario aquí..."
            ></textarea>
            <p v-if="errors.descripcion" class="mt-2 text-sm text-red-600">
              {{ errors.descripcion }}
            </p>
          </div>

          <!-- Botón Enviar -->
          <button
            type="submit"
            class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nombre: "",
        apellido: "",
        ubicacion: "",
        calificacion: "",
        descripcion: "",
      },
      errors: {}, // Objeto para almacenar errores
    };
  },
  methods: {
    validateField(field) {
      if (this.formData[field].trim()) {
        this.errors[field] = ""; // Limpiar error si el campo es válido
      } else {
        this.errors[field] = `El campo ${field} es obligatorio.`; // Marcar como inválido
      }
    },
    isFieldValid(field) {
      return this.formData[field].trim() && !this.errors[field];
    },
    submitForm() {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      this.errors = {}; // Limpiar errores previos

      // Validaciones
      if (!this.formData.nombre.trim()) {
        this.errors.nombre = "El nombre es obligatorio.";
      }
      if (!this.formData.apellido.trim()) {
        this.errors.apellido = "El apellido es obligatorio.";
      }
      if (!this.formData.ubicacion.trim()) {
        this.errors.ubicacion = "La ubicación es obligatoria.";
      }
      if (!this.formData.calificacion) {
        this.errors.calificacion = "La calificación es obligatoria.";
      }
      if (!this.formData.descripcion.trim()) {
        this.errors.descripcion = "La descripción es obligatoria.";
      }

      // Si hay errores, detener el envío
      if (Object.keys(this.errors).length > 0) {
        console.log("Errores en el formulario:", this.errors);
        return;
      }

      // Emitir el formulario si no hay errores
      console.log("Datos del formulario:", this.formData);
      this.$emit("submit", { ...this.formData });
      this.$emit("close");
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        nombre: "",
        apellido: "",
        ubicacion: "",
        calificacion: "",
        descripcion: "",
      };
      this.errors = {}; // Limpiar errores
    },
  },
};
</script>