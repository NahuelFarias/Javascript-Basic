// Declarativas

function miFuncion() {
  return 3;
}

miFuncion();

// Expresión - Anonimas

var miFuncion = function(a,b) {
  return a + b;
}

miFuncion();

// Ejemplos:

function saludarEstudiantes(estudiante) {
  console.log(`Hola ${estudiante}`);
}

// Con el ejemplo anterior se puede conectar a una DB