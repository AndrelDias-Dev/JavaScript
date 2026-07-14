const tabs = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.tab-content')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        tabs.forEach(btn => {
            btn.classList.remove('active')
        })

        contents.forEach(content => {
            content.classList.remove('show')
        })

        tab.classList.add('active')

        const tabId = tab.dataset.tab;

        const activeContent = document.getElementById(tabId)

        activeContent.classList.add('show')

    
    })
})