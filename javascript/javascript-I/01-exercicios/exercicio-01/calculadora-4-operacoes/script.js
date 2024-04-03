/*
Escreva um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).
Após calcular os resultados o programa deve exibi-los na tela.
*/

const numero1 = parseFloat(prompt("Digite um número: "));
const numero2 = parseFloat(prompt("Digite outro número: "));

const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;

alert(`A soma entre ${numero1} e ${numero2} é: ${soma},
\nA subtração entre ${numero1} e ${numero2} é: ${subtracao},
\nA multiplicação entre ${numero1} e ${numero2} é: ${multiplicacao},
\nA divisão entre ${numero1} e ${numero2} é: ${divisao}`);
