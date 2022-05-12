export default class Video {
    constructor(media, photographerName) {
        Object.assign(this, media)
        this.photographerName = photographerName;

    }

    // Création du dom
    createDom() {
        return `
        <article class="container_media">
        <img src="assets/icons/play.svg" class="logo_play" alt="lecture">
        <video class="media" tabindex="0" alt="${this.title}" src="../../assets/media/${this.photographerName.split(' ')[0]}/${this.video}"></video>
                <div>
                    <h2 tabindex="0">${this.title}</h2>
                    <div class="container_like">
                        <p aria-label="${this.likes} personnes aime ce média" style="cursor: pointer;">${this.likes}</p>
                        <i class="far fa-heart" tabindex="0" aria-expanded="true" aria-label="cliquez pour aimer cette vidéo"></i>
                    </div>
                </div>
        </article>
        `
    }
}