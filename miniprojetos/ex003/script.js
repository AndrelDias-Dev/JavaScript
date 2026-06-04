const accordions = document.querySelectorAll('.accordion')

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body')

        body.forEach(body => body.classList.remove('active'))
        body.classList.add('active')
    })
})