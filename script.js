document.addEventListener('DOMContentLoaded', () => {
  const actividades = document.querySelectorAll('.actividad');
  const modal = document.getElementById('modal');
  const modalTitulo = document.getElementById('modal-titulo');
  const modalAudiencia = document.getElementById('modal-audiencia');
  const modalUbicacion = document.getElementById('modal-ubicacion');
  const modalHora = document.getElementById('modal-hora');
  const modalDescripcion = document.getElementById('modal-descripcion');
  const modalPonentesLista = document.getElementById('modal-ponentes-lista');
  const cerrarBtn = document.getElementById('cerrarModal');

  actividades.forEach(actividad => {
    actividad.addEventListener('click', () => {
      modalTitulo.textContent = actividad.dataset.titulo;
      modalAudiencia.textContent = actividad.dataset.audiencia;
      modalUbicacion.textContent = actividad.dataset.ubicacion;
      modalHora.textContent = actividad.dataset.hora;
      modalDescripcion.textContent = actividad.dataset.descripcion;

      const nombres = actividad.dataset.ponentes.split('|').map(n => n.trim());
      const semblanzas = (actividad.dataset.semblanza || '').split('|').map(s => s.trim());
      const imagenes = actividad.dataset.imagen.split('|').map(i => i.trim());

      modalPonentesLista.innerHTML = nombres.map((nombre, i) => `
        <div class="ponente-bloque">
          <img src="${imagenes[i] || ''}" alt="${nombre}" class="ponente-foto">
          <div class="ponente-texto">
            <h5>${nombre}</h5>
            <p>${semblanzas[i] || ''}</p>
          </div>
        </div>
      `).join('');

      modal.style.display = 'flex';
    });
  });

  cerrarBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
});
