const openMenu = document.querySelector('.open-modal')
const modal = document.querySelector('.modal')
let clickStardedInside = false

openMenu.addEventListener('click', () => {

    modal.showModal()
})

modal.addEventListener('mousedown', (event) => {

    clickStardedInside = event.target !== modal
})

modal.addEventListener('mouseup', (event) => {

    if (!clickStardedInside && event.target === modal) {
        modal.close()
    }
})