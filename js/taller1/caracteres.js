function palabra(){

    let palabra=document.getElementById('text1').value
    let op=parseInt(document.getElementById('operacion').value)

    if (op==1) {

        alert(`La palabra tiene una longitud de ${palabra.length}`)
        
    } else if (op==2) {
 
        alert(palabra.toUpperCase())
        
    } else if (op==3){

        alert(palabra.toLowerCase())

    } else if (op==4) {

        alert(palabra.charAt(0))
        
    }

}