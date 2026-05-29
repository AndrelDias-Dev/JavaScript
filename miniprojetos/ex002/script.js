const btnOpen = document.querySelector('.open-modal')
const btnClose = document.querySelector('.btn-close')
const modal = document.querySelector('.modal')
let clickStartedInside = false

btnOpen.addEventListener('click', () => {modal.showModal()})
btnClose.addEventListener('click', () => {modal.close()})

modal.addEventListener('mousedown', () => {
    
    if (event.target !== modal) {
        clickStartedInside = true
    } else {
        clickStartedInside = false
    }
})

modal.addEventListener('mouseup', (event) => {
    
    if (!clickStartedInside && event.target === modal) {
        modal.close()
    }
})