import App from './App.js';

// Récuperation des données 
function getData() {
    const data =
        fetch(`data/photographers.json`)
            .then(res => {
                if (res) {
                    return res.json()
                }
            })
            .then(data => {
                return data
            })
            .catch(err => { console.log("erreur lors du chargement des données"); })
    return data
};

async function init() {
    const data = await getData();
    new App(data)
};
init();
