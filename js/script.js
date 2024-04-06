
document.getElementById('menu').addEventListener('click', function() {
    if (this.style.backgroundColor === 'rgba(0, 0, 0, 0.5)') {
        this.style.backgroundColor = 'transparent';
    } else {
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
});



const boton1 = document.getElementById('miBoton1');
const opcionesDiv1 = document.getElementById('opcionesDiv1');
const opcion1 = document.getElementById('opcion1');
const opcion2 = document.getElementById('opcion2');

const boton2 = document.getElementById('miBoton2');
const opcionesDiv2 = document.getElementById('opcionesDiv2');
const opcion01 = document.getElementById('opcion01');
const opcion02 = document.getElementById('opcion02');

boton1.addEventListener('click', () => {
  opcionesDiv1.classList.toggle('hidden');
});

opcion1.addEventListener('click', () => {
  console.log('Opción 1 seleccionada');
  opcionesDiv1.classList.add('hidden');
});

opcion2.addEventListener('click', () => {
  console.log('Opción 2 seleccionada');
  opcionesDiv1.classList.add('hidden');
});

boton2.addEventListener('click', () => {
  opcionesDiv2.classList.toggle('hidden');
});

opcion01.addEventListener('click', () => {
  console.log('Opción 01 seleccionada');
  opcionesDiv2.classList.add('hidden');
});

opcion02.addEventListener('click', () => {
  console.log('Opción 02 seleccionada');
  opcionesDiv2.classList.add('hidden');
});

document.addEventListener('click', (event) => {
  const isClickInsideButton1 = boton1.contains(event.target);
  const isClickInsideOptions1 = opcionesDiv1.contains(event.target);
  const isClickInsideButton2 = boton2.contains(event.target);
  const isClickInsideOptions2 = opcionesDiv2.contains(event.target);

  if (!isClickInsideButton1 && !isClickInsideOptions1 && !opcionesDiv1.classList.contains('hidden')) {
    opcionesDiv1.classList.add('hidden');
  }

  if (!isClickInsideButton2 && !isClickInsideOptions2 && !opcionesDiv2.classList.contains('hidden')) {
    opcionesDiv2.classList.add('hidden');
  }
});
