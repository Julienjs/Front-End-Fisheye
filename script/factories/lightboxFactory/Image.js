export default class LightboxImage {
    constructor(image, title) {
        this.title = title.textContent;
        this.src = image.src;
    }

    // Création du dom
    createDom() {
        return `
        <img class="media_slider" src="${this.src}">
        <h2 class="title">${this.title}</h2>
        `
    };
}
