function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('num')
    var res = document.getElementById('res')

    if (fano.value == 0 || Number(fano.value) >= ano) {
        window.alert('ERROR')
    } else {
        var fsex = document.getElementsByName('sex')
        var genero = ''
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
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
                   genero= 'Mulher'
                   if (idade >= 5 && idade <= 10) {
                    img.setAttribute('src', 'imagens/bebe-h.png')
                   } else if (idade <= 25) {
                    img.setAttribute('src', 'imagens/jovem-h.png')
                   } else if (idade <= 50) {
                    img.setAttribute('src', 'imagens/adulto-h.png')
                   } else {
                    img.setAttribute('src','imagens/idoso-h.png')
                   }
        }
 
    res.innerHTML = `Detectamos ${idade} anos e  ${genero}` 
    res.style.textAlign = 'center'
    res.appendChild(img)
    }
    
}