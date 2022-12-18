function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12) {
        //Bom dia 
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#a6abaa'
    } else if (hora >= 12 && hora < 18) {

        //Bom dia 
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#bb5b25'
    } else {

        //Boa noite!
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = '#3d2b67'
    }

}
