function photographerFactory(photographer) {
    const { name, portrait, country, city, tagline, price, id } = photographer;
    const picture = `../../assets/photographers/${portrait}`;
    console.log(photographer);
    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.alt = `Photo du photographe ${name}`
        img.classList.add("image_profil");
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const pCountry = document.createElement('p');
        pCountry.textContent = `${city} , ${country} `;
        pCountry.style.color = "#901c1c"
        const pTagLine = document.createElement('p');
        pTagLine.textContent = tagline;
        const smallPrice = document.createElement('small');
        smallPrice.textContent = `${price}€/jour`
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pCountry);
        article.appendChild(pTagLine);
        article.appendChild(smallPrice);

        article.addEventListener("click", () => {
            window.location.href = `photographer.html?id=${id}`
        });
        return article;
    }
    return { ...photographer, getUserCardDOM }
};