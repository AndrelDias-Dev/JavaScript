const buttons = document.querySelectorAll('.dropdown-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        const dropdown = button.closest('.dropdown')

        const menu = dropdown.querySelector('.dropdown-menu')

        document.querySelectorAll('.dropdown-menu').forEach(item => {

            if (item !== menu) {
                item.classList.remove('active')
            }
        });

        document.querySelectorAll('.dropdown-btn').forEach(btn => {
            btn.classList.remove('show')
        })

        if (menu.classList.contains('active')) {
            button.classList.remove('show')
        } else {
            button.classList.add('show');
        }
        menu.classList.toggle('active')
    })
})
