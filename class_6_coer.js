var a = 4 + "7"

typeof a //"string"

var b = 4 * "7"

typeof b // number

String() //convertir un dato en string

Number() //convertir un dato en número

Boolean() //convertir un dato en booleano

//Truthy y Falsy

// Si no hay un valor en la función, es falso
// Si tiene un cero, el resultado es falso
// Si tiene un número mayor a cero, el resultado es verdadero
// Si se escribe null, entrega falso
// Si se escribe NaN, entrega falso
// Si se escribe undefined, entrega falso
// Si se escriben comillas solas, entrega falso
// Si se escribe cualquier caracter, incluso un espacio vacío, entrega verdadero
// Un array, verdadero
// Un objeto, verdadero
// Una función, verdadero