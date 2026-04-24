function gerar() {
var ini = document.getElementById('ini')
var fim = document.getElementById('fim')
var pas = document.getElementById('pas')
var res = document.querySelector('div#res')

if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    window.alert('ERROR')
} else {
    res.innerHTML = `Contador: `
    i = Number(ini.value)
    f = Number(fim.value)
    p = Number(pas.value)

    if (i < f) {
        for (var c = i; c <= f; c+= p) {
        res.innerHTML += ` ${c} \u{1F449} `
    }
    } else {
        for (var c = i; c >= f; c-= p) {
            res.innerHTML += ` ${c} \u{1F449} `
        }
    }

    res.innerHTML += ` ${c} \u{1F3F4} `

}


}