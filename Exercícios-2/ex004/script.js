let num = document.getElementById('num')
let tab = document.getElementById('seletab')



document.getElementById('btn').addEventListener('click', () => {
    tab.innerHTML = ''
    
    for (let c = 1; c < 10; c++) {
        let item = document.createElement('option')
        let n = num.value


        item.text += `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
    }



    
})

