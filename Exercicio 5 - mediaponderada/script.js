
let nota1 = parseFloat(prompt("Digite a nota 1").replace(',', '.'));

let pesoNota1 = parseFloat(prompt("Digite o peso da nota 1"));

let nota2 = parseFloat(prompt("Digite a nota 2").replace(',', '.'));

let pesoNota2 = parseFloat(prompt("Digite o peso da nota 2"));

let nota3 = parseFloat(prompt("Digite a nota 3").replace(',', '.'));

let pesoNota3 = parseFloat(prompt("Digite o peso da nota 3"));


const totalNotas = (nota1*pesoNota1) + (nota2*pesoNota2) + (nota3*pesoNota3);
const totalPeso = pesoNota1 + pesoNota2 + pesoNota3;
const mediaPonderada = totalNotas/totalPeso; 

alert ("Sua média é" + " " + mediaPonderada.toFixed(2));




