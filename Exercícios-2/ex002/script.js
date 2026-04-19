function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ntx')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert(`[Erro] número inválido. Tente novamente.`)
    } else {
        var tsex = document.getElementsByName('tsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (tsex[0].checked) {
            genero = 'Homem'
            if (idade >= 5 && idade <= 10) {
                img.setAttribute('src', 'imagens/bebe-h.png')
            } else if (idade <= 25) {
                img.setAttribute('src', 'imagens/jovem-h.png')
            } else if (idade <= 50) {
                img.setAttribute('src','imagens/adulto-h.png')
            } else {
                img.setAttribute('src','imagens/idoso-h.png')
            }
        } else if(tsex[1].checked) {
            genero = 'Mulher'
           if (idade >= 5 && idade <= 10) {
                img.setAttribute('src', 'imagens/jovem-m.png')
        } else if(idade <= 25) {
            img.setAttribute('src', 'imagens/jovem-m.png')
        } else if(idade <= 50) {
            img.setAttribute('src', 'imagens/adulto-m.png')
        }  else {
            img.setAttribute('src', 'imagens/idoso-m.png')
        }
      }
    } 
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} e ${idade} anos`
    res.appendChild(img) 
}