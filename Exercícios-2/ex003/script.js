function contar() {
    var i = document.getElementById('ini')
    var f = document.getElementById('fim')
    var p = document.getElementById('pas')
    var res = document.getElementById('res')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        window.alert('[ERRO] Preencha os campos e tente novamente.') 
    } else {
        res.innerHTML = 'Contando:'
        var i = Number(ini.value) 
        var f = Number(fim.value)
        var p = Number(pas.value)

        if (i < f) {
            for (var c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} `
        }
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c}`
            }
        }

    }

}    