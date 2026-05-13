const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    
    let img = document.createElement('img')
        
    const fsex = document.getElementsByName('sex')
    const res = document.getElementById('res')
    const anoAtual = new Date().getFullYear()
    const ano = document.getElementById('num')
    const idade = anoAtual - Number(ano.value)
    let genero = ''
    res.innerHTML = ''

    if (ano.value.length == 0 || ano.value >= anoAtual) {
        window.alert('Error')
    } else {

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

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
            } else 
                img.setAttribute('src', 'imagens/idoso-m.png')
}
res.innerHTML = `Detectamos ${genero} e ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
}
}
            
            
        

)        
        