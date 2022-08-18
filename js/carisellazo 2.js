//Declarar la funcion por declaracion
/*function lanzarmoneda() {
    let moneda = Math.floor((Math.random() * 2) + 1);
    return moneda;
}
//Invocar la función con valor de retorno
console.log(`El lanzamiento fue ${lanzarmoneda()}`);
let lanzamiento=lanzarmoneda();
console.log(`El lanzamiento fue ${lanzamiento}`);*/

//Función con parámetros (expresion)
let lanzar=function lanzarmoneda(){
    let moneda = Math.floor((Math.random() * 2) + 1);
    return moneda;
}

//Invocar la Función
let lanzamiento=lanzar();


/*//función con parámetros
function ganar(saldo, apuesta) {
    saldo = saldo + (apuesta * 2);
    return saldo;
}*/

//Función con parámetros (anonima)
let ganar=function(saldo, apuesta) {
    saldo = saldo + (apuesta * 2);
    return saldo;
}
//Invocar la función
//ganar(saldo, apuesta);

/*function perder(saldo, apuesta) {
    saldo = saldo - apuesta;
    return saldo;
}*/

//función con parametros (arrow)
let perder=(saldo, apuesta)=>{
    saldo = saldo - apuesta;
    return saldo;
}

/* Invocar la funcion
perder(saldo, apuesta); */

//Invocar la funcion y enviar argumentos segun corresponda
//ganar(saldo, apuesta);
//perder(saldo, apuesta);

let seguir = true;
let saldo = 0;
let jugador = prompt("Ingrese el nombre del jugador");
saldo = parseInt(prompt("Cuanto deseas recargar para jugar"));
while (seguir == true) {
    let eleccion = prompt(`${jugador} Elige 1. Cara 2. Sello`);
    let apuesta = parseInt(prompt(`De tu saldo actual ${saldo} ¿cuanto deseas apostar`));
    let lanzamiento = lanzar();
    if (lanzamiento == 1 && eleccion == 1) {
        saldo = ganar(saldo, apuesta);
        console.log(`El lanzamiento fue Cara Escogiste Cara Tú GANAS!!!, tu nuevo saldo es ${saldo}`);
    }
    else if (lanzamiento == 2 && eleccion == 2) {
        saldo = ganar(saldo, apuesta);
        console.log(`El lanzamiento fue Sello Escogiste Sello Tú GANAS!!!, tu nuevo saldo es ${saldo}`);
    }
    else if (lanzamiento == 1 && eleccion == 2) {
        saldo = perder(saldo, apuesta);
        console.log(`El lanzamiento fue Cara Escogiste Sello Tú PIERDES!!!, tu nuevo saldo es ${saldo}`);
    }
    else if (lanzamiento == 2 && eleccion == 1) {
        saldo = perder(saldo, apuesta);
        console.log(`El lanzamiento fue Sello Escogiste Cara Tú PIERDES!!!, tu nuevo saldo es ${saldo}`);
    }

    seguir=confirm("Desea jugar otra vez");
}