import Photographers from "../model/Photographers.js";

export default class Photographer {
    constructor(photographer) {
        this.photographers = photographer
    }

    // Affichage des photographes
    showPhotographers() {
        let photographersDom = "";
        const photographersSection = document.querySelector(".photographer_section");
        this.photographers.forEach((photographer) => {
            let photographers = new Photographers(photographer);
            photographersDom += photographers.createDom();
        });
        photographersSection.innerHTML = photographersDom;
    };

}