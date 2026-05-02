const btn = document.getElementById('btn')
const num = document.getElementById('num')

btn.addEventListener('click', () => {
    if (num.value.length == 0) {
    window.alert('ERROR')
    } else {
        const tab = document.getElementById('seletab')
        tab.innerHTML = ''

    for (let c = 1; c <= 10; c++) {

        var n = Number(num.value)
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`

        tab.appendChild(item)
    }

    
}
})