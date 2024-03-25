// Variable //

let containerListeClub = document.querySelector("#container-liste-club-foot")
let btnsMise = document.querySelectorAll("button")

// Affiche les matchs //
fetch('js/datas.json')
    .then(response => response.json())
    .then(data => {
    console.log(data);
        // Boucle pour affiche les matchs
        for (let i = 0; i < data.matchs.length; i++) {
            containerListeClub.innerHTML += `
            <div class="container-club-de-foot">
                <div class="container-club-de-foot-nom">
                    <p>${data.matchs[i].hometeam} - ${data.matchs[i].awayteam}</p>
                </div>
                <div class="container-button">
                    <button>${data.matchs[i].home_odd}</button>
                    <button>${data.matchs[i].draw_odd}</button>
                    <button>${data.matchs[i].away_odd}</button>
                </div>
            </div>
            `
        }
    })
    .catch(error => {console.log("Erreur lors de la récup des données :", error);
})

// btnsMise.addEventListener('toggle', function {
//     btnsMise.classList.toggle("focusButton")
// })