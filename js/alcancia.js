let dinero, marranito=0, veces=0;
let resp=true;
while (resp==true) {
    dinero= prompt("Ingrese la cantidad a guardar");
    marranito= parseInt(marranito) + parseInt(dinero);
    veces=parseInt(veces)+1;



    resp=confirm("Desea confirmar");

    alert(`su cantidad de dinero altual es ${marranito}`);
    alert(`la cantidad de veces que se repite es ${veces}`);
}