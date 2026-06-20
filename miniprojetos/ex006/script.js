const prevButton = document.querySelector('.arrow-left');
const nextButton = document.querySelector('.arrow-right');
const arraySlides = document.querySelectorAll('.slide');
const ul = document.querySelector('ul')
const lastSlide = arraySlides.length - 1;
let index = 0;

function changeSlide()  {
    let arrayActive = document.querySelector('.slide.active')

    arrayActive.classList.remove('active')

    arraySlides[index].classList.add('active')

    document.querySelectorAll('ul li').forEach((li, i) => {
    li.classList.toggle('active', i === index);
  });

}

nextButton.addEventListener('click', () => {

    if (index < lastSlide) {
        index = index + 1;
        changeSlide()

    } else {

    index = 0;
    changeSlide()
    }
})

prevButton.addEventListener('click', () => {

    index = index - 1;

    if (index < 0) {

    index = lastSlide;
    changeSlide()

    } else {

    changeSlide()
    }
}) 

for (let i = 0; i < arraySlides.length; i++) {
    let li = document.createElement('li')

    li.addEventListener('click', () => {
        index = i;
        changeSlide() 
    })

    ul.appendChild(li)
}


ul.querySelector('li').classList.add('active')



 

