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
                return data
            })
            .catch(err => { console.log("erreur lors du chargement des données"); })
    return media
};

function displayMediaData(media, photographer) {
    // Récupération des données dans l'url
    const recuperationUrl = window.location.search;
    const extraction = new URLSearchParams(recuperationUrl);
    const id = extraction.get("id");
    const uid = Number(id);


    // DOM
    const photographHeader = document.querySelector(".photograph-header");
    const mediaSection = document.querySelector(".media_section");
    const lightboxSection = document.querySelector(".lightbox_section");
    const totalLikesSection = document.querySelector(".total_likes");
    const modalFormSection = document.querySelector("#contact_modal");


    // Tableau like
    const likesArray = [];
    // const picture = [];

    // Gestion d'affichage du header
    const photographeHeader = photographHeaderFactory(photographer[0], modalFormSection);
    const photographeHeaderCardDom = photographeHeader.getPhotgraphHeaderCardDom();
    photographHeader.appendChild(photographeHeaderCardDom)


    // Gestion d'affichage des médias par photographe
    media.forEach(medias => {
        likesArray.push(medias.likes);
        const photographerMedia = mediaFactory(medias, photographer[0]);
        const userMediaCardDOM = photographerMedia.getUserMediaCardDOM();
        mediaSection.appendChild(userMediaCardDOM);

    });



    // Gestion de la lightbox
    const containerMedia = document.querySelectorAll(".container_media");

    containerMedia.forEach((item, index) => {
        const image = item.querySelector("img");
        image.addEventListener("click", () => {
            lightboxSection.style.display = "block";
            lightboxFactory(containerMedia, index, lightboxSection);
        });
    });

    // Gestion des likes
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const total = likesArray.reduce(reducer);
    const photographerTotalLikes = likesFactory(total, photographer[0].price);
    const likesTotalCardDom = photographerTotalLikes.getLikesTotalCardDom();
    totalLikesSection.appendChild(likesTotalCardDom);


    // Gestion modal form
    const modalForm = modalFactory(photographer[0], modalFormSection);
    const modalFormCardDom = modalForm.modalFormCardDom();
    modalFormSection.appendChild(modalFormCardDom);
}


async function init() {
    const recuperationUrl = window.location.search;
    const extraction = new URLSearchParams(recuperationUrl);
    const id = extraction.get("id");
    const uid = Number(id);
    const media = await getMedia();
    const targetPhotographer = media.photographers.filter(photograph => photograph.id === uid);
    const targetMedia = media.media.filter(item => item.photographerId === uid);
    displayMediaData(targetMedia, targetPhotographer);
};
init();