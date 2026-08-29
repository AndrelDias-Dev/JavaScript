async function Users() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await response.json()

        const containerUsers = document.querySelector('#users')


        //FEITO COM FOREACH
        //     containerUsers.innerHTML = ""; 

        //     data.forEach(usuario => {
        //         containerUsers.innerHTML += `
        //     <div>
        //         <div>${usuario.name}</div>
        //         <div>${usuario.email}</div>
        //     </div>
        // `;
        //     });




        //FEITO COM MAP
        containerUsers = data.map(usuario => {
            containerUsers.innerHTML += `
    <div>
            <div>${usuario.name}</div>
            <div>${usuario.email}</div>
        </div>
    `
        }).join('')



    } catch {
        console.log('error')
    }


}

Users();