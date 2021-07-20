var frutas = ["Manzana","Plátano","Cereza","Fresa"];

console.log(frutas);


console.log(frutas.length);  //ver cuantos elementos tiene

console.log(frutas[2]); //ver el elemento enespecifico de esta posición

// 0 1 2 3 orden!

var masfrutas= frutas.push("Uvas"); //poner un elemento al final

var ultimo= frutas.pop("Uvas"); //explotar el ultimo elemento 

var nuevaLongitud= frutas.unshift("Pera");  //poner un elemento de primero 

var borrarFruta= frutas.shift("Uvas"); //borrar la primera posición 

var posicion= frutas.indexOf("Cereza"); //ver en que posición esta algo
