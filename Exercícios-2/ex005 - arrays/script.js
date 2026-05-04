const res = document.getElementById('res')
const compras = ['peixe', 'ovos', 'linguiça', 'frango', 'biscoito', 'lasanha']
let mostrando = false

compras.push('morango', 'abacaxi', 'maçã', 'uvas')
compras.sort()



const compra = () => {
    res.innerHTML += `${compras.join(', ')}`
}

const limpar = () => {
    res.innerHTML = ''
}

document.getElementById('btn').addEventListener('click', () => {

    if (mostrando === false) {
        mostrando = true
        compra()
    } else {
        mostrando = false
        limpar()
    }
})








