function show() {
  const contatctList = document.getElementById("contact-list");

  const listElements = document.getElementsByTagName("li");

  const contact1 = document.getElementsByName("contact1");
  // console.log(contact1);

  const contatctInput = document.getElementsByClassName("contact-input");
  // console.log(contatctInput);

  const contacts = document.querySelectorAll("#contact-list > li > label");
  // console.log(contacts);

  const firstContacts = document.querySelector("#contact-list > li > label");
  console.log(firstContacts);
}
