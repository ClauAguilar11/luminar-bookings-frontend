const form = document.getElementById('registerForm');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contrasenaRegex = /^.{8,}$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const correo = formData.get('correo').trim();
  const contrasena = formData.get('contrasena').trim();
  const confirmarContrasena = formData.get('confirmarContrasena').trim();
  const fechaNacimiento = formData.get('fechaNacimiento');

  // Validacion correo electrónico
  if (!emailRegex.test(correo)) {
    Swal.fire('Error', 'El correo electrónico no es válido.', 'error');
    return;
  }

  // Validacion contraseña
  if (!contrasenaRegex.test(contrasena)) {
    Swal.fire('Error', 'La contraseña debe tener al menos 8 caracteres.', 'error');
    return;
  }

  // Validacion confirmacion de contraseña
  if (contrasena !== confirmarContrasena) {
    Swal.fire('Error', 'Las contraseñas no coinciden.', 'error');
    return;
  }

  // Validacion fecha de nacimiento
  if (!fechaNacimiento) {
    Swal.fire('Error', 'Debes seleccionar una fecha de nacimiento.', 'error');
    return;
  }

  const fechaNacimientoDate = new Date(fechaNacimiento);
  const edad = new Date().getFullYear() - fechaNacimientoDate.getFullYear();

  if (edad < 18) {
    Swal.fire('Error', 'Debes ser mayor de 18 años para registrarte.', 'error');
    return;
  }

  
});