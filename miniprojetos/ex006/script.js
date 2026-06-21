const btnPrev = document.querySelector('.btn-left')
const btnNext = document.querySelector('.btn-right')
const arraySlides = document.querySelectorAll('.slide')
const ul = document.querySelector('ul')
let index = 0;

function changeSlide() {
    let slideActive = document.querySelector('.slide.active')
    slideActive.classList.remove('active')
    arraySlides[index].classList.add('active')

    let activeBullet = document.querySelector('li.active')
    activeBullet.classList.remove('active')
    arrayBullets[index].classList.add('active')


}

btnNext.addEventListener('click', () => {
    index = index + 1;

    if (index < arraySlides.length) {
        changeSlide()
    } else {
        index = 0;

        changeSlide()
    }
})

btnPrev.addEventListener('click', () => {
    index = index - 1;

    if (index < 0) {
        index = arraySlides.length - 1;
        changeSlide()

    } else {
        changeSlide()
    }


})

for (let i = 0; i < arraySlides.length; i++) {

    let li = document.createElement('li')
    ul.appendChild(li)
}

document.querySelector('li').classList.add('active')

const arrayBullets = document.querySelectorAll('li')

