export default class Image {
    constructor(media, photographerName) {
        Object.assign(this, media)
        this.photographerName = photographerName;
    }

    // Création du dom
    createDom() {
        return `
        <article class="container_media">
            <img class="open-slider media" tabindex="0" aria-expanded="true" alt="${this.title}" src="../../assets/media/${this.photographerName.split(' ')[0]}/${this.image}">
                <div>
                    <h2 tabindex="0">${this.title}</h2>
                    <div class="container_like">
                        <p tabindex="0" aria-label="${this.likes} likes" style="cursor: pointer;">${this.likes}</p>
                        <i tabindex="0" role="button" aria-pressed="false" aria-label="cliquez pour aimer cette photo" class="far fa-heart"></i>
                    </div>
                </div>
        </article>
        `
    }
}