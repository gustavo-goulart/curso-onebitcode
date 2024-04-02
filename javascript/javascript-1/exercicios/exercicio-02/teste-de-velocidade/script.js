/*
Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso);
*/

const NomeCarro1 = prompt("Digite o nome do carro 1: ");
const velocidadeCarro1 = prompt("Informe a velocidade do carro 1: ");

const NomeCarro2 = prompt("Digite o nome do carro 2: ");
const velocidadeCarro2 = prompt("Informe a velocidade do carro 2: ");

if (velocidadeCarro1 > velocidadeCarro2) {
  alert(`O ${NomeCarro1} é mais rápido que o ${NomeCarro2} `);
} else if (velocidadeCarro1 < velocidadeCarro2) {
  alert(`O ${NomeCarro2} é mais rápido que o ${NomeCarro1} `);
} else if (velocidadeCarro1 == velocidadeCarro2) {
  alert(`O ${NomeCarro2} e o ${NomeCarro1} possuem a mesma velocidade `);
}
