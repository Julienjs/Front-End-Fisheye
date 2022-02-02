
function mediaFactory(media, photograph) {

    const { image, likes, title, id, video } = media;
    const { name } = photograph;
    const picture = `../../assets/media/${name.split(' ')[0]}/${image}`;
    const videos = `../../assets/media/${name.split(' ')[0]}/${video}`;
    const playSvg = `assets/icons/play.svg`




    function getUserMediaCardDOM() {
        const article = document.createElement('article');
        article.classList.add("container_media")


        const img = document.createElement('img');
        img.alt = `média intituler ${title}`
        img.classList.add("open-slider");


        const div = document.createElement('div');

        const containerLike = document.createElement('div');
        containerLike.classList.add("container_like");
        const like = document.createElement('p');
        const i = document.createElement('i');
        i.classList.add('fa-heart');
        i.classList.add('fas');
        like.textContent = likes;
        like.style.cursor = "pointer"
        const h2 = document.createElement('h2');
        h2.textContent = title;


        if (video) {
            const video = document.createElement('video');
            video.setAttribute("src", videos);
            article.appendChild(video);
            const logoPlay = document.createElement('img');
            logoPlay.classList.add("logo_play");
            logoPlay.src = playSvg;
            article.appendChild(logoPlay);

        } else if (image != undefined) {
            article.appendChild(img);
            img.setAttribute("src", picture);


        }

        article.appendChild(div)
        div.appendChild(h2);
        div.appendChild(containerLike);
        containerLike.appendChild(like)
        containerLike.appendChild(i)

        return article;
    }

    return { getUserMediaCardDOM }
};




