console.log("Hola mundo");

let numero = 25;
/*console.log("El numero es ",numero);
console.log(`El numero es ${numero}`);

let nombre="Breyner";
console.log(`Su nombre es ${nombre}`);

let verdad=false;
console.log(`La respuesta es ${verdad}`);

let sena="";
console.log(`Contiene ${sena}`);

let res=numero+5;
console.log(`El resultado es ${res}`);
console.log(`El resultado es ${numero+5}`);*/


//window.alert("Esto es una alerta");
//window.confirm("Estas seguro de que bla bla bla");
let estado = window.confirm("Estas seguro de bla bla bla");
console.log(`La ventana arrojo ${estado}`);

/*let num1=prompt("Digite el primer numero");
let res=numero+parseInt(num1);
console.log(`El resultado es ${res}`);*/


//Suma de 2 numeros
let num1 = prompt("Digite el primer numero");
let num2 = prompt("Digite el segundo numero");
let resu = parseInt(num1); +parseInt(num2);
console.log(`El resultado es ${resu}`);


//Condicionales
if (num1 > num2) {
    console.log(`El numero ${num1} es mayor que ${num2}`)
} else {
    console.log(`El numero ${num1} es menor que ${num2}`)
}

//operador ternario

/*let nummayor = (num1 > num2)
    ? "El numero mayor es el primero"
    : "El numero mayor es el segundo"

console.log(nummayor);*/


//Condicionales condicion compuesta

/*let usuario = prompt("Digite su correo");
let password = prompt("Digite su contraseña");

if (usuario == "breyner@gmail.com" && password == "breyy24") {
    alert("Bienvenido");
} else
    if (usuario == "breyner@gmail.com" && password != "breyy24") {
        alert("Verifique su password");
    } else
        if (usuario != "breyner@gmail.com" && password == "breyy24") {
            alert("Verifique su usuario");
        } else
            if (usuario != "breyner@gmail.com" && password != "breyy24") {
                alert("Credenciales de acceso incorrectas");
            }*/


//condicional multiple

let opcion = prompt("Escoja su opcion");
let res=opcion;

switch (res) {
    case opcion="suma":
        res = (parseInt(num2) + parseIn(num1));
        console.log(`El resultado es ${res}`);
        break;
    case opcion="resta":
        res = (parseInt(num1) - parseInt(num2));
        console.log(`El resultado es ${res}`);
        break;
    case opcion="multiplicacion":
        res = (parseInt(num1) * parseInt(num2));
        console.log(`El resultado es ${res}`);
        break;
    case opcion="division":
        res = (parseInt(num1) / parseInt(num2));
        console.log(`El resultado es ${res}`);
        break;
    case opcion="potenciacion":
        res = (parseInt(num1) ** parseInt(num2).toFixed(res));
        console.log(`El resultado es ${res}`);
        break;
    case opcion="raiz cuadrada":
        let raiz = prompt("Digite un numero para saber su raiz cuadrada");
        res = Math.sqrt(raiz).toFixed(res);
        console.log(`El resultado es ${res}`);
        break;
    default:
        alert("Opcion invalida");
        break;
}

/*condicional multiple
for (let i = 0; i < 5; i++) {
    console.log("Hola soy jennifer");
}

let repeticion = prompt("Para continuar digite 1, 2 para salir");
while (repeticion == 1) {
    
}*/


