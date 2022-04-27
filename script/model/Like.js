// !! Attention les likes se retire lorsque je clic sur la selection d'un filtre 

export default class Like {
    constructor(total, price) {
        this.total = total;
        this.price = price;
    }


    // navigation(containerLike) {
    //     containerLike.forEach((item) => {
    //         let icon = item.querySelector("i");

    //         item.lastElementChild.addEventListener("click", (e) => {
    //             this.addRemoveLike(icon, item, e);
    //         });

    //         item.lastElementChild.addEventListener("keydown", (e) => {
    //             if (e.code === "Enter") {
    //                 this.addRemoveLike(icon, item, e);
    //             }
    //         })
    //     });
    // }

    // Ajout ou retrait d'un like

    addRemoveLike(containerLike) {

        containerLike.forEach((item) => {
            let icon = item.querySelector("i");
            let like = false;

            item.lastElementChild.addEventListener("click", (e) => {
                if (!like) {
                    like = true;
                    item.firstElementChild.textContent++;
                    this.total++
                    icon.classList.remove('far')
                    icon.classList.add('fas')
                    document.querySelector(".total_likes h3").innerHTML = `${this.total} <i class="fas fa-heart"></i>`;
                } else {
                    like = false;
                    icon.classList.remove('fas')
                    icon.classList.add('far')
                    item.firstElementChild.textContent--;
                    this.total--
                    document.querySelector(".total_likes h3").innerHTML = `${this.total} <i class="fas fa-heart"></i>`;
                }
            });

            item.lastElementChild.addEventListener("keydown", (e) => {
                if (e.code === "Enter") {
                    if (!like) {
                        like = true;
                        console.log(like);
                        item.firstElementChild.textContent++;
                        this.total++
                        icon.classList.remove('far')
                        icon.classList.add('fas')
                        document.querySelector(".total_likes h3").innerHTML = `${this.total} <i class="fas fa-heart"></i>`;
                    } else {
                        like = false;
                        console.log(like);
                        icon.classList.remove('fas')
                        icon.classList.add('far')
                        item.firstElementChild.textContent--;
                        this.total--
                        document.querySelector(".total_likes h3").innerHTML = `${this.total} <i class="fas fa-heart"></i>`;
                    }
                }
            })
        });
    };

    // Création  du dom
    createDom() {
        return `
    <article>
         <h3 tabindex="0">
           ${this.total}
           <i class="fas fa-heart" aria-hidden="true"></i>
         </h3>
         <p tabindex="0">${this.price}€ / jour</p>
    </article>
`
    };
} 