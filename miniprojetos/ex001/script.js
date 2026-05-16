const btnMenu = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')
const btnLogin = document.querySelector('.btn-login')
const links = document.querySelectorAll('.menu-link')
const modal = document.querySelector('#modal')
const btnClose = document.querySelector('#closeModal')
const btnConfirm = document.querySelector('#confirmModal')


btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
})

btnClose.addEventListener('click', () => {
    
    modal.classList.remove('active')

    modal.close()
})
btnLogin.addEventListener('click', () => {

    modal.classList.toggle('active')
    

    modal.showModal()
})



modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        
        modal.classList.remove('active')

        modal.close()

        
    } 
})



