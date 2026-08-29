const container = document.querySelector('.users')
const inputSearch = document.querySelector('#search')

const usuarios = [
    { nome: "João" },
    { nome: "Maria" },
    { nome: "Pedro" },
    { nome: "Marcos" }
];

inputSearch.addEventListener('input', () => {
    const inputValue = inputSearch.value.trim()

    const filterUser = usuarios.filter(usuario => {
        return usuario.nome.toLowerCase().includes(inputValue)
    })

    container.innerHTML = '';

    filterUser.forEach(usuario => {
        container.innerHTML += `
        <div>
            <div>${usuario.nome}</div>
        </div>
        `
    }).join('')
})




