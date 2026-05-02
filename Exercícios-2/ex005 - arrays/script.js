const res = document.getElementById('res')
const compras = ['arroz', 'feijão', 'lasanha', 'batata', 'peixe']
let mostrando =  false

compras.push('ovo', 'macarrão', 'alface')
compras.sort()

const lista = () => {
    res.innerHTML = `${compras.join(', ')}`
}

const limpar = () => {
    res.innerHTML = ''
}

document.getElementById('btn').addEventListener('click', () => {

    if (mostrando === false) {
        lista()
        mostrando = true
    } else {
        limpar()
        mostrando = false
        
    }
})



