const btnOpen = document.querySelector('.btn-open')
const btnClose = document.querySelector('.btn-close')
const modal = document.querySelector('.modal')
let clickStartedInside = false


btnOpen.addEventListener('click', () => {

    modal.showModal()
})

btnClose.addEventListener('click', () => {

    modal.close()
})

modal.addEventListener('mousedown', (event) => {
    clickStartedInside = event.target !== modal
})


modal.addEventListener('mouseup', (event) => {

    if (!clickStartedInside && event.target === modal) {
        modal.close()
    }
})

