import Media from "../pages/Media.js";

export default class FilterMedia {
  constructor(media, photographer) {
    this.media = media
    this.photographer = photographer

  }

  // Ouvre la liste
  openselectField() {
    const selectField = document.querySelector(".selectField");
    const arrow = document.querySelector(".arrow");
    const list = document.querySelector("#list");

    selectField.addEventListener("click", () => {
      this.filter(selectField, arrow, list);
      list.classList.toggle("hide");
      arrow.classList.toggle("rotate");
      selectField.classList.toggle("border");
    });
  };

  // Trie par popularité
  popularFilter() {
    this.media.sort((a, b) => {
      return (b.likes > a.likes) ? 1 : -1;
    });
  };

  // Trie par date
  dateFilter() {
    this.media.sort((a, b) => {
      return (b.date > a.date) ? 1 : -1;
    });
  };

  // Trie par ordre alphabetique du titre
  titleFilter() {
    this.media.sort((a, b) => {
      return (a.title > b.title) ? 1 : -1;
    });
  };

  // Selection du filtre médias
  filter(selectField, arrow, list) {
    let media = new Media(this.media, this.photographer);

    const selectText = document.querySelector("#selectText");
    const options = document.querySelectorAll(".option");
    const popular = document.querySelector("#popular");
    const title = document.querySelector("#title");
    const date = document.querySelector("#date");

    options.forEach(option => {

      if (selectText.textContent === "Popularité") {
        popular.style.display = "none"
      } else {
        popular.style.display = "block"
      }

      option.addEventListener("click", (e) => {
        this.filter(selectField, arrow, list);
        selectText.innerHTML = e.target.innerHTML;

        if (e.target.innerHTML === 'Titre') {
          popular.style.display = "block";
          title.style.display = "none";
          date.style.display = "block";
          this.titleFilter();;
          media.showMedia(this.media);
          media.showLightBox();
          media.showLike()
        } else if (e.target.innerHTML === 'Date') {
          date.style.display = "none";
          title.style.display = "block";
          popular.style.display = "block";
          this.dateFilter();
          media.showMedia(this.media);
          media.showLightBox();
          media.showLike()
        } else if (e.target.innerHTML === 'Popularité') {
          popular.style.display = "none";
          title.style.display = "block";
          date.style.display = "block";
          this.popularFilter();
          media.showMedia(this.media);
          media.showLightBox();
          media.showLike()
        }
        list.classList.toggle("hide");
        arrow.classList.toggle("rotate");
        selectField.classList.toggle("border");
      });
    });
  };

  // Création du dom
  createDom() {
    return `
      <article class="selector">
      <h3>Trier par :</h3>
      <div class="header-selector">
        <div class="selectField border">
          <p id="selectText" class="option">Popularité</p>
          <img src="assets/icons/down-arrow.svg" alt="" class="arrow">
        </div>
        <ul id="list" class="hide">
          <li class="option" id="popular"role="option" tabindex="0">Popularité</li>
          <li class="option" id="date">Date</li>
          <li class="option" id="title">Titre</li>
        </ul>
      </div>
    </article>
      `
  };
}

