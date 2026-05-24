const btnMenu = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')
const menuLink = document.querySelectorAll('.menu-link')

btnMenu.addEventListener('click', () => {

    menu.classList.toggle('active')

    menuLink.forEach(link => {
        link.addEventListener('click', () => 
            menu.classList.remove('active')
        )
    })
})





