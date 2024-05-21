//Metodos -> funções atrelados a OBJETOS
let pessoa = {
  nome: "Gustavo",
  idade: 42,
  dizerOla() {
    console.log("Olá Mundo! Meu nome é " + this.nome);
  },
};

console.log(pessoa);

pessoa.dizerOla();
