const res = document.getElementById('res')
const lista = ['ovos', 'leite', 'biscoito', 'frango', 'quiabo', 'bife']

lista.push('batata', 'coxinha', 'empanado', 'amendoim')
lista.sort()

document.getElementById('btn').addEventListener('click', () => {

    res.innerHTML = `${lista.join(', ')}` + '.'


    res.classList.toggle('hidden')
})






