function likesFactory(total, price) {
    // let count = total;
    // function addLike() {

    //     // Gestion ajout d'un like
    //     const containerLike = document.querySelectorAll(".media_section .container_like");
    //     console.log(containerLike);
    //     containerLike.forEach((item) => {
    //         let like = false;
    //         item.lastChild.addEventListener("click", (e) => {
    //             e.preventDefault()
    //             if (!like) {
    //                 like = true;
    //                 item.firstChild.textContent++;
    //             } else {
    //                 like = false;
    //                 item.firstChild.textContent--;

    //             }

    //         });

    //     })

    // };
    // addLike()




    function getLikesTotalCardDom() {
        const containerLike = document.querySelectorAll(".media_section .container_like");
        const article = document.createElement('article');
        const h3 = document.createElement('h3');

        containerLike.forEach((item) => {
            let like = false;
            item.lastChild.addEventListener("click", (e) => {
                e.preventDefault()
                if (!like) {
                    like = true;
                    item.firstChild.textContent++;
                    total++
                    h3.innerHTML = `${total} <i class="fas fa-heart"></i>`;
                } else {
                    like = false;
                    item.firstChild.textContent--;
                    total--
                    h3.innerHTML = `${total} <i class="fas fa-heart"></i>`;
                }
            });

        });

        const p = document.createElement('p');
        h3.innerHTML = `${total} <i class="fas fa-heart"></i>`;
        p.textContent = `${price}€ / jour`;
        article.appendChild(h3);
        article.appendChild(p);

        return article

    }


    return { getLikesTotalCardDom }
}