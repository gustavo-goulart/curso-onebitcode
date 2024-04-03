/*
Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

1. Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
2. Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
3. Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.
4. Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.
*/

const nomePersonagem1 = prompt("Escreva o nome do Personagem 1: ");
const poderAtaquePersonagem1 = parseFloat(
  prompt("Insira o valor do poder de ataque: ")
);

const nomePersonagem2 = prompt("Escreva o nome do Personagem 2: ");
const pontosVidaPersonagem2 = parseFloat(
  prompt("Insira o valor do pontos de vida: ")
);
const poderDefesaPersonagem2 = parseFloat(
  prompt("Insira o valor do poder de defesa: ")
);
const possuiEscudo = prompt("Possui escudo? (Sim / Não) ");

let dano = 0;

if (poderAtaquePersonagem1 > poderDefesaPersonagem2 && possuiEscudo === "Não") {
  alert(` ${(dano = poderAtaquePersonagem1 - poderDefesaPersonagem2)}`);
} else if (
  poderAtaquePersonagem1 > poderDefesaPersonagem2 &&
  possuiEscudo === "Sim"
) {
  alert(` ${(dano = poderAtaquePersonagem1 - poderDefesaPersonagem2) / 2}`);
} else if (poderAtaquePersonagem1 <= poderDefesaPersonagem2) {
  alert(`Dano = ${(dano = 0)}, Você Bloqueou o golpe`);
}
