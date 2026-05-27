const btnMenu = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')
const menuLink = document.querySelectorAll('.menu-link')
const menuIcon = btnMenu.querySelector('i')

btnMenu.addEventListener('click', () => {

    menu.classList.toggle('active')

    if (menu.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars')
        menuIcon.classList.add('fa-xmark')
    } else {
        menuIcon.classList.remove('fa-xmark')
        menuIcon.classList.add('fa-bars')
  }
})

menuLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active')
        menuIcon.classList.replace('fa-xmark', 'fa-bars')
    })
})