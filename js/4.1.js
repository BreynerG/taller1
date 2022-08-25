let opciones=document.getElementById("opciones");
let resp=document.getElementById("respuesta");
opciones.addEventListener('click',(e)=>{
    
    e.preventDefault();
    if (e.target.id=="opcion1") {
        resp.innerHTML=`Respuesta incorrecta`;
        resp.classList.add("incorrecto");
    } else if (e.target.id=="opcion2"){
        resp.innerHTML=`Respuesta incorrecta`;
        resp.classList.add("incorrecto");
    } else if (e.target.id=="opcion3"){
        resp.innerHTML=`Respuesta correcta`;
        resp.classList.add("correcto");
    } else if (e.target.id=="opcion4"){
        resp.innerHTML=`Respuesta incorrecta`;
        resp.classList.add("incorrecto");
    } 
})
