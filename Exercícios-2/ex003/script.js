const btn = document.getElementById('btn')



btn.addEventListener('click', () => {

    const ini = document.getElementById('ini')
    const fim = document.getElementById('fim')
    const pas = document.getElementById('pas')
    const res = document.getElementById('res')

    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)
    
    res.innerHTML = ''

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    window.alert('Error')

} else {

    
    if (i < f) {
        for (let c = i; c < f; c += p) {
        res.innerHTML += `👉 ${c} `
    } 
    } else {
        for (let c = i; c > f; c -= p) {
        res.innerHTML += `👉 ${c} `
    }
}
}
})