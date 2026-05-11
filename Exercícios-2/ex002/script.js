
const btn = document.getElementById('btn-form')


btn.addEventListener('click', () => {

    const num = document.getElementById('nas')
    const ano = new Date().getFullYear()
    const fsex = document.getElementsByName('sex')
    const res = document.getElementById('res')
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    genero = ''
    res.innerHTML = ''

    if (num.value.length == 0 || num.value >= ano) {
        window.alert('Error')
    } else {

        let idade = ano - Number(num.value)

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 5 && idade <= 12) {
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
            if (idade >= 5 && idade <= 12) {
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

