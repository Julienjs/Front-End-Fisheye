


function photographHeaderFactory(url) {

    const name = url.get("name");
    const picture = url.get("picture");
    const tagLine = url.get("tag");
    const country = url.get("country");
    console.log(picture);

    function getPhotgraphHeaderCardDom() {
        const article = document.createElement('article');
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        h1.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = country;
        const p = document.createElement('p');
        p.textContent = tagLine;
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        img.alt = `Photo du photographe ${name}`
        img.classList.add("image_profil");
        const button = document.createElement('button');
        button.textContent = `Contactez-moi`;
        button.classList.add("contact_button");

        button.addEventListener("click", () => {
            const modal = document.getElementById("contact_modal");
            modal.style.display = "block";
        });
        article.appendChild(div);
        div.appendChild(h1);
        div.appendChild(h3);
        div.appendChild(p);
        article.appendChild(button)
        article.appendChild(img);

        return article
    }

    return { getPhotgraphHeaderCardDom }
};


function mediaFactory(media, url, totalLikes) {
    console.log(totalLikes);
    const name = url.get("name");
    const { date, image, likes, price, title, id, photographerId, video } = media;

    const picture = `../../assets/media/${name.split(' ')[0]}/${image}`;
    const videos = `../../assets/media/${name.split(' ')[0]}/${video}`;


    function getUserMediaCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.alt = `média intituler ${title}`
        const div = document.createElement('div');
        const like = document.createElement('p');
        like.innerHTML = `${likes} <i class="fas fa-heart"></i> `
        const h2 = document.createElement('h2');
        h2.textContent = title;

        if (video) {
            const video = document.createElement('video');
            video.setAttribute("src", videos);
            article.appendChild(video);
        } else {
            article.appendChild(img);
        }

        article.appendChild(div)
        div.appendChild(h2);
        div.appendChild(like);
        return article;
    }
    return { getUserMediaCardDOM }
};

