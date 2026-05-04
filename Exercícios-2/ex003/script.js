let ini = document.getElementById('ini')
let fim = document.getElementById('fim')
let pas = document.getElementById('pas')
let res = document.getElementById('res')

document.getElementById('btn').addEventListener('click', () => {
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('ERROR')
        return
    } 

    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)
    res.innerHTML = ''

    if (i < f) {
        for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} 👉`
    }
    } else {
        for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} 👉`
    }
    }

})



