const id = 82
// Fonction récupération de la data 
async function getPhotographers() {
    const photographers =
        await fetch(`data/photographers.json`)
            .then(res => {
                if (res) {
                    return res.json()
                }
            })
            .then(data => {
                return data.photographers
            })
            .catch(err => { console.log("erreur lors du chargement des données"); })
    return photographers
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);

    });
};

// fonction init recupere la data des photographes de la fonction getphotographers
async function init() {
    const photographers = await getPhotographers();
    displayData(photographers);
};
init();
