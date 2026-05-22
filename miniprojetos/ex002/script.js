const openModal = document.querySelector('.open-modal')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close-modal')

openModal.addEventListener('click', () => {
    modal.classList.add('active')
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('active')
})


