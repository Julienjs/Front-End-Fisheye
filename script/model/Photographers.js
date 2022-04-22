export default class Photographers {
    constructor(photographer) {
        Object.assign(this, photographer);
    }

    // Création du dom 
    createDom() {
        return `
        <article class="photographer">
            <a href="../photographer.html?id=${this.id}" tabindex="0">
                 <img src="../../assets/photographers/${this.portrait}" alt="Photographe ${this.name}" class="image_profil" >
                 <h2 tabindex="0">${this.name}</h2> 
            </a>
            <p tabindex="0" class="city">${this.city},${this.country}</p>
            <p tabindex="0" class="tagline">${this.tagline}</p>
            <small aria-labelledby="${this.price}€ par jour" tabindex="0">${this.price}€/jour</small>
        </article>
        `
    };

}