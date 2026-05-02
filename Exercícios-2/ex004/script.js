const btn = document.getElementById('btn')
const num = document.getElementById('num')

btn.addEventListener('click', () => {
    if (num.value == 0) {
        window.alert('ERROR')
    } else {
        const n = num.value
        const tab = document.getElementById('seletab')

        tab.innerHTML = ''

        for (let c = 1; c <= 10; c++) {
            const item = document.createElement('option')
            item.text += `${n} x ${c} = ${n*c}`


             tab.appendChild(item)
        }

    }
})