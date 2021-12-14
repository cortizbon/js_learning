// declarativas

function miFuncion(){
    return 3
}

miFuncion();

// expresión (anónimas)

var miFuncion = function(){
    return 3
}

var miFuncion2 = function(a,b){
    return a + b
}

miFuncion2(3,4); //devolverá 7

console.log('Hola, mundo') //imprimir en consola

// formatear, seguramente tendrá condiciones asociadas al tipo de dato

function saludar(estudiante){
    console.log(`Hola ${estudiante}`)
}

// creación de variables al interior de una función, hay que ver el scope

function sumar(a,b){
    var resultado = a + b
    return resultado
}