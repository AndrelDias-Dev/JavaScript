const ini = document.getElementById('ini')
const fim = document.getElementById('fim')
const pas = document.getElementById('pas')
const res = document.getElementById('res')

document.getElementById('btn').addEventListener('click', () => {

    i = Number(ini.value)
    f = Number(fim.value)
    p = Number(pas.value)

    res.innerHTML = ''

    if (i < f) {
        for (let c = i; c < f; c += p) {
            res.innerHTML += ` ${c} 👉`
        }
    } else {
        for (let c = i; c > f; c -= p) {
            res.innerHTML += ` ${c} 👉`
        }       
    }
    res.innerHTML += `🏳️`
    


})