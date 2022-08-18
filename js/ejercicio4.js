console.log(document.getElementById("features"));
console.log(document.querySelector(".feature"));
console.log(document.querySelectorAll("p")[1]);
//document.querySelectorAll("p").forEach((el)=>)

console.log(document.querySelector("a").getAttribute("href"))
document.querySelector("a").setAttribute("href","https://www.youtube.com")

const mi=document.querySelector("#features");
mi.style.setProperty("color","#FF0000");
mi.style.setProperty("width","500px");
mi.style.setProperty("height","500px");
mi.style.setProperty("background-color","#2874A6 ");

const $mic=document.querySelector(".miclase");

let text=`<p>
El dom es bla bla
</p>
<p>
Se puede acceder y modificar
</p>
`
//$mic.textContent=text
$mic.innerHTML=text

const img=document.createElement("img");
img.src = "https://acnews.blob.core.windows.net/imgnews/paragraph/NPAZ_80dc32ac7c33429bb1925a95ab3f4576.jpg";

document.body.appendChild(img);

const $caja=document.createElement("div");
$caja.innerHTML="<img src='img/arcangel.jpg'>"

$mic.appendChild($caja);

//$caja.remove();