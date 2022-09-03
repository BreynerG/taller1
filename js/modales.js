/*Acceder al boton para abrir el modal*/

let btnmodal=document.getElementById("abrirModal");

//Acceder ventana modal
let venmodal=document.getElementById("ventanaModal");

//Accerder a la clase boton cerrar de la ventana
let cermodal=document.querySelector(".cerrarModal");

btnmodal.addEventListener("click",()=>{
    venmodal.style.display="block";
})

cermodal.addEventListener("click",()=>{
    venmodal.style.display="none";
})

window.addEventListener("click",(e)=>{
    if(e.target==venmodal){
        venmodal.style.display="none";
    }
})