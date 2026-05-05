const ano = new Date().getFullYear()
const nas = document.getElementById('nas')
const fsex = document.getElementsByName('sex')
const res = document.getElementById('res')



document.getElementById('btn').addEventListener('click', () => {

    let idade = ano - Number(nas.value)
    res.innerHTML = ''
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')


    if (nas.value.length == 0 || nas.value.length >= ano) {
        window.alert('boa')

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
                img.setAttribute('src', 'imagens/idoso-m.png')
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
        res.innerHTML += `Detectamos ${genero} e ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
})

