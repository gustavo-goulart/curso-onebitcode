function addClimbed() {
  const climbedSection = document.getElementById("players-list");
  console.log(climbedSection);

  const h3 = document.createElement("h3");
  h3.innerText = "Jogador";

  const ul = document.createElement("ul");

  const nameLi = document.createElement("li");
  nameLi.innerText = "Nome: ";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "fullname";
  nameLi.appendChild(nameInput);
  ul.appendChild(nameLi);
  ul.appendChild(document.createElement("br"));

  const positionLi = document.createElement("li");
  positionLi.innerText = "Posição Jogador: ";
  const positionInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "position";
  positionLi.appendChild(positionInput);
  ul.appendChild(positionLi);
  ul.appendChild(document.createElement("br"));

  const numberLi = document.createElement("li");
  numberLi.innerText = "Nº Jogador: ";
  const numberInput = document.createElement("input");
  nameInput.type = "number";
  nameInput.name = "number-player";
  numberLi.appendChild(numberInput);
  ul.appendChild(numberLi);
  ul.appendChild(document.createElement("br"));

  const button = document.createElement("button");
  button.innerText = "Escalar";
  const addButton = document.createElement("button");
  button.type = "submit";
  button.appendChild(addButton);
  ul.appendChild(button);
  ul.appendChild(document.createElement("br"));

  climbedSection.append(h3, ul);
}

//excluindo o último elemento da lista
function removeContact() {
  const contactSection = document.getElementById("contacts-list");

  const titles = document.getElementsByTagName("h3");
  const contacts = document.getElementsByTagName("ul");

  contactSection.removeChild(titles[titles.length - 1]);
  contactSection.removeChild(contacts[contacts.length - 1]);
}
