import LightboxFactory from "./LightboxFactory.js";

export default class EventsLightbox {
    constructor(articleSelect, lightboxSection, mediaLength, sectionTotalLikes) {
        this.btnClose = document.querySelector(".close_slider");
        this.btnNext = document.querySelector(".next");
        this.btnBack = document.querySelector(".back");
        this.articleSelect = articleSelect
        this.lightboxSection = lightboxSection
        this.mediaLength = mediaLength
        this.sectionTotalLikes = sectionTotalLikes

        this.lightboxSection.querySelector(".active .media_slider").focus()
        this.btnClose.focus()
    }


    navigation() {
        // Navigation à la souris
        this.btnClose.addEventListener("click", () => { this.close(); })
        this.btnNext.addEventListener('click', () => { this.next(); });
        this.btnBack.addEventListener('click', () => { this.back(); });

        // Navigation au clavier
        this.lightboxSection.addEventListener("keydown", (e) => {
            if (e.code === "Escape") {
                this.close();
            } if (e.code === "ArrowRight") {
                this.next();
            } if (e.code === "ArrowLeft") {
                this.back();
            }
        })
    };

    // Ferme la lightbox
    close() {
        this.lightboxSection.style.display = "none";
        this.sectionTotalLikes.style.position = "fixed"
    };

    // Passer au média suivant
    next() {
        let y = 0;
        y = this.articleSelect.id;
        if (y >= 0 && y <= this.mediaLength - 1) {
            let position = parseInt(y);
            this.articleSelect = document.getElementById(++position);
            let lightbox = new LightboxFactory(this.articleSelect);
            let lightboxDom = lightbox.createDom();
            this.lightboxSection.querySelector(".lightbox_content").innerHTML = lightboxDom;
        }
    };

    // Passer au média précédent
    back() {
        let x = 0;
        x = this.articleSelect.id;
        if (x >= 1 && x <= this.mediaLength) {
            let position = parseInt(x);
            this.articleSelect = document.getElementById(--position);
            let lightbox = new LightboxFactory(this.articleSelect);
            let lightboxDom = lightbox.createDom();
            this.lightboxSection.querySelector(".lightbox_content").innerHTML = lightboxDom;
        }
    };
}


