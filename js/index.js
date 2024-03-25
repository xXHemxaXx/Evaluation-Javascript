// Variable //
let containerListeClub = document.querySelector("#container-liste-club-foot")

// Affiche les matchs //
fetch('js/datas.json')
    .then(response => response.json())
    .then(data => {
    console.log(data);
        // Variable dans le fetch //
        
        // Boucle pour affiche les matchs//
        data.matchs.forEach(match => {
            containerListeClub.innerHTML += `
            <div class="container-club-de-foot">
                <div class="container-club-de-foot-nom">
                    <p>${match.hometeam} - ${match.awayteam}</p>
                </div>
                <div class="container-button">
                    <button class="btn">${match.home_odd}</button>
                    <button class="btn">${match.draw_odd}</button>
                    <button class="btn">${match.away_odd}</button>
                </div>
            </div>
            `
        });
        // Events //
        // containerListeClub.addEventListener('click', function(e){
        //     let containerButton = document.querySelector(".container-button")
        //     // On check si on est bien sur un bouton
        //     if(e.target.classList.contains('btn')) {
        //         // On vérifie si l'élément clické a déjà une classe focusButton ... 
        //         if (e.target.classList.contains('focusButton')){
        //             e.target.classList.remove('focusButton')
        //         } 
        //         // On vérifie si l'élément clické n'a pas déjà une classe focusButton ... 
        //         else {
        //             // Si mon containerListeClub a un autre enfant que celui sur lequel je suis en train de cliquer qui possède déjà la classe focusButton
        //             if(containerListeClub.querySelector('.focusButton')) {
        //                 containerListeClub.querySelector('.focusButton').classList.remove('focusButton')
        //                 e.target.classList.add('focusButton')
        //             // Si mon containerListeClub n'a aucun enfant qui a la classe focusButton alors ...
        //             } else {
        //                 e.target.classList.add('focusButton')
        //             }
        //         }
        //     }
        // })
        let btns = document.querySelectorAll(".btn")
        containerListeClub.addEventListener('click', function(){
            btns.forEach(btn => {
                
            });
        })
    })
    .catch(error => {console.log("Erreur lors de la récup des données :", error);
})

// // Variable DarkMode //
// let tableauxDark = [
//     dark = {
//         svg : `${}`
//     },
//     light = {
//         svg : `${}`
//     }
// ]

// localStorage.setItem('darkmode', JSON.stringify(tableauxDark))


// // Event DarkMode //
// let darkMode = document.querySelector(".darkmode")
