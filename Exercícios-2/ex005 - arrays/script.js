let res = document.getElementById('res')
let compras = ['arroz', 'feijão', 'macarrão', 'bife', 'alface']
let monstrando = false

compras.push('farinha', 'ovo', 'empanado')
compras.sort()

const lista = () => {
    res.innerHTML = `${compras.join(', ')}`

}

const limpar = () => {
    res.innerHTML = ''
}


document.getElementById('btn').addEventListener('click', () => {

    if (monstrando === false) {
        lista()
        monstrando = true
    } else {
        limpar()
        monstrando = false
    }

})

