let ano = document.getElementById('num')
let fsex = document.getElementsByName('sex')
let anoAtual = new Date().getFullYear()
let btn = document.getElementById('btn')
let res = document.getElementById('res')
let genero = ''


btn.addEventListener('click', () => {
    let valor = ano.value

    if (valor.value < 4) {
        window('Digite um ano valído que contém 4 dígitos.')
        return
    }




    let idade = anoAtual - ano.value
    let img = document.createElement('img')
    img.setAttribute('id','foto')

    if (ano.value >= anoAtual || Number(ano.value) == 0) {
        window.alert('ERROR')
    } else {

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

        res.innerHTML = `Detectamos ${genero} e ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
})