/*
Escreva um programa em javascript que funcione como um conversor de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

1. milímetro (mm)
2. centímetro (cm)
3. decímetro (dm)
4. decâmetro (dam)
5. hectômetro (hm)
6. quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso).
*/

const medida = prompt("Digite a medida em Metros:");

const unidade = prompt(
  "Para qual medida deseja converter?:\n1. Milímetros (mm)\n2. Centímetros (cm)\n3. Decímetros (dm)\n4. Decâmetros (dam)\n5. Hectômetros (hm)\n6. Quilômetros (km)"
);

switch (unidade) {
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm");
    break;
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm");
    break;
  case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm");
    break;
  case "4":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam");
    break;
  case "5":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm");
    break;
  case "6":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km");
    break;
  default:
    alert("Opção inválida");
}
