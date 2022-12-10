function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        //Bom dia!
        img.src = 'manha.png'
        document.body.style.background = '#747E55'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'tarde.png'
        document.body.style.background = '#E46F11'
    } else {
        //Boa noite!
        img.src = 'noite.png'
        document.body.style.background = '#0D3D85'
    }
}

