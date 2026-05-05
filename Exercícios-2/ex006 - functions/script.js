let num = document.getElementById('num')
let lista = document.getElementById('flist')
let res = document.getElementById('res')
let compras = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}





document.getElementById('adicionar').addEventListener('click', () => {

    if (isNumero(num.value) && !inLista(num.value, compras)) {
        window.alert('tudo ok')
    } else {
        window.alert('Valor inválido ou já adicionado na lista.')
    }
})



