//solo se aplica hoisting a las palabras function
//var, let y const

console.log(miNombre);

var miNombre = "Carlos";

//podría entregar un error pero lo que pasa es lo siguiente

var miNombre = undefined;

console.log(miNombre);

//esto también pasa con las funciones

