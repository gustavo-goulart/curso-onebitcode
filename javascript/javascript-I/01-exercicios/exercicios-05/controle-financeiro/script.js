/*
Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.
*/

let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"));
let opcao = "";

do {
  opcao = prompt(
    "Saldo disponível: R$ " +
      saldo +
      "\n1 - Adicionar dinheiro" +
      "\n2 - Remover dinheiro" +
      "\n3 - Sair"
  );

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"));
      break;
    case "2":
      saldo -= prompt("Informe o valor a ser removido:");
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Entrada inválida.");
      break;
  }
} while (opcao !== "3");
