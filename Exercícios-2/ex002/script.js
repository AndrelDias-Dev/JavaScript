function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if (hora >= 0 && hora < 5) {
        msg.innerHTML = `Agora são ${hora} horas. Boa Madrugada!`
        img.src = 'imagens/noite.png'
        document.body.style.background = 'black'
    } else if (hora >= 5 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
        img.src = 'imagens/manha.png'
        document.body.style.background = '#DFAA77'
    } else if (hora >= 12 && hora <= 17) {
        msg.innerHTML = `Agora são ${hora} horas. Boa Tarde!`
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#C19677'
    } else {
        msg.innerHTML = `Agora são ${hora} horas. Boa noite!`
        img.src = 'imagens/noite.png'
        document.body.style.background = 'black'
    }
}
