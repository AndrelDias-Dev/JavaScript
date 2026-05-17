const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let num = document.getElementById('num')

    let tab = document.getElementById('seletab')
    
    let n = Number(num.value)
    
    tab.innerHTML = ''

    for (let c = 1; c <= 10; c++) {

        let item = document.createElement('option')
        
        item.text = `${n} x ${c} = ${n * c}`

        tab.appendChild(item);
    }



})