function gerar() {
    var num = document.getElementById('num')
    var tab = document.getElementById('seletab')
    var res = document.getElementById('res')

    if (num.value.length == 0) {
        window.alert('ERRO')
    } else {
        tab.innerHTML = ''

        for (var c = 1; c <= 10; c++) {
            var n = Number(num.value)
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${c*n}`


            tab.appendChild(item)
        }
    }
}