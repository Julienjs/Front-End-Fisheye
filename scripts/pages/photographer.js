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

function displayMediaData(media) {
    // Récupération des données dans l'url
    const recuperationUrl = window.location.search;
    const extraction = new URLSearchParams(recuperationUrl);
    const id = extraction.get("id");
    const uid = Number(id);

    // DOM
    const photographHeader = document.querySelector(".photograph-header");
    const mediaSection = document.querySelector(".media_section");
    const sliderSection = document.querySelector(".slider_section");
    const totalLikesSection = document.querySelector(".total_likes");
    const modalFormSection = document.querySelector("#contact_modal");

    // Tableau like
    const likesArray = [];
    const picture = [];

    // Gestion d'affichage du header
    const photographeHeader = photographHeaderFactory(extraction, modalFormSection);
    const photographeHeaderCardDom = photographeHeader.getPhotgraphHeaderCardDom();
    photographHeader.appendChild(photographeHeaderCardDom)


    // Gestion d'affichage des médias par photographe
    media.forEach((medias) => {
        if (uid === medias.photographerId) {

            // picture.push(medias.image + medias.video);
            picture.push(medias.image);

            likesArray.push(medias.likes);

            const photographerMedia = mediaFactory(medias, extraction, sliderSection);
            const userMediaCardDOM = photographerMedia.getUserMediaCardDOM();
            mediaSection.appendChild(userMediaCardDOM);
        }
    });

    console.log(picture);
    // Gestion du slider photo 

    const slider = sliderFactory(picture, extraction, sliderSection);
    const sliderCardDom = slider.sliderCardDom();
    sliderSection.appendChild(sliderCardDom);

    // Gestion du total des likes
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const total = likesArray.reduce(reducer);
    const photographerTotalLikes = likesFactory(total, extraction);
    const likesTotalCardDom = photographerTotalLikes.getLikesTotalCardDom();
    totalLikesSection.appendChild(likesTotalCardDom);

    // Gestion modal form
    const modalForm = modalFactory(extraction, modalFormSection);
    const modalFormCardDom = modalForm.modalFormCardDom();
    modalFormSection.appendChild(modalFormCardDom);
};

async function init() {
    const media = await getMedia();
    displayMediaData(media);
};
init();