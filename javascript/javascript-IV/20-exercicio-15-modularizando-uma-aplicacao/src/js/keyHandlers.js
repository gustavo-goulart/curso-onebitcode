import calculate from "./calculate.js";

const input = document.querySelector("#input");

export function handleButtonPress(ev) {
  const value = ev.currentTarget.dataset.value;
  input.value += value;
}

export function handleClearButton() {
  input.value = "";
  input.focus();
}

export function handleTyping(ev) {
  ev.preventDefault();

  //array de teclas permitidas
  const allowedKeys = [
    "(",
    ")",
    "/",
    "*",
    "-",
    "+",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    ".",
    "%",
    " ",
  ];

  //evento que evita digitar letras dentro do input
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }

  //excluir caracter
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }

  //evento para calcular o resultado
  if (ev.key === "Enter") {
    calculate();
  }
}
