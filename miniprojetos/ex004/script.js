const btnTab = document.querySelectorAll('.btn-tab')

btnTab.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {
    btnTab.forEach(tab => tab.classList.remove('active'))
    tab.classList.add('active')

    const contents = document.querySelectorAll('.content')
    contents.forEach(content => content.classList.remove('show'))

    const contentId = tab.getAttribute('content-id')
    const content = document.getElementById(contentId)



    content.classList.add('show')

    
}
    
    

