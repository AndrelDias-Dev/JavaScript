const container = document.querySelector('.toast-container');

const sucessoButton = document.querySelector('.sucesso-btn');
const erroButton = document.querySelector('.erro-btn');
const warningButton = document.querySelector('.warning-btn');

function showToast(message, type) {
    const toast = document.createElement('div')

    toast.classList.add(
        'toast',
        type
    )

    console.log(toast)

    toast.textContent = message;

    container.appendChild(toast)

    setInterval(() => {
        toast.classList.add('show')
    },300)
    
    
    setInterval(() => {

        toast.classList.remove('show');

        setInterval(() => {
            toast.remove();
        }, 300)

        
    },3000);

}

sucessoButton.addEventListener('click', () => {
    showToast('Efetuação feita com sucesso', 'sucesso')
})

erroButton.addEventListener('click', () => {
    showToast('Efetuação feita com sucesso', 'erro')
})

warningButton.addEventListener('click', () => {
    showToast('Efetuação feita com sucesso', 'warning')
})