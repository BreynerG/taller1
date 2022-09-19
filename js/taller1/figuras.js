/*Acceder al botón para abrir el modal */

let abrper=document.getElementById("apcirculo")
let abrperc=document.getElementById("apcuadrado")
let abrperr=document.getElementById("aprectangulo")
let abrpert=document.getElementById("aptriangulo")

let abrare=document.getElementById("acirculo")
let abrarec=document.getElementById("acuadrado")
let abrarer=document.getElementById("arectangulo")
let abraret=document.getElementById("atriangulo")

//Acceder ventana modal
let calPerC=document.getElementById("PeCirculo")
let calPerCu=document.getElementById("PeCuadrado")
let calPerR=document.getElementById("PeRectangulo")
let calPerT=document.getElementById("PeTriangulo")

let ArCirculo=document.getElementById("ArCirculo")
let ArCuadrado=document.getElementById("ArCuadrado")
let ArRectangulo=document.getElementById("ArRectangulo")
let ArTriangulo=document.getElementById("ArTriangulo")

//Acceder al botón Cerrar de la ventana modal
let cerper=document.getElementById("cerrarP")
let cerperc=document.getElementById("cerrarPc")
let cerperr=document.getElementById("cerrarPr")
let cerpert=document.getElementById("cerrarPt")

let cerare=document.getElementById("cerrarA")
let cerarec=document.getElementById("cerrarAc")
let cerarer=document.getElementById("cerrarAr")
let ceraret=document.getElementById("cerrarAt")

//ventana modal circulo
//perimetro
abrper.addEventListener("click",()=>{
    calPerC.style.display="block";
})

cerper.addEventListener("click",()=>{
    calPerC.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==calPerC){
    calPerC.style.display="none"; 
}
})

//Area
abrare.addEventListener("click",()=>{
    ArCirculo.style.display="block";
})

cerare.addEventListener("click",()=>{
    ArCirculo.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==ArCirculo){
    ArCirculo.style.display="none"; 
}
})

//ventana modal Cuadrado
//perimetro
abrperc.addEventListener("click",()=>{
    calPerCu.style.display="block";
})

cerperc.addEventListener("click",()=>{
    calPerCu.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==calPerCu){
    calPerCu.style.display="none"; 
}
})

//Area
abrarec.addEventListener("click",()=>{
    ArCuadrado.style.display="block";
})

cerarec.addEventListener("click",()=>{
    ArCuadrado.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==ArCuadrado){
    ArCuadrado.style.display="none"; 
}
})

//ventana modal Rectangulo
//perimetro
abrperr.addEventListener("click",()=>{
    calPerR.style.display="block";
})

cerperr.addEventListener("click",()=>{
    calPerR.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==calPerR){
    calPerR.style.display="none"; 
}
})

//Area
abrarer.addEventListener("click",()=>{
    ArRectangulo.style.display="block";
})

cerarer.addEventListener("click",()=>{
    ArRectangulo.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==ArRectangulo){
    ArRectangulo.style.display="none"; 
}
})

//ventana modal Triangulo
//perimetro
abrpert.addEventListener("click",()=>{
    calPerT.style.display="block";
})

cerpert.addEventListener("click",()=>{
    calPerT.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==calPerT){
    calPerT.style.display="none"; 
}
})

abraret.addEventListener("click",()=>{
    ArTriangulo.style.display="block";
})

ceraret.addEventListener("click",()=>{
    ArTriangulo.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==ArTriangulo){
    ArTriangulo.style.display="none"; 
}
})

//Circulo

    let btnP=document.getElementById("btnP")

    btnP.addEventListener("click", (e)=>{
        let radio=parseInt(document.getElementById("radio1").value)
        const rta=document.getElementById("resultado")
        let text
        
        e.preventDefault()

        let opr=2*radio*3.14

        text=`<p>El resultado es ${opr} </p>`
        rta.innerHTML=text
    })

    let btnA=document.getElementById("btnA")

    btnA.addEventListener("click", (e)=>{
        let radio=parseInt(document.getElementById("radio2").value)
        const rta=document.getElementById("resultado2")
        let text
        
        e.preventDefault()

        let opr=radio*radio*3.14

        text=`<p>El resultado es ${opr} cm<sup>2</sup></p>`
        rta.innerHTML=text
    })

//Cuadrado

let btnPc=document.getElementById("btnPc")

btnPc.addEventListener("click", (e)=>{
    let lado=parseInt(document.getElementById("lado1").value)
    const rta=document.getElementById("resultado3")
    let text
    
    e.preventDefault()

    let opr=4*lado

    text=`<p>El resultado es ${opr} </p>`
    rta.innerHTML=text
})

let btnAc=document.getElementById("btnAc")

btnAc.addEventListener("click", (e)=>{
    let lado=parseInt(document.getElementById("lado2").value)
    const rta=document.getElementById("resultado4")
    let text
    
    e.preventDefault()

    let opr=lado*lado

    text=`<p>El resultado es ${opr} cm<sup>2</sup></p>`
    rta.innerHTML=text
})

//Rectangulo

let btnPr=document.getElementById("btnPr")

btnPr.addEventListener("click", (e)=>{
    let alto=parseInt(document.getElementById("alto").value)
    let ancho=parseInt(document.getElementById("ancho").value)
    const rta=document.getElementById("resultado5")
    let text
    
    e.preventDefault()

    let opr=2*alto+2*ancho

    text=`<p>El resultado es ${opr} </p>`
    rta.innerHTML=text
})

let btnAr=document.getElementById("btnAr")

btnAr.addEventListener("click", (e)=>{
    let alto=parseInt(document.getElementById("alto2").value)
    let ancho=parseInt(document.getElementById("ancho2").value)
    const rta=document.getElementById("resultado6")
    let text
    
    e.preventDefault()

    let opr=ancho*alto

    text=`<p>El resultado es ${opr} cm<sup>2</sup></p>`
    rta.innerHTML=text
})

//triangulo

let btnPt=document.getElementById("btnPt")

btnPt.addEventListener("click", (e)=>{
let base=parseInt(document.getElementById("base").value)
let altura=parseInt(document.getElementById("altura").value)
const rta=document.getElementById("resultado7")
let text

e.preventDefault()

let opr=2*altura+base

text=`<p>El resultado es ${opr} </p>`
rta.innerHTML=text
})

let btnAt=document.getElementById("btnAct")

btnAt.addEventListener("click", (e)=>{
    let base=parseInt(document.getElementById("base2").value)
    let altura=parseInt(document.getElementById("altura2").value)
    const rta=document.getElementById("resultado8")
    let text

e.preventDefault()

let opr=base*altura/2

text=`<p>El resultado es ${opr} cm<sup>2</sup></p>`
rta.innerHTML=text
})