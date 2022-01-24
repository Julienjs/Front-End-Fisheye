//Mettre le code JavaScript lié à la page photographer.html

function getMedia() {
    const media =
        fetch(`data/photographers.json`)
            .then(res => {
                if (res) {
                    return res.json()
                }
            })
            .then(data => {
                return data.media
            })
            .catch(err => { console.log("erreur lors du chargement des données"); })
    return media
};

async function displayMediaData(media) {
    const recuperationUrl = window.location.search;
    const extraction = new URLSearchParams(recuperationUrl);
    const id = extraction.get("id")
    const uid = Number(id)
    const mediaSection = document.querySelector(".media_section");
    const photographHeader = document.querySelector(".photograph-header");
    likesArray = [];

    media.forEach((medias) => {
        if (uid === medias.photographerId) {
            likesArray.push(medias.likes);
            const addition = (previousValue, currentValue) => previousValue + currentValue;
            const totalLikes = likesArray.reduce(addition);
            const photographerMedia = mediaFactory(medias, extraction, totalLikes);
            const userMediaCardDOM = photographerMedia.getUserMediaCardDOM();
            mediaSection.appendChild(userMediaCardDOM);
        }
    });

    const photographeHeader = photographHeaderFactory(extraction);
    const photographeHeaderCardDom = photographeHeader.getPhotgraphHeaderCardDom();
    photographHeader.appendChild(photographeHeaderCardDom)
};

async function init() {
    const media = await getMedia();
    displayMediaData(media);
};
init();