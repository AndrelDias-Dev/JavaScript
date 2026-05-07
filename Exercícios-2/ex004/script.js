
document.getElementById('btn').addEventListener('click', () => {
    const tab = document.getElementById('seletab')
    const num = document.getElementById('num')
    const res = document.getElementById('res')
    tab.innerHTML = ''
    

    for (let c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        let n = Number(num.value)

        item.text += `${n} x ${c} = ${n*c}`

        tab.appendChild(item)
    }
    
})