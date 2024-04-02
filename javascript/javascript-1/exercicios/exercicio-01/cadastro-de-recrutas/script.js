let nomeUsuario = prompt("Digite seu nome: ");
let sobrenomeUsuario = prompt("Digite seu sobrenome: ");
let estudo = prompt("Digite sua formação: ");
let anoNascimento = parseInt(prompt("Digite seu ano de nascimento: "));

anoAtual = 2024;

let idadeAnos = anoAtual - anoNascimento;

alert(
  `Seu nome completo é ${
    nomeUsuario + " " + sobrenomeUsuario
  } sua área de estudo  é ${estudo} e você tem ${idadeAnos} anos.`
);
