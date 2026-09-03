document.addEventListener('DOMContentLoaded', () => {
  const actividades = document.querySelectorAll('.actividad');
  const modal = document.getElementById('modal');
  const modalTitulo = document.getElementById('modal-titulo');
  const modalAudiencia = document.getElementById('modal-audiencia');
  const modalUbicacion = document.getElementById('modal-ubicacion');
  const modalHora = document.getElementById('modal-hora');
  const modalDescripcion = document.getElementById('modal-descripcion');
  const modalPonentes = document.getElementById('modal-ponentes');
  const modalSemblanza = document.getElementById('modal-semblanza');
  const modalImagen = document.getElementById('modal-imagen');
  const cerrarBtn = document.getElementById('cerrarModal');

  actividades.forEach(actividad => {
    actividad.addEventListener('click', () => {
      modalTitulo.textContent = actividad.dataset.titulo;
      modalAudiencia.textContent = actividad.dataset.audiencia;
      modalUbicacion.textContent = actividad.dataset.ubicacion;
      modalHora.textContent = actividad.dataset.hora;
      modalDescripcion.textContent = actividad.dataset.descripcion;
      modalPonentes.innerHTML = actividad.dataset.ponentes.replace(/&#10;|\n/g, '<br>');
      modalSemblanza.innerHTML = actividad.dataset.semblanza.replace(/&#10;|\n/g, '<br><br>');
      modalImagen.src = actividad.dataset.imagen;
      modal.style.display = 'flex';
    });
  });

  cerrarBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Cerrar al hacer clic fuera del contenido
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Cerrar con tecla ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
});
