const sucessoBtn = document.querySelector('.sucesso-btn');
const erroBtn = document.querySelector('.erro-btn');
const atençaoBtn = document.querySelector('.atençao-btn');
const container = document.querySelector('.toast-container');

function showToast(message, type) {

    const toast = document.createElement('div')

    toast.classList.add(
        'toast',
        type
    )

    toast.textContent = message

    container.appendChild(toast)

    setTimeout(() => {
        toast.classList.add('active')
    }, 300)
    

    setTimeout(() => {
        toast.classList.remove('active')

        setTimeout(() => {
            toast.remove()
        },3000);
    },3000)
    
}


sucessoBtn.addEventListener('click', () => {

    showToast(
        'Efetuado com sucesso!!!',
        'sucesso'
    )
})

erroBtn.addEventListener('click', () => {

    showToast(
        'Erro! Tente novamente.',
        'erro'
    )
})

atençaoBtn.addEventListener('click', () => {

    showToast(
        'Atenção! Preencha os dados.',
        'atençao'
    )
})
