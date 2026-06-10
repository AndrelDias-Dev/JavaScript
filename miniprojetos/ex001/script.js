const btnMenu = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')
const menuLink = document.querySelectorAll('.menu-link')
const icon = btnMenu.querySelector('i')


btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active')

    if (menu.classList.contains('active')) {
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-xmark')
    } else {
        icon.classList.remove('fa-xmark')
        icon.classList.add('fa-bars')
    }

})

menuLink.forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('active')

    icon.classList.remove('fa-xmark')
    icon.classList.add('fa-bars')
}))