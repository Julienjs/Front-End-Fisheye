function modalFactory(photograph, modalSection) {


  const closeSvg = `assets/icons/close.svg `

  function modalFormCardDom() {

    const article = document.createElement("article");
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerHTML = `Contactez-moi </br> ${photograph.name}`
    const h3 = document.createElement("h3");
    h3.textContent = name
    const img = document.createElement("img");
    img.setAttribute('src', closeSvg);
    img.addEventListener("click", () => {
      modalSection.style.display = "none";
    })
    const form = document.createElement('form');
    // Prénom
    const labelFirst = document.createElement('label');
    labelFirst.for = "firstname";
    labelFirst.textContent = "Prénom";
    const inputFirst = document.createElement('input');
    inputFirst.id = "firstname";
    inputFirst.type = "text";
    inputFirst.name = "firstname";
    // Nom
    const labelLast = document.createElement('label');
    labelLast.for = "lastname";
    labelLast.textContent = "Nom";
    const inputLast = document.createElement('input');
    inputLast.id = "lastname";
    inputLast.type = "text";
    inputLast.name = "lastname";
    // Email
    const labelEmail = document.createElement('label');
    labelEmail.for = "email";
    labelEmail.textContent = "Email";
    const inputEmail = document.createElement('input');
    inputEmail.id = "email";
    inputEmail.type = "email";
    inputEmail.name = "email";
    // Message
    const labelMessage = document.createElement('label');
    labelMessage.for = "message";
    labelMessage.textContent = "Message";
    const textarea = document.createElement('textarea');
    textarea.id = "message";
    textarea.type = "text";
    textarea.name = "message";
    // Button
    const button = document.createElement('button');
    button.textContent = "Envoyer"
    button.classList.add('contact_button');




    article.appendChild(div);
    div.appendChild(h1);
    div.appendChild(img);
    article.appendChild(form);
    form.appendChild(labelFirst);
    form.appendChild(inputFirst);
    form.appendChild(labelLast);
    form.appendChild(inputLast);
    form.appendChild(labelEmail);
    form.appendChild(inputEmail);
    form.appendChild(labelMessage);
    form.appendChild(textarea);
    form.appendChild(button)


    return article




    {/* <article class="modal">
<div class="header">
  <h2>Contactez-moi</h2>
  <img src="assets/icons/close.svg" onclick="closeModal()" />
</div>
<form>
  <label for="firstname">Prénom</label>
  <input type="text" id="firstname" name="firstname" />
  <label for="lastname">Nom</label>
  <input type="text" id="lastname" name="lastname" />
  <label for="email">Email</label>
  <input type="email" id="email" name="email" />
  <label for="message">Votre message</label>
  <textarea type="textarea" id="message" name="message"></textarea>
  <button class="contact_button">Envoyer</button>
</form>
</article> */}

  }
  return { modalFormCardDom }

}
// function closeModal() {
        //     const modal = document.getElementById("contact_modal");
        //     modal.style.display = "none";
        // }