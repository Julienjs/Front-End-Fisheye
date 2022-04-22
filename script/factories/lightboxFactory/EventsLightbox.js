import LightboxFactory from "./LightboxFactory.js";

export default class EventsLightbox {
    constructor(articleSelect, lightboxSection, mediaLength) {
        this.btnClose = document.querySelector(".close_slider");
        this.btnNext = document.querySelector(".next");
        this.btnBack = document.querySelector(".back");
        this.articleSelect = articleSelect;
        this.lightboxSection = lightboxSection;
        this.mediaLength = mediaLength;
    }

    // Ferme la lightbox
    close() {
        this.btnClose.addEventListener("click", () => {
            this.lightboxSection.style.display = "none";
        })
    };

    // Passer au média suivant
    next() {
        this.btnNext.addEventListener('click', () => {
            let y = 0;
            y = this.articleSelect.id;
            if (y >= 0 && y <= this.mediaLength - 1) {
                let position = parseInt(y);
                this.articleSelect = document.getElementById(++position);
                let lightbox = new LightboxFactory(this.articleSelect);
                let lightboxDom = lightbox.createDom();
                this.lightboxSection.querySelector(".lightbox_content").innerHTML = lightboxDom;
            }
        });
    };

    // Passer au média précédent
    back() {
        this.btnBack.addEventListener('click', () => {
            let x = 0;
            x = this.articleSelect.id;
            if (x >= 1 && x <= this.mediaLength) {
                let position = parseInt(x);
                this.articleSelect = document.getElementById(--position);
                let lightbox = new LightboxFactory(this.articleSelect);
                let lightboxDom = lightbox.createDom();
                this.lightboxSection.querySelector(".lightbox_content").innerHTML = lightboxDom;
            }
        });
    };
}


