const btn=document.getElementById("button");
const ops=document.getElementById("ops");
const rta=document.getElementById("respuesta");

if(e.target.id==suma){
    let text=`<p>
<img src="img/accept.png">
</p>
`
rta.innerHTML=texto;
} else if(e.target.id==resta) {
    let text=`<p>
<img src="img/cross.png">
</p>
`
rta.innerHTML=texto;
}

ops.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e.target);
    consol.log(e.target.id)
    let o=document.getElementById("ops").value;
}) 



function calcular(){
    btn.addEventListener('click', calcular);
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let op=document.getElementById("operacion").value;
    if (op==1) {
        let res=num1+num2;
        alert(`El numero 1 es ${num1} y el numero 2 ${num2} la suma es ${res}`);
    } else if (op==2) {
        let res=num1-num2;
        alert(`El numero 1 es ${num1} y el numero 2 ${num2} la resta es ${res}`);
    } else if (op==3) {
        let res=num1*num2;
        alert(`El numero 1 es ${num1} y el numero 2 ${num2} la Multiplicación es ${res}`);
    } else if (op==4) {
        let res=num1/num2;
        alert(`El numero 1 es ${num1} y el numero 2 ${num2} la Divisón es ${res}`);
    } else {
        alert("No seleccionaste un numero")
    }
}