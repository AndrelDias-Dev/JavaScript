let num = document.getElementById('num')
let anoAtual = new Date().getFullYear()
let res = document.getElementById('res')

document.getElementById('btn').addEventListener('click', () => {
    

    if (num.value.length == 0 || num.value >= anoAtual) {
        window.alert('Erro')
    } else {
        let genero = ''
        let idade = anoAtual - Number(num.value)
        let fsex = document.getElementsByName('sex')
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 5 && idade <= 10) {
                img.setAttribute('src', 'imagens/bebe-h.png')
            } else if (idade <= 25) {
                img.setAttribute('src', 'imagens/jovem-h.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'imagens/adulto-h.png')
            } else {
                img.setAttribute('src', 'imagens/idoso-h.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 5 && idade <= 10) {
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade <= 25) {
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        }
        res.innerHTML = `Detectamos ${idade} anos e ${genero}.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
})