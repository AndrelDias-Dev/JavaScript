const btn = document.getElementById('btn')

let lista = ['biscoito', 'batata', 'maçã', 'leite', 'arroz']

lista.push('ovos', 'goiaba', 'carne', 'linguiça')

lista.sort()

let mostrando = false

btn.addEventListener('click', () => {

    if (mostrando) {
        res.innerHTML = ''
    } else {
        res.innerHTML = `${lista.join(', ')}`
    }

    mostrando = !mostrando



})





