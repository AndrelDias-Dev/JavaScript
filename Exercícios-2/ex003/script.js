
document.getElementById('btn').addEventListener('click', () => {

    const ini = document.getElementById('ini')
    const fim = document.getElementById('fim')
    const pas = document.getElementById('pas')
    const res = document.getElementById('res')
    res.innerHTML = ''

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('Error')
    } else {
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(pas.value)

        if (i < f) {
            for (let c = i; c < f; c += p) {
             res.innerHTML += `👉 ${c}`
        }
        } else {
            for (let c = i; c > f; c -= p) {
             res.innerHTML += `👉 ${c}`
        }
        }
            
    }
})