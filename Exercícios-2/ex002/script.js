function verificar() {
    var num = document.getElementById('ano')
    var data = new Date()
    var ano = data.getFullYear() 

    if (num.value.length == 0 || num.value.length >= ano) {
        window.alert('ERRO')
    } else {
        var idade = ano - Number(num.value)
        var genero = ''
        var res = document.getElementById('res')
        var fsex = document.getElementsByName('sex')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.width = 300

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
            } else if (idade <= 25){
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade <= 50) {
                img.setAttribute('src','imagens/adulto-m.png')
            } else {
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        }
        res.innerHTML = `Detectamos ${idade} anos e ${genero}`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}