document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value;
    const fechaNacimiento = document.getElementById('fecha_nacimiento').value;

    // Validación de nombre
    if (nombre.length < 2) {
      alert('Por favor, introduce un nombre válido (mínimo 2 caracteres).');
      return;
    }

    // Validación de edad
    if (edad === '' || edad < 0 || edad > 120) {
      alert('Por favor, introduce una edad válida.');
      return;
    }

    // Validación de fecha de nacimiento
    if (!fechaNacimiento) {
      alert('Por favor, selecciona tu fecha de nacimiento.');
      return;
    }

    const fechaSeleccionada = new Date(fechaNacimiento);
    const hoy = new Date();
    if (fechaSeleccionada > hoy) {
      alert('La fecha de nacimiento no puede ser en el futuro.');
      return;
    }

    // Si todo es válido
    console.log('Datos del formulario:', { nombre, edad, fechaNacimiento });
    alert(`Formulario enviado correctamente.\nNombre: ${nombre}\nEdad: ${edad}\nFecha de nacimiento: ${fechaNacimiento}`);

    form.reset();
  });
});