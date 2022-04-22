export default class LightboxVideo {
    constructor(video, title) {
        this.title = title.textContent;
        this.video = video;
    }

    // Création du dom
    createDom() {
        return `
        <video class="media_slider" src="${this.video}" controls="true">
        <h2 class="title">${this.title}</h2>
        `
    };
}