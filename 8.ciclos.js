var estudiantes= [ "María","Juan","Pepe","Rosa"];

//for
function saludarEstudiantes(estudiante) {
    console.log('Hola, '+estudiante )
}

for(var i=0; i<estudiantes.length;i++){
    saludarEstudiantes(estudiantes[i]);
}


//for each


var estudiantes= [ "María","Juan","Pepe","Rosa"];

function saludarEstudiantes(estudiante) {
    console.log('Hola, '+estudiante )
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}


//while
var estudiantes= [ "María","Juan","Pepe","Rosa"];

while(estudiantes.length>0){
    console.log(estudiantes);
    var estudiante= estudiantes.shift();
    saludarEstudiantes(estudiante);
}