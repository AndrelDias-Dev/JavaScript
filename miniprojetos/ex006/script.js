const arraySlides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slide-left')
const btnRight = document.querySelector('.slide-right')
const slideActive = document.querySelector('.slide.active')
let ul = document.querySelector('.bullets')
let index = 0

function changeSLide() {
    let slideActive = document.querySelector('.slide.active')

    slideActive.classList.remove('active')

    arraySlides[index].classList.add('active')

    let bulletActive = document.querySelector(' li.active')

    bulletActive.classList.remove('active')

    arrayBullets[index].classList.add('active')

}

btnRight.addEventListener('click', () => {

    if (index < arraySlides.length - 1) {

        index++
        changeSLide()
    } else {
        index = 0

        changeSLide()
    }

})

btnLeft.addEventListener('click', () => {

    if (index > 0) {
        index--
        
        changeSLide()
    } else {
        index = arraySlides.length - 1

        changeSLide()
    }

})

setInterval(() => {
    if (index < arraySlides.length - 1) {

        index++
        changeSLide()
    } else {
        index = 0

        changeSLide()
    }
}, 3000)


for (let i = 0; i < arraySlides.length; i++) {

    let li = document.createElement('li')

    ul.appendChild(li)
}

document.querySelector('.bullets li').classList.add('active')


const arrayBullets = document.querySelectorAll('.bullets li')

arrayBullets.forEach((bullet, i) => {
    bullet.addEventListener('click', () => {
        index = i;
        changeSLide()
    })
})













