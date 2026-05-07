let msg = document.getElementById('msg')
let img = document.getElementById('img')
let hora = new Date().getHours()


if (hora >= 5 && hora <= 11) {
    msg.innerHTML = 'Bom dia!'
    img.src = 'imagens/manha.png'
} else if (hora >= 12 && hora <= 17) {
    msg.innerHTML = 'Boa Tarde!'
    img.src = 'imagens/tarde.png'
} else if (hora >= 18 && hora <= 23){
    msg.innerHTML = 'Boa Noite!'
    img.src = 'imagens/noite.png'
} else {
    msg.innerHTML = 'Boa Madruga!'
}




