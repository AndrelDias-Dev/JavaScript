const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        document.querySelectorAll('.accordion-body').forEach(body => body.classList.remove('active'))

        accordion.querySelector('.accordion-body').classList.add('active')
    });
});