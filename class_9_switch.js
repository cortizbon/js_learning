var numero = 1;

switch (numero){
    case 1: //valida si la variable número es igual a 1
        console.log('Soy uno');
        break //detiene la validación
    case 10: //valida si la variable número es igual a 10
        console.log('Soy un 10');
        break;
    case 100: //valida si la variable número es igual a 100
        console.log('Soy un 100');
        break;
    default: // si no se cumple ninguno de los anteriores entra aquí
        console.log('No soy nada');
}