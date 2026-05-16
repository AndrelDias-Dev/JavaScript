let hora = new Date().getHours()
let msg = document.getElementById('msg')
let img = document.getElementById('img')

if (hora >= 5 && hora <= 11) {
    msg.innerHTML = 'Bom dia!'
    img.src = 'imagens/manha.png'
} else if (hora >= 12 && hora <= 17) {
    msg.innerHTML = 'Boa tarde!'
    img.src = 'imagens/tarde.png'
} else {
    msg.innerHTML = 'Boa noite!'
    img.src = 'imagens/noite.png'
}