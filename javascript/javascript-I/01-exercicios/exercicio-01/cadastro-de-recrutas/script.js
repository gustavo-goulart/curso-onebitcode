const nomeUsuario = prompt("Digite seu nome: ");
const sobrenomeUsuario = prompt("Digite seu sobrenome: ");
const estudo = prompt("Digite sua formação: ");
const anoNascimento = parseInt(prompt("Digite seu ano de nascimento: "));

anoAtual = 2024;

const idadeAnos = anoAtual - anoNascimento;

alert(
  `Seu nome completo é ${
    nomeUsuario + " " + sobrenomeUsuario
  } sua área de estudo  é ${estudo} e você tem ${idadeAnos} anos.`
);
