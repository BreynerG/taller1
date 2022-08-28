const rta = document.getElementById('respuesta')

ops.addEventListener('click', (e) => {
    e.preventDefault()
    let name = document.getElementById('name').value
    let ape = document.getElementById('apellido').value
    let act = document.getElementById('actividad').value
    let text



    if (name == '1' && ape == '1' && act == '1') {

        rta.style.setProperty('color', '#1fff02')
        rta.style.setProperty('font-size', '1.5rem')
        text = `<p><i class="fa-solid fa-check"></i></i></p>
        <p>Tu respuesta es correcta</p>`
        rta.innerHTML = text



    } else if (name == '2' && ape == '2' && act == '2') {

        rta.style.setProperty('color', '#1fff02')
        rta.style.setProperty('font-size', '1.5rem')
        text = `<p><i class="fa-solid fa-check"></i></i></p>
        <p>Tu respuesta es correcta</p>`
        rta.innerHTML = text


    } else if (name == '3' && ape == '3' && act == '3') {

        rta.style.setProperty('color', '#1fff02')
        rta.style.setProperty('font-size', '1.5rem')
        text = `<p><i class="fa-solid fa-check"></i></i></p>
        <p>Tu respuesta es correcta</p>`
        rta.innerHTML = text


    } else if (name == '4' && ape == '4' && act == '4') {

        rta.style.setProperty('color', '#1fff02')
        rta.style.setProperty('font-size', '1.5rem')
        text = `<p><i class="fa-solid fa-check"></i></i></p>
        <p>Tu respuesta es correcta</p>`
        rta.innerHTML = text

    } else if (name == '5' && ape == '5' && act == '5') {

        rta.style.setProperty('color', '#1fff02')
        rta.style.setProperty('font-size', '1.5rem')
        text = `<p><i class="fa-solid fa-check"></i></i></p>
        <p>Tu respuesta es correcta</p>`
        rta.innerHTML = text


    } else if (name == '6' && ape == '6' && act == '6') {

        rta.style.setProperty('color', '#1fff02')
        rta.style.setProperty('font-size', '1.5rem')
        text = `<p><i class="fa-solid fa-check"></i></i></p>
        <p>Tu respuesta es correcta</p>`
        rta.innerHTML = text


    } else if (name == '7' && ape == '7' && act == '7') {

        rta.style.setProperty('color', '#1fff02')
        rta.style.setProperty('font-size', '1.5rem')
        text = `<p><i class="fa-solid fa-check"></i></i></p>
        <p>Tu respuesta es correcta</p>`
        rta.innerHTML = text

    } else {

        rta.style.setProperty('color', '#ff0000')
        rta.style.setProperty('font-size', '1.5rem')
        text = `<p><i class="fa-solid fa-xmark"></i></p>
        <p>repuesta incorrecta</p>`
        rta.innerHTML = text

    }

})