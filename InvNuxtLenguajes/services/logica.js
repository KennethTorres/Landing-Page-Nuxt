import { ref } from "vue";

const isModalOpen = ref(false);
const comments = ref([]);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const addComment = (comment) => {
  console.log("Comentario recibido:", comment);
  if (!comment || typeof comment !== "object") {
    console.error("El comentario no es válido:", comment);
    return;
  }

  const nuevoComentario = {
    nombre: comment.nombre?.trim() || "Anónimo",
    apellido: comment.apellido?.trim() || "",
    ubicacion: comment.ubicacion?.trim() || "N/A",
    calificacion: comment.calificacion ? String(comment.calificacion) : "0",
    descripcion: comment.descripcion?.trim() || "Sin descripción",
  };

  comments.value.push(nuevoComentario);
  saveCommentsToLocalStorage();
  closeModal();
};

const saveCommentsToLocalStorage = () => {
  console.log("Guardando comentarios en localStorage:", comments.value);
  localStorage.setItem("comments", JSON.stringify(comments.value));
};

const loadCommentsFromLocalStorage = () => {
  const savedComments = localStorage.getItem("comments");
  console.log("Cargando comentarios desde localStorage:", savedComments);
  if (savedComments) {
    try {
      const parsedComments = JSON.parse(savedComments);
      if (Array.isArray(parsedComments)) {
        comments.value = parsedComments
          .filter((c) => typeof c === "object" && c !== null)
          .map((c) => ({
            nombre: c.nombre?.trim() || "Anónimo",
            apellido: c.apellido?.trim() || "",
            ubicacion: c.ubicacion?.trim() || "N/A",
            calificacion: c.calificacion ? String(c.calificacion) : "0",
            descripcion: c.descripcion?.trim() || "Sin descripción",
          }));
        console.log("Comentarios cargados:", comments.value);
      } else {
        console.error("El formato de los comentarios en localStorage no es un array.");
      }
    } catch (error) {
      console.error("Error al parsear los comentarios desde localStorage:", error);
    }
  }
};

// Exporta todas las funciones y variables necesarias
export {
  isModalOpen,
  comments,
  openModal,
  closeModal,
  addComment,
  loadCommentsFromLocalStorage,
};