function contar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('ERRO')
    } else {
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(pas.value)

        res.innerHTML = ''

        if (i <= f) {
            for (c = i; c <= f; c += p) {
            res.innerHTML += `${c}`
        }
        } else {
            for (c = i; c >= f; c -= p) {
                res.innerHTML += `${c}`
            }
        }
        
     }   

}