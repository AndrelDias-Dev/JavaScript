function gerar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('erro')
    } else {
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        res.innerHTML = ''
        
        if (i < f) {
        for (var c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
        } else {
            for (var c = 1; c >= f; c -= p) {
                res.innerHTML -= ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` ${c} \u{1F3F4}`
    }
}