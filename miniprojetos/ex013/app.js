const container = document.querySelector('.users');
const nomeInput = document.querySelector('#nome');
const form = document.querySelector('#form')

const usuarios = [];

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const nome = nomeInput.value;

    const novoUsuario = {
        nome: nome
    }

    usuarios.push(novoUsuario)

    console.log(usuarios)
})








