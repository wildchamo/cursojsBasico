//procedimiento o tareas para usar valores y regresar otra cosa
//hay funciones declarativas y de expresión 

//declrrativa
function miFuncion(){
    return 3;
}

//expresión
var miFuncion=function(a,b){  //función anonima!
    return 'esto es una función expresiva! ${a+b}';
}


miFuncion(1,2);



function Suma(a,b){
    var resultado=a+b;
    return resultado;
}