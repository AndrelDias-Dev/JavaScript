async function Users() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await response.json()

        const containerUsers = document.querySelector('#users')



        data.forEach(user => {
            containerUsers.innerHTML += `
            <div>
                <h2>${user.name}</h2>
                <p>${user.email}</p>
            </div>
            `


        })


    } catch {
        console.log('error')
    }


}

const usuarios = [
    { nome: "João", idade: 17 },
    { nome: "Maria", idade: 22 },
    { nome: "Pedro", idade: 16 }
];

const existeMaiorDeIdade = usuarios.some(usuario => usuario.idade >= 23)

console.log(existeMaiorDeIdade)

Users();