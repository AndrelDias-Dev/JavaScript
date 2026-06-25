const btnMenu = document.querySelector('.menu')
const menu = document.querySelector('ul')
const menuLink = document.querySelectorAll('.menu-link')
const icon = document.querySelector('i')

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active')

    if (menu.classList.contains('active')) {
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-xmark')
    } else {
        icon.classList.add('fa-bars')
        icon.classList.remove('fa-xmark')
    }

})

menuLink.forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('active')

    icon.classList.remove('fa-xmark')
    icon.classList.add('fa-bars')
}))