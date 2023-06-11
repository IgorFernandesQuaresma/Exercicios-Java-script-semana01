let peso = parseFloat(prompt("Digite seu peso").replace(',', '.'));
let altura = parseFloat(prompt("Digite sua altura").replace(',', '.'));

let alturaAoQuadrado = altura * altura;
let imc = peso / alturaAoQuadrado;

alert("Seu IMC é " + imc. toFixed(2));



