// function ola() {
//   console.log("Olá Mundo!");
// }

// ola();

// function dobro(x) {
//   console.log("O dobro de " + x + " é " + x * 2);
// }

// // dobro(5);
// // dobro(7);

// dobro();

// function dizerOla(nome = "mundo") {
//   console.log("Olá, " + nome + "!");
// }
// dizerOla("Isaac");
// dizerOla();

// function soma(a, b) {
//   console.log(a + b);
// }
// soma(1, 1);
// soma(34, 5);

// function criarUsuario(nome, email, senha, tipo = "leitor") {
//   const usuario = { nome, email, senha, tipo };
//   console.log(usuario);
// }

// function novoUsuario(nome, tipo = "leitor", email, senha) {
//   const usuario = { nome, email, senha, tipo };
//   console.log(usuario);
// }

// criarUsuario("Isaac", "isaac@email.com", "1234");
// novoUsuario("Isaac", "isaac@email.com", "1234");

function parametrosDoJeitoErrado(
  nome,
  telefone,
  endereco,
  aniversario,
  email,
  senha
) {
  // ...
}
function parametrosDoJeitoCerto(usuario) {
  // ...
}
// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado(
  "nome",
  "telefone",
  "endereco",
  "aniversario",
  "email",
  "senha"
);
const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereco: "",
};
parametrosDoJeitoCerto(dadosDoUsuario);
