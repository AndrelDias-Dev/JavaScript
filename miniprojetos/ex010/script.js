
const container = document.querySelector('.toast-container')

const buttons = document.querySelectorAll('[data-type]')

const icons = {
    sucesso: `<i class="fa-solid fa-circle-check"></i>`,
    erro: `<i class="fa-solid fa-circle-check"></i>`,
    invalido: `<i class="fa-solid fa-circle-check"></i>`
}



function showToast(message, type) {

    const toast = document.createElement('div')

    toast.classList.add(
        'toast',
        type
    )

    toast.innerHTML = `
    <span class="icon">
    ${icons[type]}
    </span>

    <span class="message">
    ${message}
    </span>
    `

    container.appendChild(toast)

    setTimeout(() => {
        toast.classList.add('hide')

    setTimeout(() => {
        toast.remove()
    }, 300)

    },4000)

}



buttons.forEach(button => {
    button.addEventListener('click', () => {

        const type = button.dataset.type;

        let message = ''

        if (type === 'sucesso') {
            message = 'Operação realizada com sucesso!';
        }

        if (type === 'erro') {
            message = 'Ocorreu um erro!';
        }

        if (type === 'invalido') {
            message = 'Dados inválidos!';
        
        }

        showToast(message, type);
    })
})