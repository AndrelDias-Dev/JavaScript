async function Users() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await response.json()

        const containerUsers = document.querySelector('#users')


    }catch {
        console.log('error')
    }


}

Users();