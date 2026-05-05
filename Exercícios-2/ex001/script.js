document.addEventListener('DOMContentLoaded', () => {
    let msg = document.getElementById('msg');
    let img = document.getElementById('img');
    let hora = new Date().getHours();

    if (hora >= 5 && hora <= 11) {
        msg.innerHTML = 'Bom dia!'
        img.src = 'imagens/manha.png'
        document.body.style.background = 'green'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = 'Boa tarde!'
        img.src = 'imagens/tarde.png'
        document.body.style.background = 'orange'
    } else {
        msg.innerHTML = 'Boa noite!'
        img.src = 'imagens/noite.png'
        document.body.style.background = 'black'
    }
})
