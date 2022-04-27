export default class ModalContact {

    constructor(photographer, modalFormSection) {
        this.name = photographer.name;
        this.modalFormSection = modalFormSection
    }

    // Ouvre la modal contact
    openModal() {

        document.querySelector(".contact_button").addEventListener("click", () => {
            this.modalFormSection.style.display = "block";
            const form = document.querySelector("#firstname");
            form.focus()
        });
    };

    // Ferme la modal contact
    closeModal() {
        document.querySelector(".close_modalForm").addEventListener("click", () => {
            this.modalFormSection.style.display = "none";
        })
    };

    // Ferme la modal en cliquant sur echap
    closeModalWithKeyBoard() {
        document.addEventListener('keydown', (e) => {

            if (e.code === "Escape") {
                this.modalFormSection.style.display = "none";
            }
        })
    };

    // Gestion du formulaire
    form() {
        document.querySelector('form input[type="submit"]').addEventListener('click', (e) => {
            e.preventDefault();
            let valid = true;
            let inputs = document.querySelectorAll('.input');

            for (let input of inputs) {
                valid &= this.errors(input);
                if (!valid) {
                    break;
                }
            };

            if (valid) {
                const formData = new FormData(document.querySelector('form'))
                const user = {
                    firstname: formData.get("firstname"),
                    lastname: formData.get("lastname"),
                    email: formData.get("email"),
                    message: formData.get("message")
                };
                console.log(user);
                this.modalFormSection.innerHTML = ""
                this.modalFormSection.innerHTML = this.createDomValidity()
                setTimeout(() => {
                    this.modalFormSection.style.display = "none"
                    // this.modalFormSection.innerHTML = ""
                    // this.modalFormSection.innerHTML = this.createDom()
                    location.reload()
                }, 1600);
            }

        });
    };

    // Message d'erreur
    errors(input) {
        input.closest(".form_group").querySelector("span").innerHTML = "";
        if (input.validity.valueMissing) {
            input.closest(".form_group").querySelector("span").innerHTML = `Ce champs est obligatoire`;
        } if (input.validity.tooShort) {
            input.closest(".form_group").querySelector("span").innerHTML = `Ce champs doit comporter au moins ${input.minLength} caractères`;
        } if (input.validity.patternMismatch) {
            input.closest(".form_group").querySelector("span").innerHTML = `Ce champs doit commencer par une majuscule et ne pas comporter de chiffre et de caractères spéciaux`;
        } if (input.validity.typeMismatch) {
            input.closest(".form_group").querySelector("span").innerHTML = `Veillez à entrer une adresse email valide (exemple@gmail.com)`;
        }
        return input.checkValidity();
    };

    // Création du dom modal form 
    createDom() {
        return `
        <article>
            <div>
              <h1 >Contactez-moi <br>${this.name}</h1>
              <img src="assets/icons/close.svg" alt="logo croix" class="close_modalForm"aria-label="fermer la fenêtre contact">
            </div>
            <form method="get">
            <div class="form_group">
              <label>Prénom</label>
              <input aria-label="entrez votre prénom" class="input" id="firstname" type="text" name="firstname" required pattern="[A-Z][a-zéèêëôï]*" minlength="2">
              <span></span>
              </div>
            <div class="form_group">
              <label>Nom</label>
              <input aria-label="entrez votre nom" class="input" id="lastname" type="text" name="lastname"required pattern="[A-Z][a-zéèêëôï]*" minlength="2">
              <span></span>
              </div>
            <div class="form_group">
              <label>Email</label>
              <input aria-label="entrez votre Email" class="input" id="email" type="email" name="email"required>
              <span></span>
              </div>
            <div class="form_group">
              <label>Message</label>
              <textarea aria-label="entrez votre message" class="input" id="message" name="message" required minlength="20"></textarea>
              <span></span>
              </div>
              <input type="submit" class="submit contact_button">
            </form>
        </article>
    `
    }

    // Création du dom modal validity
    createDomValidity() {
        return `
        <article class="successModal">
          <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_lk80fpsm.json"  background="transparent"  speed="0.9"  style="width: 200px; height: 200px;" autoplay></lottie-player>
          <h2>Message envoyé</h2>
        </article>
    `
    }


};

