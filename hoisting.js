// Hoisting: Llamamos una variable antes de declararla e inicializarla 
// "var" (solo la declaración), la "function" (por completo) y el "import" (por completo) "suben" hacia arriba del scope.
// Se modifica la forma en que JS interpreta nuestro codigo

// Lo que nosotros ponemos:
console.log(miNombre);

var miNombre = "Juan";

// Lo que enrealidad sucede por el Hoisting:

var miNombre;

console.log(miNombre); // Me devuelve un undefined

miNombre = "Juan"; // Recien aqui se inicializa la variable
