const prevButton = document.querySelector('.arrow-prev')
const nextButton = document.querySelector('.arrow-next')
const arraySlides = document.querySelectorAll('.slide')

let index = 0

nextButton.addEventListener('click', () => {

    if (index < arraySlides.length -1) {
        index = index + 1;
 
        let slideActive = document.querySelector('.slide.active')

        slideActive.classList.remove('active')

        arraySlides[index].classList.add('active')
    } else {
        index = 0

        let slideActive = document.querySelector('.slide.active')

        slideActive.classList.remove('active')

        arraySlides[index].classList.add('active')
    }

    

    

    console.log(arraySlides)



})