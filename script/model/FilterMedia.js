import Media from "../pages/Media.js";

export default class FilterMedia {
  constructor(media, photographer) {
    this.media = media
    this.photographer = photographer

  }

  // Evenement 
  navigation() {
    const selectField = document.querySelector(".selectField");
    const arrow = document.querySelector(".arrow");
    const list = document.querySelector("#list");
    const selectText = document.querySelector("#selectText");
    const options = document.querySelectorAll(".option");

    selectField.addEventListener("click", () => {
      this.openselectField(selectField, selectText, arrow, list)
    })

    selectField.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        this.openselectField(selectField, selectText, arrow, list)
      }
    })

    // Naviguation dans la liste  
    options.forEach(option => {

      if (selectText.textContent === "Popularité") {
        popular.style.display = "none"
      } else {
        popular.style.display = "block"
      }

      // Selection du filtre au click
      option.addEventListener("click", (e) => {
        this.filter(e, selectText)
        list.classList.toggle("hide");
        arrow.classList.toggle("rotate");
        selectField.classList.toggle("border");
      });


      option.addEventListener("keydown", (e) => {
        // Selection du filtre au clavier
        if (e.code === "Enter") {
          this.filter(e, selectText)
          list.classList.toggle("hide");
          arrow.classList.toggle("rotate");
          selectField.classList.toggle("border");
        }
        // Ferme la liste au clavier
        if (e.code === "Escape") {
          selectField.setAttribute('aria-expanded', false)
          list.classList.toggle("hide");
          arrow.classList.toggle("rotate");
          selectField.classList.toggle("border");
        }
      })

      selectField.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
          list.classList.toggle("hide");
          arrow.classList.toggle("rotate");
          selectField.classList.toggle("border");
        }
      })
    });
  }

  // Ouvre la liste
  openselectField(selectField, selectText, arrow, list) {
    selectField.setAttribute('aria-expanded', true)
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
    selectField.classList.toggle("border");
    selectText.classList.toggle("option")
    // document.querySelector("ul").focus()
  };


  // Selection du filtre médias
  filter(e, selectText) {
    let media = new Media(this.media, this.photographer);
    let mediaFilter
    const popular = document.querySelector("#popular");
    const title = document.querySelector("#title");
    const date = document.querySelector("#date");

    selectText.innerHTML = e.target.innerHTML;

    if (e.target.innerHTML === 'Titre') {
      mediaFilter = this.media.sort((a, b) => { return (a.title > b.title) ? 1 : -1; });

      popular.style.display = "block";
      title.style.display = "none";
      date.style.display = "block";

      media.showMedia(mediaFilter);
      media.showLightBox();
      media.showLike()
      this.aria(selectText, popular, date, title)

    } else if (e.target.innerHTML === 'Date') {
      mediaFilter = this.media.sort((a, b) => { return (b.date > a.date) ? 1 : -1; });

      date.style.display = "none";
      title.style.display = "block";
      popular.style.display = "block";

      media.showMedia(mediaFilter);
      media.showLightBox();
      media.showLike()
      this.aria(selectText, popular, date, title)

    } else if (e.target.innerHTML === 'Popularité') {
      mediaFilter = this.media.sort((a, b) => { return (b.likes > a.likes) ? 1 : -1; });

      popular.style.display = "none";
      title.style.display = "block";
      date.style.display = "block";

      media.showMedia(mediaFilter);
      media.showLightBox();
      media.showLike()
      this.aria(selectText, popular, date, title)
    }
  };

  // Modifie le aria-selected ,aria-labelledby et aria-activedescendant en fonction du choix du filtre
  aria(selectText, popular, date, title) {
    const selectField = document.querySelector(".selectField");

    switch (selectText.innerHTML) {
      case "Titre":
        selectField.setAttribute("aria-labelledby", "Titre")

        selectField.setAttribute("aria-activedescendant", "Titre")

        title.setAttribute("aria-selected", true)
        popular.setAttribute("aria-selected", false)
        date.setAttribute("aria-selected", false)
        break;
      case "Popularité":
        selectField.setAttribute("aria-labelledby", "Popularité")

        selectField.setAttribute("aria-activedescendant", "Popularité")

        title.setAttribute("aria-selected", false)
        popular.setAttribute("aria-selected", true)
        date.setAttribute("aria-selected", false)
        break;
      case "Date":
        selectField.setAttribute("aria-labelledby", "Date")

        selectField.setAttribute("aria-activedescendant", "Date")

        title.setAttribute("aria-selected", false)
        popular.setAttribute("aria-selected", false)
        date.setAttribute("aria-selected", true)
        break;
    }
  }

  // Création du dom
  createDom() {
    return `
      <article class="selector">
      <label>Trier par :</label>
      <div class="header-selector">
        <div class="selectField border" role="button" tabIndex="0" aria-expanded="false" aria-haspopup="listbox">
          <p id="selectText">Popularité</p>
          <img src="assets/icons/down-arrow.svg" alt="" class="arrow">
        </div>
        <ul id="list" class="hide">
          <li class="option" id="popular" role="listbox" tabindex="0" aria-selected="false" >Popularité</li>
          <li class="option" id="date" role="listbox" tabindex="0" aria-selected="false">Date</li>
          <li class="option" id="title" role="listbox" tabindex="0" aria-selected="false">Titre</li>
        </ul>
      </div>
    </article>
      `
  };
}

