function carregar() {
    var img = document.getElementById('imagem')
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()

    if (hora >= 5 && hora < 12) {
        msg.innerHTML = `São ${hora} horas agora, Bom dia!`
    } else if (hora < 18) {
       msg.innerHTML = `São ${hora} horas agora, Boa tarde!`
       img.src = 'imagens/tarde.png'
    } else if (hora <= 24) {
        msg.innerHTML = `São ${hora} horas agora, Boa noite`
        img.src = 'imagens/noite.png'
    } else {
        msg.innerHTML = `São ${hora} horas agora, Boa Madrugada`
    }
}
