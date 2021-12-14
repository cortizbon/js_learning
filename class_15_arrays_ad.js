var articulos = [
    {nombre:'Bici',costo:3000},
    {nombre:'Tv', costo:4000},
    {nombre:'Libro', costo:10000},
    {nombre:'Celular',costo:2000},
];

// método filter (crear un nuevo array cumpliendo la condición)

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 4000
})

// método map (crear un nuevo array después de ejecutar la función)

var nombreArticulos = articulos.map(function(articulos){
    return articulos.nombre
});

// método find 

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === 'Tv'
});

// método foreach

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// método some (verificar si se cumple una condición o no en el array)

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo < 3000;
});