import Image from "./Image.js";
import Video from "./Video.js";

export default class MediaFactory {
    constructor(media, photographer) {
        if (media.image) {
            return new Image(media, photographer.name);
        } else {
            return new Video(media, photographer.name);
        }
    }
}