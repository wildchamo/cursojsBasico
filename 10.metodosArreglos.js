var articulos =[
    {nombre:"Bici", costo:3000},
    {nombre:"Tv",costo:2500},
    {nombre:"Libro",costo:320},
    {nombre:"Celular",costo:10000},
    {nombre:"Pc",costo:20000}
]

//filter: filtrar ciertas cosas, validar si algo es verdad o no y lo mete en un nuevo arreglo

var articulosFiltrados= articulos.filter(function(articulo){
    return articulo.costo<=500;
});

//trae un arreglo de una propiedad en especifico!
var nombreArticulos=articulos.map(function(articulo){
    return articulo.nombre;
});

//find: encontrar algo dentro del arreglo

var encuentraArticulo= articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
})

//foreach!
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

//find devuelve solo el primer elemento!

//metodo some: devuelve verdadero o falso para cierta validación 
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=700;
})

//recorrer arreglos!!!! 