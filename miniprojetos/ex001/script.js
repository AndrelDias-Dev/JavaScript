const btnMenu = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')

btnMenu.addEventListener('click', () => {

    if (menu.classList.contains('active')) {
        menu.classList.remove('active')
    } else {
        menu.classList.add('active')
    }


})




