const btnOpen = document.querySelector('.open-btn')

btnOpen.addEventListener('click', () => {

   document.querySelector('.sidebar').classList.toggle('open-sidebar')

   const items = document.querySelectorAll('.side-item')
   items.forEach(item => item.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active'))
    item.classList.add('active')
   }))

   
})

