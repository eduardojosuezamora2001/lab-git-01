document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const inputFecha = document.getElementById('fecha_nacimiento');
  const toggleBtn = document.getElementById('toggle-theme');

  // --- Fecha máxima permitida: hoy (evita fechas de nacimiento futuras) ---
  const hoy = new Date();
  const maxFecha = hoy.toISOString().split('T')[0];
  inputFecha.setAttribute('max', maxFecha);

  // --- Manejo de tema (claro / oscuro) ---
  const temaGuardado = localStorage.getItem('tema') || 'light';
  aplicarTema(temaGuardado);

  toggleBtn.addEventListener('click', () => {
    const temaActual = document.documentElement.getAttribute('data-theme') || 'light';
    const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';
    aplicarTema(nuevoTema);
    localStorage.setItem('tema', nuevoTema);
  });

  function aplicarTema(tema) {
    if (tema === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleBtn.textContent = '☀️ Modo claro';
    } else {
      document.documentElement.removeAttribute('data-theme');
      toggleBtn.textContent = '🌙 Modo oscuro';
    }
  }

  // --- Validación del formulario ---
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value;
    const fechaNacimiento = inputFecha.value;

    if (nombre.length < 2) {
      alert('Por favor, introduce un nombre válido (mínimo 2 caracteres).');
      return;
    }

    if (edad === '' || edad < 0 || edad > 120) {
      alert('Por favor, introduce una edad válida.');
      return;
    }

    if (!fechaNacimiento) {
      alert('Por favor, selecciona tu fecha de nacimiento.');
      return;
    }

    const fechaSeleccionada = new Date(fechaNacimiento);
    if (fechaSeleccionada > hoy) {
      alert('La fecha de nacimiento no puede ser en el futuro.');
      return;
    }

    console.log('Datos del formulario:', { nombre, edad, fechaNacimiento });
    alert(`Formulario enviado correctamente.\nNombre: ${nombre}\nEdad: ${edad}\nFecha de nacimiento: ${fechaNacimiento}`);

    form.reset();
  });
});