import Photographer from "./pages/Photographer.js";
import Media from "./pages/Media.js";

export default class App {
    constructor(data) {
        this.photographers = data.photographers
        this.media = data.media

        const recoveryUrl = window.location.search;
        const extraction = new URLSearchParams(recoveryUrl);
        const id = extraction.get("id");
        const uid = Number(id);

        if (!uid) {
            let photographer = new Photographer(this.photographers);
            photographer.showPhotographers();
        } else {
            const targetPhotographer = this.photographers.find(photograph => photograph.id === uid);
            const targetMedia = this.media.filter(item => item.photographerId === uid);
            let media = new Media(targetMedia, targetPhotographer);
            media.showHeader();
            media.showModal();
            media.showLike();
            media.showLightBox();
            media.showFilter();
        }
    }
}
