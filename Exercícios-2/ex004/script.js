const btn = document.getElementById('btn-gerar')

btn.addEventListener('click', () => {
        let num = document.getElementById('num')
        let tab = document.getElementById('seletab')

        tab.innerHTML = ''


    for (let c = 1; c <= 10; c++) {      
        let item = document.createElement('option')
        let n = Number(num.value)
        

        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
    }
    
})