/*
Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

1. Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
2. O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
3. O menu deve ter a opção de salvar um imóvel.
4. Para salvar um novo imóvel o programa deve pedir as seguintes informações: Nome do proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui garagem.
5. Nome do proprietário.
6. Quantidade de quartos.
7. Quantidade de banheiros.
8. Se possui garagem.
9. O menu também deve ter a opção de mostrar todos os imóveis salvos.
*/

const baralho = [];
let opcao = "";

do {
  opcao = prompt(
    "Cartas no baralho: " +
      baralho.length +
      "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual é a carta?");
      baralho.push(novaCarta);
      break;

    case "2":
      const cartaPuxada = baralho.pop();
      if (!cartaPuxada) {
        alert("Não há nenhuma carta no baralho");
      } else {
        alert("Você puxou um(a) " + cartaPuxada);
      }
      break;

    case "3":
      alert("Encerrando...");
      break;

    default:
      alert("Opção Inválida...");
      break;
  }
} while (opcao !== 3);
