function calcular(){
    let num=parseInt(document.getElementById("num").value);
    let num2=parseInt(document.getElementById("num1").value);
    let num3=parseInt(document.getElementById("num2").value);

    if (num==num2 && num2==num3) {
        window.alert("El triangulo es Equilatero");
    }
    else if (num==num2 && num2!=num3) {
        window.alert("El triangulo es isosceles");
    }
    else if (num==num3 && num!=num2) {
        window.alert("El triangulo es isosceles");
    }
    else if (num2==num3 && num!=num2) {
        window.alert("El triangulo es isosceles");
    }
    else if (num!=num2 && num2!=num3) {
        window.alert("El triangulo es Escaleno");
    }
    else{
        alert("ERORR!!!")
    }
}