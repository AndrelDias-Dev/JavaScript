const btnOpen = document.querySelector('.btn-open').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('open-sidebar')

    
})

const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            items.forEach(i => i.classList.remove('active')); // remove de todos
            item.classList.add('active'); // adiciona só no clicado
        });
    });