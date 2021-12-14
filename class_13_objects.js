var carro = {
    marca: 'Toyota',
    color: 'Rojo',
    annio: 2020,

    prender: function(){
        console.log(`Estas intentando prender un carro de color ${this.color}`)
    }
}

// llamar el objeto

carro

var x = carro;

// llamar los atributos o propiedades

carro.marca
carro.annio
carro.color

// llamar los métodos

carro.prender()

