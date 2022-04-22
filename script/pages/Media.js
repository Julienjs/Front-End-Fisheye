import MediaFactory from "../factories/mediaFactory/MediaFactory.js"
import PhotographerHeader from "../model/PhotographerHeader.js"
import FilterMedia from "../model/FilterMedia.js"
import ModalContact from "../model/ModalContact.js"
import Like from "../model/Like.js"
import LightboxFactory from "../factories/lightboxFactory/LightboxFactory.js"
import EventsLightbox from "../factories/lightboxFactory/EventsLightbox.js"



export default class Media {
    constructor(media, photographer) {
        this.photographer = photographer
        this.media = media
        this.likesArray = [];
        this.showMedia(this.media)
    }

    // Affichage du header avec les données du photographe
    showHeader() {
        const photographHeaderSection = document.querySelector(".photograph-header");
        let photographerHeaderDom = "";
        let photographerHeader = new PhotographerHeader(this.photographer);

        photographerHeaderDom += photographerHeader.createDom();
        photographHeaderSection.innerHTML = photographerHeaderDom;
    }

    // Affichage de modal contact
    showModal() {
        const modalFormSection = document.querySelector("#contact_modal");

        let modalForms = new ModalContact(this.photographer, modalFormSection);

        modalFormSection.innerHTML = modalForms.createDom();
        modalForms.openModal(modalFormSection);
        modalForms.closeModal(modalFormSection);
        modalForms.form();
    }

    // Affichage et gestion des événements des filtres 
    showFilter() {
        const filterSelection = document.querySelector("#filter_selection");
        let filterMedia = new FilterMedia(this.media, this.photographer);
        filterSelection.innerHTML = filterMedia.createDom();
        filterMedia.openselectField();
    }

    // Affichage des médias du photographe selectionné
    showMedia(filterSelected) {
        const mediaSection = document.querySelector(".media_section");
        mediaSection.innerHTML = "";
        let mediaDom = "";
        filterSelected.forEach(medias => {
            let media = new MediaFactory(medias, this.photographer);
            mediaDom += media.createDom();
            this.likesArray.push(medias.likes);
        });
        mediaSection.innerHTML = mediaDom;
    };

    // Affichage et gestion des événements de la lightbox
    showLightBox() {
        const containerMedia = document.querySelectorAll(".container_media");
        const lightboxSection = document.querySelector(".lightbox_section");

        containerMedia.forEach((item, index) => {
            const media = item.querySelector(".media");
            let lightboxDom = "";
            let articleSelect = containerMedia[index];
            let mediaLength = 0;

            for (let i = 0; i < containerMedia.length; i++) {
                mediaLength = containerMedia[i].id = i;
            }

            media.addEventListener("click", () => {
                lightboxSection.style.display = "block";

                let lightbox = new LightboxFactory(articleSelect);
                lightboxDom += lightbox.createDom();
                lightboxSection.querySelector(".lightbox_content").innerHTML = lightboxDom;

                const eventLightbox = new EventsLightbox(articleSelect, lightboxSection, mediaLength);
                eventLightbox.close();
                eventLightbox.next();
                eventLightbox.back();
            });
        });
    };

    // Gestion des événements des likes 
    showLike() {
        const totalLikesSection = document.querySelector(".total_likes");
        const containerLike = document.querySelectorAll(".media_section .container_like");
        let likeDom = "";
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        const total = this.likesArray.reduce(reducer);
        let like = new Like(total, this.photographer.price, containerLike, totalLikesSection);
        like.addRemoveLike(containerLike);
        likeDom += like.createDom();
        totalLikesSection.innerHTML = likeDom;
    }

}

