function verificar() {
    var ano = document.getElementById('nas')
    var data = new Date()
    var fano = data.getFullYear()

    if (ano.value == 0 || ano.value >= fano) {
        window.alert('ERRO')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = fano - Number(ano.value)
        var res = document.getElementById('res')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
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
}