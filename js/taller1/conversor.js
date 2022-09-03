function convertir(){
    let res=parseInt(document.getElementById("num").value);
    let op=parseInt(document.getElementById("operacion").value);
    let op2=parseInt(document.getElementById("operacion2").value);


    if (op==1 && op2==5) {
        let r1=(res*(9/5))+32;
        alert(`La conversion de Fahrenheit a Celsius es ${r1}°C`);
    }
    else if (op==1 && op2==6) {
        let r2=(res-32)*(5/9)+273.15;
        alert(`La conversion de fahrenheit a Kelvin es ${r2}K`);

    }
    else if (op==2 && op2==4) {
        let r3=(res*(9/5))+32;
        alert(`La conversion de Celsius a Fahrenheit es ${r3}°F`);
    
    }
    else if (op==2 && op2==6) {
        let r4=res+273.15;
        alert(`La conversion de Celsius a Kelvin es ${r4}K`);
    }
    else if (op==3 && op2==4) {
        let r5=(res-273.15)*(9/5)+32;
        alert(`La conversion de Kelvin a Fahrenheit es ${r5}°F`);
    }
    else if (op==3 && op2==5) {
        let r6=res-273.15;
        alert(`La conversion de Kelvin a Celsius es ${r6}°C`);
    }
    else{
        alert("No seleccionaste una opcion valida")
    }
}