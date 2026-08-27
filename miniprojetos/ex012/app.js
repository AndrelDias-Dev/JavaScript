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

const produtos = [
    { id: 101, nome: "X-Bacon" },
    { id: 102, nome: "Batata" },
    { id: 103, nome: "X-Salada" },
    { id: 104, nome: "Refrigerante" }
];

const posicao = produtos.findIndex(produto => produto.id ===  103)

console.log(posicao)

Users();