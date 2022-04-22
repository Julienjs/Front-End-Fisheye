// !! Attention les likes se retire lorsque je clic sur la selection d'un filtre 

export default class Like {
    constructor(total, price) {
        this.total = total;
        this.price = price;
    }

    // Ajout ou retrait d'un like
    addRemoveLike(containerLike) {
        containerLike.forEach((item) => {
            let like = false;
            let icon = item.querySelector("i");

            item.lastElementChild.addEventListener("click", (e) => {
                e.preventDefault()
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