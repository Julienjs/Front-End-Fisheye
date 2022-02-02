
function photographHeaderFactory(photograph, modalSection) {
    const { name, tagLine, portrait, country, city } = photograph;
    const picture = `../../assets/photographers/${portrait}`;

    function getPhotgraphHeaderCardDom() {
        const article = document.createElement('article');
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        h1.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = `${city} , ${country}`;
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
            modalSection.style.display = "block";
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