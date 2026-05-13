const msg = document.getElementById('msg')
const img = document.getElementById('img')
const hora = new Date().getHours()

if (hora >= 5 && hora <= 11) {
    img.src = 'imagens/manha.png'
    msg.innerHTML = 'Bom dia!'
} else if (hora >= 12 && hora <= 17) {
    img.src = 'imagens/tarde.png'
    msg.innerHTML = 'Boa tarde!'
} else if (hora  >= 18 && hora <= 23) {
    img.src = 'imagens/noite.png'
    msg.innerHTML = 'Boa noite!'
} else {
    msg.innerHTML = 'Boa Madrugada!'
}