const ini = document.getElementById('ini')
const pas = document.getElementById('pas')
const fim = document.getElementById('fim')
const res = document.getElementById('res')


document.getElementById('btn').addEventListener('click', () => {

    let i = Number(ini.value)
    let p = Number(pas.value)
    let f = Number(fim.value)

    if (ini.value.length == 0 || pas.value.length == 0 || fim.value.length == 0) {
        window.alert('ERROR')
    } else {
        res.innerHTML = ''

        if (i < f) {
            for (let c = i; c < f; c += p) {
                res.innerHTML += ` ${c} 👉`
            }
        }

        if (i > f) {
            for (let c = i; c > f; c -= p) {
                res.innerHTML += ` ${c} 👉`
            }

        }
    }






})

