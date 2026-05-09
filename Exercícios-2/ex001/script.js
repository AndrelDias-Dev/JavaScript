const msg = document.getElementById('msg')
const img = document.getElementById('img')
let hora = new Date().getHours()


if (hora >= 6 && hora <= 11) {
    msg.innerHTML = 'Bom dia!'
    img.src = 'imagens/manha.png'
} else if (hora >= 12 && hora <= 18) {
    msg.innerHTML = 'Bom tarde!'
    img.src = 'imagens/tarde.png'
} else {
    msg.innerHTML = 'Bom noite!'
    img.src = 'imagens/noite.png'
}
