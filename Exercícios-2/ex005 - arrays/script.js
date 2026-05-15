const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let res = document.getElementById('res')
    let ficha = {nome: 'Guky',
                        idade: 23,
                        estudante: 'Programação',
                        nascimento: 2003,
                        profissão: 'Não tem'
                       }
                 
                 
                 
              


    

    res.innerHTML = JSON.stringify(ficha, null, 2)
})






