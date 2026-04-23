function gerar() {
    var num = document.getElementById('num')
    var tab = document.getElementById('seletab')
    
    if (num.value.length == 0) {
        window.alert('erro')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''

    for (var c = 1; c <= 10; c++) {
       var n = Number(num.value)
       var item = document.createElement('option')
       item.text = `${n} x ${c} = ${n*c}`
       item.value = `tab${c}`
       tab.appendChild(item)
    }
}
}