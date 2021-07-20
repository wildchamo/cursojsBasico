var p= "piedra";
var t="tijera";
var pa="papel";

function emp(user,cpu) {
if(user=== cpu){
    console.log("Hubo un empate!")
}
else if(user== "piedra" && cpu=="papel"){
    console.log("gana la cpu");
}else if(user=="papel" && cpu=="tijera"){
    console.log("gana la cpu!")
}else if(user=="tijera"&& cpu=="piedra"){
    console.log("gana la cpu!")
}
else(console.log("ganaste!"))
}



