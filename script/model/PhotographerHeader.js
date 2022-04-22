export default class PhotographerHeader {
    constructor(photographer) {
        Object.assign(this, photographer);
    }

    // Création du dom
    createDom() {
        return `
        <article>
           <div>
              <h1 tabindex="0">${this.name}</h1>
              <h3 tabindex="0">${this.city},${this.country}</h3>
              <p tabindex="0">${this.tagline}</p>
           </div>
           <button class="contact_button" aria-label="contacter la photographe">
              Contactez-moi
           </button>
           <img src="../../assets/photographers/${this.portrait}" class="image_profil" tabindex="0" alt="photographe Mimi Keel">
        </article>
        `
    }
}