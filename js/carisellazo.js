let total=0, contador=0, apuesta, resultado, subtotal, a;

a=1;

console.log("Cara o sello");

while (a==1) {
    
    var aleatorio = Math.ceil(Math.random()*2);

    console.log(aleatorio);



    //var aleatorio = Math.floor(Math.random()*2);
    //console.log(aleatorio);
    //var alzar = Math.random(aleatorio)*2+1;
    //aleatorio = (parseInt(alzar)*2+1);
    alert("la maquina lanzo la moneda");
    resultado = prompt("Escoje: 1.cara 2.sello");

    apuesta = prompt("Cuanto deseas apostar");

    if (aleatorio==1 && resultado==1) {
        subtotal=parseInt(apuesta)*2;
        alert("Cayo cara ganaste");

        total=parseInt(total)+parseInt(subtotal);
        alert(`El saldo es ${subtotal}`);
        contador=parseInt(contador) + 1;

        a = prompt("Desea continuar precione 1, de lo contrario precione 2");

    }else if (aleatorio==1 && resultado==2){
        subtotal=parseInt(apuesta)-parseInt(apuesta);
        alert("cayo cara perdiste");

        total=parseInt(total)+parseInt(subtotal);
        alert(`El saldo es ${subtotal}`);
        contador=parseInt(contador) + 1;

        a = prompt("Desea continuar precione 1, de lo contrario precione 2");

    }else if (aleatorio==2 && resultado==2){
        subtotal=parseInt(apuesta)*2;
        alert("cayo sello ganaste");
        
        total=parseInt(total)+parseInt(subtotal);
        alert(`El saldo es ${subtotal}`);
        contador=parseInt(contador) + 1;

        a = prompt("Desea continuar precione 1, de lo contrario precione 2");
    }else if(aleatorio==2 && resultado==1){
        subtotal=parseInt(apuesta)-parseInt(apuesta);
        alert("cayo sello perdiste");

        total=parseInt(total)+parseInt(subtotal);
        alert(`El saldo es ${subtotal}`);
        contador=parseInt(contador) + 1;

        a = prompt("Desea continuar precione 1, de lo contrario precione 2");
    }else{
        alert("Esta opcion no es correcta");
        a = prompt("Desea continuar precione 1, de lo contrario precione 2");
    }
    alert(`Su saldo es ${total}`);
    alert(`Partidas jugadas ${contador}`);
}
