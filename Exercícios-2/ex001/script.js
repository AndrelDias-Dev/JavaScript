document.addEventListener('DOMContentLoaded', () => {
    const msg = document.getElementById('msg');
    const img = document.getElementById('img');
    const hora = new Date().getHours();

    if (hora >= 6 && hora <= 11) {
        msg.innerHTML = `Bom dia!`
        img.src = 'imagens/manha.png'
        document.body.style.background = 'blue'

    } else if (hora >= 12 && hora <= 17) {
        msg.innerHTML = `Boa tarde!`
        img.src = 'imagens/tarde.png'
        document.body.style.background = 'orange'
    } else if (hora <= 23) {
        msg.innerHTML = `Boa noite!`
        img.src = 'imagens/noite.png'
        document.body.style.background = 'black'
    } else {
        msg.innerHTML = `Boa madrugada!`
    }


})
