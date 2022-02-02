function modalFactory(photograph, modalSection) {
  const closeSvg = `assets/icons/close.svg `

  const nameRegExp = new RegExp(
    '^[A-Z][A-Za-z\é\è\ê\ë\'-]+$',
  );

  function modalFormCardDom() {

    const article = document.createElement("article");
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerHTML = `Contactez-moi </br> ${photograph.name}`
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


    function validFirstName() {
      const firstValue = inputFirst.value;
      const testLastName = nameRegExp.test(firstValue);

      if (firstValue.length >= 2 && testLastName) {
        spanFirstName.style.display = "none";
        inputFirst.style.border = "solid green";
        inputFirst.style.color = "green";
        return true

      } else if (!testLastName) {
        if (firstValue === '') {
          spanFirstName.textContent = `Veuillez saisir votre prénom pour valider l'inscription`;
        }
        else if (firstValue.length < 2) {
          spanFirstName.textContent = `Votre prénom doit contenir au minimum deux lettres`;
        }
        else if (firstValue !== '' && firstValue.length >= 2 && firstValue[0] !== firstValue[0].toUpperCase()) {
          spanFirstName.textContent = `Votre prénom doit commencer par une Majuscule`;
        }
        else if (firstValue !== '' && firstValue.length >= 2 && firstValue[0] === firstValue[0].toUpperCase()) {
          spanFirstName.textContent = `Votre prénom ne doit pas contenir de chiffre ni de symbole`;
        }
        inputFirst.style.border = "solid red";
        inputFirst.style.color = "red";
        spanFirstName.style.display = "block";
        return false
      }

    };

    // Nom
    const labelLast = document.createElement('label');
    labelLast.for = "lastname";
    labelLast.textContent = "Nom";
    const inputLast = document.createElement('input');
    inputLast.id = "lastname";
    inputLast.type = "text";
    inputLast.name = "lastname";

    function validLastName() {
      const lastValue = inputLast.value;
      const testLastName = nameRegExp.test(lastValue);

      if (lastValue.length >= 2 && testLastName) {
        spanLastName.style.display = "none";
        inputLast.style.border = "solid green";
        inputLast.style.color = "green";
        return true

      } else if (!testLastName) {
        if (lastValue === '') {
          spanLastName.textContent = `Veuillez saisir votre nom pour valider l'inscription`;
        }
        else if (lastValue.length < 2) {
          spanLastName.textContent = `Votre nom doit contenir au minimum deux lettres`;
        }
        else if (lastValue !== '' && lastValue.length >= 2 && lastValue[0] !== lastValue[0].toUpperCase()) {
          spanLastName.textContent = `Votre nom doit commencer par une Majuscule`;
        }
        else if (lastValue !== '' && lastValue.length >= 2 && lastValue[0] === lastValue[0].toUpperCase()) {
          spanLastName.textContent = `Votre nom ne doit pas contenir de chiffre ni de symbole`;
        }
        inputLast.style.border = "solid red";
        inputLast.style.color = "red";
        spanLastName.style.display = "block";
        return false
      }

    };

    // Email
    const labelEmail = document.createElement('label');
    labelEmail.for = "email";
    labelEmail.textContent = "Email";
    const inputEmail = document.createElement('input');
    inputEmail.id = "email";
    inputEmail.type = "email";
    inputEmail.name = "email";

    function validEmail() {

      const emailRegExp = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
        'g'
      );
      const emailValue = inputEmail.value;
      const testEmail = emailRegExp.test(emailValue);

      if (testEmail) {
        spanEmail.style.display = "none";
        inputEmail.style.border = "solid green";
        inputEmail.style.color = "green";
        return true
      } else if (!testEmail) {
        if (emailValue === '') {
          spanEmail.textContent = `Veuillez saisir votre adresse email`;
        }
        else {
          spanEmail.textContent = `Votre Email n'est pas une adresse valide`;
        }
        inputEmail.style.border = "solid red";
        inputEmail.style.color = "red";
        spanEmail.style.display = "block";
        return false
      }
    };

    // Message
    const labelMessage = document.createElement('label');
    labelMessage.for = "message";
    labelMessage.textContent = "Message";
    const textarea = document.createElement('textarea');
    textarea.id = "message";
    textarea.type = "text";
    textarea.name = "message";

    function validMessage() {
      const lastMessage = textarea.value;
      if (lastMessage.length < 20 || lastMessage === '') {
        textarea.style.border = "solid red";
        textarea.style.color = "red";
        spanMessage.style.display = "block";
        spanMessage.textContent = `Votre message doit contenir au moins 20 caractères (${lastMessage.length} caractères)`
        return false
      } else {
        textarea.style.border = "solid green";
        textarea.style.color = "green";
        spanMessage.style.display = "none";
        return true
      }
    };

    // Button
    const submit = document.createElement('input');
    submit.type = "submit";
    submit.textContent = "Envoyer";
    submit.classList.add("submit");
    submit.classList.add('contact_button');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const form = new FormData(e.target)
      const user = {
        firstname: form.get("firstname"),
        lastname: form.get("lastname"),
        email: form.get("email"),
        message: form.get("message")
      };

      if (validFirstName() &&
        validLastName() &&
        validEmail() &&
        validMessage()
      ) {
        console.log({
          Prénom: user.firstname,
          Nom: user.lastname,
          Email: user.email,
          Message: user.message
        });

        modalSection.style.display = "none";
      }
    });


    // Message erreur
    const spanFirstName = document.createElement("span");
    const spanLastName = document.createElement("span");
    const spanEmail = document.createElement("span");
    const spanMessage = document.createElement("span");

    article.appendChild(div);
    div.appendChild(h1);
    div.appendChild(img);
    article.appendChild(form);
    form.appendChild(labelFirst);
    form.appendChild(inputFirst);
    form.appendChild(spanFirstName);
    form.appendChild(labelLast);
    form.appendChild(inputLast);
    form.appendChild(spanLastName);
    form.appendChild(labelEmail);
    form.appendChild(inputEmail);
    form.appendChild(spanEmail);
    form.appendChild(labelMessage);
    form.appendChild(textarea);
    form.appendChild(spanMessage);
    form.appendChild(submit);

    return article
  }
  return { modalFormCardDom }

}
