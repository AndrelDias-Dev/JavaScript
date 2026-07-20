const sucessBtn = document.querySelector('.sucess-btn');
const errorBtn = document.querySelector('.error-btn');
const warningBtn = document.querySelector('.warning-btn');
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
    },100)

    setTimeout(() => {
        toast.classList.add('active')

        setTimeout(() => {
            toast.classList.remove('active')
        }, 300)
    }, 3000)
}

sucessBtn.addEventListener('click', () => {

    showToast(
        'Operação efetuada com sucesso!',
        'sucess'
    )
})

errorBtn.addEventListener('click', () => {

    showToast(
        'Ops! Um erro ocorreu!',
        'error'
    )
})

warningBtn.addEventListener('click', () => {

    showToast(
        'Atenção! Tente novamente!',
        'warning'
    )
})

