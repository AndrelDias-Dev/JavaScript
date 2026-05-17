const btnMenu = document.querySelector('.btn-menu')
let menu = document.querySelector('.menu')
let links = document.querySelectorAll('.menu-link')


btnMenu.addEventListener('click', () => {

    menu.classList.toggle('active')  

})

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active')
    })
})


