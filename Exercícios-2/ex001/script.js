function carregar() {
    var img = document.getElementById('img')
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()

    if (hora >= 5 && hora <= 11) {
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        document.body.style.background = 'green'
    } else if (hora <= 18) {
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        img.src = 'imagens/tarde.png'
        document.body.style.background = 'orange'
    } else {
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        img.src = 'imagens/noite.png'
        document.body.style.background = 'black'
    }
}