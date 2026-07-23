const buttons = document.querySelectorAll('.dropdown-btn')
const menus = document.querySelectorAll('.dropdown-menu')

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        
        const dropdown = btn.closest('.dropdown')
        
        const menu = dropdown.querySelector('.dropdown-menu')
        
        menus.forEach(item => {
            if (item !== menu) {
                item.classList.remove('active')
            }
        })

        menu.classList.toggle('active')
    })
})

document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        menus.forEach(menu => {
            menu.classList.remove('active')
        })
    }
})