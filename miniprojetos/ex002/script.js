const btnOpen = document.querySelector('.open-modal')
const btnClose = document.querySelector('.btn-close')
const modal = document.querySelector('.modal')

btnOpen.addEventListener('click', () => {modal.showModal()})
btnClose.addEventListener('click', () => {modal.close()})