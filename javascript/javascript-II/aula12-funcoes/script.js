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

// function parametrosDoJeitoErrado(
//   nome,
//   telefone,
//   endereco,
//   aniversario,
//   email,
//   senha
// ) {
//   // ...
// }
// function parametrosDoJeitoCerto(usuario) {
//   // ...
// }
// // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
// parametrosDoJeitoErrado(
//   "nome",
//   "telefone",
//   "endereco",
//   "aniversario",
//   "email",
//   "senha"
// );
// const dadosDoUsuario = {
//   nome: "",
//   telefone: "",
//   email: "",
//   senha: "",
//   aniversario: "",
//   endereco: "",
// };
// parametrosDoJeitoCerto(dadosDoUsuario);

// function calcularMedia(a, b) {
//   const media = (a + b) / 2;
//   return media;
// }
// const resultado = calcularMedia(5, 9);
// console.log(resultado);

// function criarProduto(nome, preco) {
//   const produto = { nome, preco, estoque: 1 };
//   return produto;
// }
// const notebook = criarProduto("Notebook Intel Core i3 8GB", 3000);
// console.log(notebook);

// function areaRetangular(base, altura) {
//   return base * altura;
// }
// console.log(areaRetangular(3, 5));
// // Ou até o retorno de outra função
// function areaQuadrada(lado) {
//   return areaRetangular(lado, lado);
// }
// console.log(areaQuadrada(8));

// function olaMundo() {
//   let texto = "...";
//   return texto;
//   texto = "Olá, mundo!";
//   console.log(texto);
// }
// console.log(olaMundo());

function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}
console.log(maioridade(20));
console.log(maioridade(13));
