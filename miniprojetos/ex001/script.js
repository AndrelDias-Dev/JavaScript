const btnMenu = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')
const menuLink = document.querySelectorAll('.menu-link')
const iconMenu = btnMenu.querySelector('i')


btnMenu.addEventListener('click', () => {

    menu.classList.toggle('active')

    if (menu.classList.contains('active') ) {
        iconMenu.classList.remove('fa-bars')
        iconMenu.classList.add('fa-xmark')
    } else {
        iconMenu.classList.remove('fa-xmark')
        iconMenu.classList.add('fa-bars')
    }
})

menuLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active')

        iconMenu.classList.remove('fa-xmark')
        iconMenu.classList.add('fa-bars')
    })
})