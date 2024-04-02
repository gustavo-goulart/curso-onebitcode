/*
Escreva um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).
Após calcular os resultados o programa deve exibi-los na tela.
*/

let numero1 = parseFloat(prompt("Digite um número: "));
let numero2 = parseFloat(prompt("Digite outro número: "));

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;

alert(`A soma entre ${numero1} e ${numero2} é: ${soma},
A subtração entre ${numero1} e ${numero2} é: ${subtracao},
A multiplicação entre ${numero1} e ${numero2} é: ${multiplicacao},
A divisão entre ${numero1} e ${numero2} é: ${divisao}`);
