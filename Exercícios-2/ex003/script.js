const btn = document.querySelector('#btn')
const res = document.querySelector('#res')

btn.addEventListener('click', () => {
    const ini = document.getElementById('ini')
    const fim = document.getElementById('fim')
    const pas = document.getElementById('pas')

    const i = Number(ini.value)
    const f = Number(fim.value)
    const p = Number(pas.value)

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('ERROR')
    } else {
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

        res.innerHTML += ` 🏳️ `

    }
})

