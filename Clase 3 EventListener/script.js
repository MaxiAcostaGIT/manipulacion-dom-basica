const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const botonResultado = document.getElementById('btn');
const resultado = document.getElementById('resultado');
const form = document.getElementById('form');

form.addEventListener('submit', btnOnClick);

function btnOnClick(event) {
    event.preventDefault();
    const sumaInputs = parseInt(num1.value) + parseInt(num2.value);
    resultado.innerText = 'Resultado: ' + sumaInputs;
}

