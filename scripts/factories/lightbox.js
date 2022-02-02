function lightboxFactory(article, index, lightBox) {
    let articleSelect = article[index];
    let mediaLength = 0;

    for (let i = 0; i < article.length; i++) {
        mediaLength = article[i].id = i;

    }


    // Next preview 
    // SVG
    const previewSvg = `assets/icons/arrow-back.svg`
    const nextSvg = `assets/icons/arrow-forward.svg`

    // Creation element HTML
    const divArrow = document.createElement("div");
    const imgPreview = document.createElement('img');
    const imgNext = document.createElement('img');

    // Ajout des attributs
    imgPreview.setAttribute("src", previewSvg);
    imgNext.setAttribute("src", nextSvg);

    divArrow.appendChild(imgPreview);
    divArrow.appendChild(imgNext);

    // Evenement au clic next
    imgNext.addEventListener('click', () => {
        const newArticle = document.querySelector(".active");
        let y = 0;
        y = articleSelect.id;
        if (y >= 0 && y <= mediaLength - 1) {
            let position = parseInt(y);
            articleSelect = document.getElementById(++position);
            newArticle.classList.remove("active")
            lightboxCardDom(articleSelect);
        }
    });

    // Evenement au clic preview
    imgPreview.addEventListener('click', () => {
        const newArticle = document.querySelector(".active");
        let x = 0;
        x = articleSelect.id;
        if (x >= 1 && x <= mediaLength) {
            let position = parseInt(x);
            articleSelect = document.getElementById(--position);
            newArticle.classList.remove("active");
            lightboxCardDom(articleSelect);
        }
    });

    lightboxCardDom(articleSelect);

    function lightboxCardDom(link) {

        // SVG close
        const closeSvg = `assets/icons/close-color.svg`

        // Création élément HTML       
        const article = document.createElement("article");
        const img = document.createElement("img");
        const video = document.createElement("video");
        const title = document.createElement("h2");
        const divClose = document.createElement("div");
        const imgClose = document.createElement('img');
        const div = document.createElement("div");


        // Ajout des classes et attribut
        title.classList.add("title");
        div.classList.add("container_img");
        divClose.classList.add("container_closeBtn");
        divArrow.classList.add("container_arrowBtn");
        imgClose.classList.add("close_slider");
        imgClose.setAttribute("src", closeSvg);


        //Evenement close lightbox
        imgClose.addEventListener("click", () => {
            article.classList.remove("active")
            article.style.display = "none";
            lightBox.style.display = "none"
        });


        if (link) {
            const articleTitle = link.querySelector("h2");
            const videoTarget = link.querySelector("video");
            const imageTarget = link.querySelector("img");

            if (videoTarget) {
                title.textContent = articleTitle.textContent

                video.classList.add("media_slider");
                video.setAttribute("src", videoTarget.src);
                video.controls = "true";

                article.classList.add("active");
            } else if (imageTarget) {
                title.textContent = articleTitle.textContent

                img.classList.add("media_slider");
                img.setAttribute("src", imageTarget.src);

                article.classList.add("active");

                video.style.display = "none";
            }

            divClose.appendChild(imgClose);

            article.appendChild(div);
            div.appendChild(divClose);
            div.appendChild(divArrow);
            div.appendChild(img);
            div.appendChild(video);
            div.appendChild(title);
            lightBox.appendChild(article);
        };

    }
    return { lightboxCardDom }
};

