const resultado = prompt(
  "Escolha uma alternativa:\n1)Azul\n2)Laranja\n3)Vermelho"
);

const resultadoNumerico = parseFloat(resultado);

switch (resultadoNumerico) {
  case 1:
    alert("O resultado é 'Azul'");
    break;
  case 2:
    alert("O resultado é 'Laranja'");
    break;
  case 3:
    alert("O resultado é 'Vermelho'");
    break;
  default:
    alert("Finalizando...");
}
