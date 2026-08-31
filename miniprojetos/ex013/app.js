const container = document.querySelector('.users');
const form = document.querySelector('#form')
const nomeInput = document.querySelector('#nome')

const usuarios = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" },
    { id: 3, nome: "Pedro" }
];

form.addEventListener('submit', (event) => {

    event.preventDefault()

    const nome = nomeInput.value.trim()

    if(nome === '') {
        return;
    }

    const novoUsuario = {
        id: usuarios.length + 1,
        nome: nome
    }

    usuarios.push(novoUsuario)

    
console.log(usuarios)

    renderizarUsuarios();

    nomeInput.value = ''

})

function renderizarUsuarios() {

    const render = usuarios.map(usuario => {
        return `
            <div class="info-render">
                <div>${usuario.nome}</div>
                <button class="btn-remove" data-id="${usuario.id}">Excluir</button>
            </div>
        `
    }).join('')

    container.innerHTML = render;

}





renderizarUsuarios()









