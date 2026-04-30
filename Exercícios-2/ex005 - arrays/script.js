

function gerar() {
    var res = document.getElementById('res')
    let roupa = ['Casaco ', 'Tenis ', 'Calça ', 'Camiseta ', 'Boné ', 'Óculos ']

    for(let pos=0; pos < roupa.length; pos++) {
        res.innerHTML += `O valor ${pos} tem valores ${roupa[pos]}`
    }

    // PADRÃO E SIMPLIFICADA

 /*   for (let pos in roupa) {
        res.innerHTML += `O valor ${pos} tem valores ${roupa[pos]}`
    } */

    
    

}