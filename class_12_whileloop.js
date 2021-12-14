var nombres = ['A','B','C','D']

function saludarEstudiante(estudiante){
    console.log(`Hola ${estudiante}`);
}

while (nombres.length > 0){
    var estudiante = nombres.shift();
    saludarEstudiante(estudiante);
}