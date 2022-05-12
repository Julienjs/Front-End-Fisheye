export default class PhotographerHeader {
    constructor(photographer) {
        Object.assign(this, photographer);
        console.log(this.portrait);
    }

    // Création du dom
    createDom() {
        return `
        <article>
           <div>
              <h1 tabindex="0" aria-label="photographe ${this.name}">${this.name} </h1>
              <p tabindex="0" aria-label="habitant a ${this.country} a ${this.city}" class="country">${this.city},${this.country}</p>
              <p tabindex="0">${this.tagline}</p>
           </div>
           <button class="contact_button" aria-label="contact me">
              Contactez-moi
           </button>
           <img src="../../assets/photographers/${this.portrait}" class="image_profil" tabindex="0" alt="photographe ${this.name}">
        </article>
        `
    }
}