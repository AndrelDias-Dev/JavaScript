function gerar() {
    var res = document.getElementById('res')
    let filme = ['Maze Runner, ', 'Os Vingadores, ', 'Resident Evil, ', 'O Cara de Barro, ', 'Uma noite no Museu, ']

    let novos = ['Panico 7, ', 'Michael Jackson, ', 'Zorro.']

    
    filme.push(...novos)
    filme.sort()

    
    

    res.innerHTML = ''

  /*  for (let pos = 0; pos < filme.length; pos++) {
        res.innerHTML += `${filme[pos]}`
    } */

        // A duas formas são iguais, mas a de baixo está abreviada.

   for (let pos in filme) {
        res.innerHTML += ` ${filme[pos]} `
    }  

    
}