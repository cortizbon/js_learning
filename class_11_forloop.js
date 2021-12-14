var nombres = ['A','B','C','D'];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`)
}

for (var i = 0; i < nombres.length; i++){
    saludarEstudiante(nombres[i]);
}

for (var nombre of nombres){
    saludarEstudiante(nombre);
}