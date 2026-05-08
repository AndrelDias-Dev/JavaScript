const btn = document.getElementById('btn')

function imc() {
    const name = document.getElementById('nam').value;
    const alt = document.getElementById('alt').value;
    const peso = document.getElementById('pes').value;
    const res = document.getElementById('res')

    if (name !== '' && alt !== '' && peso !== '') {

        const valorIMC = (peso / (alt * alt)).toFixed(1);
        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'levemente abaixo do peso'
        } else if (valorIMC < 24.9) {
            classificacao = 'com o peso ideal'
        } else if (valorIMC < 29.9) {
            classificacao = 'levemente acima do peso'
        } else if (valorIMC < 34.9) {
            classificacao = 'com obesidade grau I'
        } else if (valorIMC < 39.9) {
            classificacao = 'com obesidade grau II'
        } else {
            classificacao = 'com obesidade grau III'
        }

        res.textContent = `${name} seu IMC é ${valorIMC} e você está ${classificacao}`;
    } else {
        res.textContent = 'Preencha todos os campos'
        
    }
}

btn.addEventListener('click', (imc));

