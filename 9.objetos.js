//convertir u objeto fisico a codigo!

var miAuto={
    marca:"toyota",
    modelo:"Corolla",
    annio:2020,
    detalleDelAuto: function(){
        console.log("Auto"+ this.modelo, this.annio )
    } 
};

//traer valores del objeto
miAuto.marca
miAuto.annio
miAuto.detalleDelAuto();


//generar un template de un objeto para generar sus valores
//objetos de forma más profesional! 
//función constructora!
var autoNuevo=new auto("Tesla","Model 3",2020);

function auto(marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}



var autos=[];
for(i=0; i<30;i++){
    autos.push(new auto("toyota" + i,"15",2020 ));
}