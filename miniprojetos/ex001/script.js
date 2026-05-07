const calc = document.getElementById('btn');

function imc() {

    const nam = document.getElementById('nam').value;
    const alt = document.getElementById('alt').value;
    const pes = document.getElementById('pes').value;
    const res = document.getElementById('res')
    

    if (nam !== '' && alt !== '' && pes !== '') {

        const valorIMC = (pes / (alt * alt)).toFixed(1);

        let classificacao = ''

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 24.9) {
            classificacao = 'com o peso ideal. Parabéns!!!'
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.'
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I'
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II'
        } else {
            classificacao = 'com obesidade grau III. Procure um Hospital emediatamente!!!.'
        }

        res.textContent = `${nam} seu IMC é ${valorIMC} e você está ${classificacao}`

        
        

    } else {
        res.textContent = 'Preencha todos os campos!!!'
        res.style.textAlign = 'left'
    }
}

calc.addEventListener('click', imc);
