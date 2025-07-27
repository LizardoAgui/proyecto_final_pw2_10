import './menu-toggle.js';

document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los títulos de las categorías de FAQ
  const titulosCategorias = document.querySelectorAll('.faq-categoria .titulo-categoria');
  // Selecciona todas las preguntas individuales de FAQ
  const preguntasFaq = document.querySelectorAll('.faq-item .faq-pregunta');

  // Lógica para desplegar/contraer categorías completas
  titulosCategorias.forEach(titulo => {
    titulo.addEventListener('click', () => {
      // Encuentra el contenedor de preguntas de esa categoría (el elemento hermano siguiente)
      const preguntasCategoria = titulo.nextElementSibling;
      // Alterna la clase 'activo' en el título de la categoría para cambiar el signo (+/-)
      titulo.classList.toggle('activo');

      // Alterna la visibilidad del contenedor de preguntas
      if (preguntasCategoria.style.display === 'block') {
        preguntasCategoria.style.display = 'none';
      } else {
        preguntasCategoria.style.display = 'block';
      }
    });
  });

  // Lógica para desplegar/contraer respuestas de preguntas individuales
  preguntasFaq.forEach(pregunta => {
    pregunta.addEventListener('click', () => {
      // Encuentra la respuesta de esa pregunta (el elemento hermano siguiente)
      const respuestaFaq = pregunta.nextElementSibling;
      // Alterna la clase 'activo' en la pregunta para cambiar la flecha (▼/▲)
      pregunta.classList.toggle('activo');

      // Alterna la visibilidad de la respuesta
      if (respuestaFaq.style.display === 'block') {
        respuestaFaq.style.display = 'none';
      } else {
        respuestaFaq.style.display = 'block';
      }
    });
  });
});