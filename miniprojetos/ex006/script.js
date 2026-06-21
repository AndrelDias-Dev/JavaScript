const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
const arraySlides = document.querySelectorAll('.slide')
const ul = document.querySelector('ul')
let index = 0;

function changeSlide() {
    let slideActive = document.querySelector('.slide.active').classList.remove('active')
    arraySlides[index].classList.add('active')

    let bulletActive = document.querySelector('li.active').classList.remove('active')
    arrayBullets[index].classList.add('active')

}

btnNext.addEventListener('click', () => {
    index++

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

for (i = 0; i < arraySlides.length; i++) {

    const li = document.createElement('li')

    ul.appendChild(li)
}

document.querySelector('li').classList.add('active')

const  arrayBullets = document.querySelectorAll('li')

arrayBullets.forEach((bullet, i) => {
    bullet.addEventListener('click', () => {
        index = i;
        changeSlide()
    })
})




