// Reto: Piedra, Papel o Tijer

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3) {
            console.log("el usuario GANO con "+ op1)
        } elseif(user === op2 && cpu === op1) {
            console.log( "el usuario GANO con " + op2)
        } elseif(user === op3 && cpu === op2) {
            console.log("el usuario GANO con " + op3)
        } else {
            console.log("La CPU Gano!!")
        }
    } elseif(user === cpu){
        console.log("Empate")
    }
};

resultado(op1,op3) // El usuario GANO con Piedra