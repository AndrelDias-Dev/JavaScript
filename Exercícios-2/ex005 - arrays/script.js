const res = document.getElementById('res')
let lista = ['ovos', 'arroz', 'quiabo', 'farinha', 'lasanha', 'alface']
let mostrando = false

lista.push('pizza', 'linguiça', 'biscoito', 'frango')
lista.sort()

res.innerHTML = lista.join(', ')

document.getElementById('btn').addEventListener('click', () => {

    res.classList.toggle('hidden')
    
})







