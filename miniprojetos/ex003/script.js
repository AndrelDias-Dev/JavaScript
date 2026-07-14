const accordions = document.querySelectorAll('.accordion')
const accordionActive = document.querySelector('.accordion-body.active')

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {

        const body = accordion.querySelector('.accordion-body')

        if (body.classList.contains('active')) {
            body.classList.remove('active')
        } else {
            document.querySelectorAll('.accordion-body.active').forEach(openBody => {
                openBody.classList.remove('active')
            })
            body.classList.add('active')
        }
    })
})