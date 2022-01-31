function likesFactory(total, price) {




    function getLikesTotalCardDom() {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.innerHTML = `${total} <i class="fas fa-heart"></i>`;
        const p = document.createElement('p');
        p.textContent = `${price}€ / jour`;

        article.appendChild(h3);
        article.appendChild(p);

        return article

    }
    return { getLikesTotalCardDom }
}