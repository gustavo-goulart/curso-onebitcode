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

const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem vindo ao cadastro de imóveis\n" +
      "Total de imóveis: " +
      imoveis.length +
      "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const imovel = {};

      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:");
      imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"));
      imovel.banheiros = parseFloat(
        prompt("Quantos banheiros possui o imóvel?")
      );
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)");

      const confirma = confirm(
        "Salvar este imóvel?\n" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nPossui Garagem? " +
          imovel.garagem
      );

      if (confirma) {
        imoveis.push(imovel);
      }
      break;

    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui Garagem? " +
            imoveis[i].garagem
        );
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
