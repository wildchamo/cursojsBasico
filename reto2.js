    var usuario=" ";
    var cpu=" ";

    switch(usuario){
        case "tijeras":
            switch(cpu){

                case "tijeras":
                    console.log("empate")
                    break
                case "piedra":
                    console.log("pierdes")        
                    break
                case "papel":
                    console.log("ganas")
                    break
            }
        break;
        case "piedra":
                switch(cpu){
        
                    case "tijeras":
                        console.log("ganas")
                        break
                    case "piedra":
                        console.log("empate")        
                        break
                    case "papel":
                        console.log("pierdes")
                        break
                }
        case "papel":
            switch(cpu){
        
                case "tijeras":
                    console.log("pierdes")
                    break
                case "piedra":
                    console.log("ganas")        
                    break
                case "papel":
                    console.log("empate")
                    break
            }
        break
    }