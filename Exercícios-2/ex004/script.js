function gerar() {
    var num = document.getElementById('num')
    var tab = document.getElementById('seletab')

    if (num.value.length == 0) {
        window.alert('ERRO')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''

        for (c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `sele${c}`
            

            tab.appendChild(item)
        }
    }
}