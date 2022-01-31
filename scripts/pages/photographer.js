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
    photographer.forEach((photograph) => {
        if (uid === photograph.id) {
            const photographeHeader = photographHeaderFactory(photograph, modalFormSection);
            const photographeHeaderCardDom = photographeHeader.getPhotgraphHeaderCardDom();
            photographHeader.appendChild(photographeHeaderCardDom)


            // Gestion d'affichage des médias par photographe
            media.forEach((medias) => {
                if (uid === medias.photographerId) {
                    likesArray.push(medias.likes);

                    const photographerMedia = mediaFactory(medias, photograph);
                    const userMediaCardDOM = photographerMedia.getUserMediaCardDOM();
                    mediaSection.appendChild(userMediaCardDOM);

                }

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



            // Gestion ajout d'un like
            // const like = document.querySelectorAll(".media_section .container_like");
            // const likeNumber = document.querySelectorAll(".container_like p");
            // console.log(likeNumber);

            // like.forEach((item) => {
            //     item.addEventListener("click", (e) => {
            //         // likeNumber.forEach(r => {
            //         //     console.log(r);
            //         // })
            //         let t = Number(e.target.innerText);
            //         if (t + 1) {

            //             e.target.innerText = t + 1;
            //             console.log(t);
            //         } else {
            //             e.target.innerText = t - 1;
            //         }
            //     })
            // })


            // Gestion du total des likes
            const reducer = (previousValue, currentValue) => previousValue + currentValue;
            const total = likesArray.reduce(reducer);
            const photographerTotalLikes = likesFactory(total, photograph.price);
            const likesTotalCardDom = photographerTotalLikes.getLikesTotalCardDom();
            totalLikesSection.appendChild(likesTotalCardDom);

            // Gestion modal form
            const modalForm = modalFactory(photograph, modalFormSection);
            const modalFormCardDom = modalForm.modalFormCardDom();
            modalFormSection.appendChild(modalFormCardDom);
        }
    })
};

async function init() {
    const media = await getMedia();
    displayMediaData(media.media, media.photographers);
};
init();