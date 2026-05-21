const menuBtn = document.getElementById('btn-menu')
const menu = document.querySelector('.menu')
const link = document.querySelectorAll('.menu-link')
const iconMenu = document.getElementById('iconMenu')

menuBtn.addEventListener('click', () => {

    menu.classList.toggle('active')

    if (menu.classList.contains('active')) {
        iconMenu.classList.remove('fa-bars')
        iconMenu.classList.add('fa-times', 'maior')
    } else {
        iconMenu.classList.remove('fa-times', 'maior')
        iconMenu.classList.add('fa-bars')
    }

})






