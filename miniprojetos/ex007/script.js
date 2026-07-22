const buttons = document.querySelectorAll('.dropdown-btn')
const dropdowns = document.querySelectorAll('.dropdown')
const menus = document.querySelectorAll('.dropdown-menu')
const menuLink = document.querySelectorAll('a')

buttons.forEach(btn => {
    btn.addEventListener('click', () => {

        const dropdown = btn.closest('.dropdown')

        const menu = dropdown.querySelector('.dropdown-menu')

        const menus = document.querySelectorAll('.dropdown-menu')

        menus.forEach(item => {
            if (item !== menu) {
                item.classList.remove('active')
            }
        })
        menu.classList.toggle('active')

    })
})

document.addEventListener('click', (e) => {
    
    dropdowns.forEach(dropdown => {
        if(!e.target.closest('.dropdown')) {
            menus.forEach(menu => {
                menu.classList.remove('active')
            })
        }

    })
})