import LightboxImage from "./Image.js";
import LightboxVideo from "./Video.js";

export default class LightboxFactory {

    constructor(articleSelect) {

        let video = articleSelect.querySelector("video");
        let image = articleSelect.querySelector("img");
        let title = articleSelect.querySelector("h2");

        if (video) {
            return new LightboxVideo(video.src, title);
        } else {
            return new LightboxImage(image.src, title);
        }
    }
}


