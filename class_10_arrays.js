//ARRAY: estructura de dato mutable

// se puede guardar cualquier tipo de datos

var frutas = ['Manzana','pera','anon','cereza','fresa'];

// acceder al array

console.log(frutas);

console.log(frutas[0]); //imprime Manzana
console.log(frutas[3]); //imprime cereza

// longitud del array

console.log(frutas.length);

//MÉTODOS 

//agregar un elemento

frutas.push('Uva')

//eliminar el último elemento

frutas.pop()

//agregar un elemento a la primera posicion

frutas.unshift() 
//borrar el primer elemento de un array
frutas.shift()

//preguntar por el índice

frutas.indexOf() //debe ingresarse un elemento

// ordenar el array, el orden tiene un sentido más alfabético que numérico

frutas.sort()
