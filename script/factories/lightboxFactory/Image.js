export default class LightboxImage {
    constructor(image, title) {
        this.title = title.textContent;
        this.image = image;
    }

    // Création du dom
    createDom() {
        return `
        <img class="media_slider" src="${this.image}" alt="${this.title}" "tabindex="0" >
        <h2 class="title" tabindex="0">${this.title}</h2>
        `
    };
}
