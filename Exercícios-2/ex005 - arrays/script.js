function gerar() {
    var res = document.getElementById('res')
    let filme = ['Maze Runner, ', 'Os Vingadores, ', 'Resident Evil, ', 'O Cara de Barro, ', 'Uma noite no Museu. ']

    res.innerHTML = ''

  /*  for (let pos = 0; pos < filme.length; pos++) {
        res.innerHTML += `${filme[pos]}`
    } */

   for (let pos in filme) {
        res.innerHTML += ` ${filme[pos]} `
    }  

    
}