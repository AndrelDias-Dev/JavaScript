function gerar() {
    ini = document.getElementById('ini')
    fim = document.getElementById('fim')
    pas = document.getElementById('pas')
    res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('ERRO')
    } else {
        var i = Number(ini.value)
        var f = Number (fim.value)
        var p = Number (pas.value)
        res.innerHTML = ''
    

        if (i < f) {
            for (var c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F448}`
        }
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F448}`
            }
           
        }

        res.innerHTML += ` ${c} \u{1F3F3}`

        
        
    }
}