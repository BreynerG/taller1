let marvel=['C.America','Hulk','Thor','Iron man','Ant man']
marvel.pop()

console.log(marvel[2]);
console.log(marvel.length);
let ultimo = marvel[marvel.length-1];
console.log(ultimo)

marvel.forEach (function(elemento,index,array){
    console.log(`position ${index} elemento ${elemento}`);
})

marvel.unshift('black panter')
marvel.shift();

marvel.splice(1,3)
console.log(marvel)



let aprendices=[];
let seguir = true;

while(seguir==true){
    aprendices.push(prompt('Ingrese el nombre del aprendiz'))

    seguir = confirm('desea ingresar otro valor');

}
 console.log(aprendices)
 aprendices.filter(aprendices=>aprendices=="breyner");


aprendices=[
    {primernombre:"Breyner", primerapellido:"Giral"},
    {primernombre:"Jennifer", primerapellido:"Fajardo"}
]
console.log(aprendices)

let nombrecompleto = aprendices.map(function(el,is,ar){
    return `${el.primernombre} ${el.primerapellido}`
})