// Variable //
let containerListeClub = document.querySelector("#container-liste-club-foot")

// Affiche les matchs //
fetch('js/datas.json')
    .then(response => response.json())
    .then(data => {
    console.log(data);
        
        // Boucle pour affiche les matchs//
        for (let i= 0; i < data.matchs.length; i++) {
            containerListeClub.innerHTML += `
            <div class="container-club-de-foot">
                <div class="container-club-de-foot-nom">
                    <p>${data.matchs[i].hometeam} - ${data.matchs[i].awayteam}</p>
                </div>
                <div class="container-button wrapper-btn${i}">
                    <button class="btn${i}" data-hometeam="${data.matchs[i].hometeam}" data-score="${data.matchs[i].home_odd}" >${data.matchs[i].home_odd}</button>
                    <button class="btn${i}" data-x="match nul" data-score="${data.matchs[i].draw_odd}">${data.matchs[i].draw_odd}</button>
                    <button class="btn${i}" data-awayteam="${data.matchs[i].awayteam}"data-awayteam="${data.matchs[i].awayteam}" data-score="${data.matchs[i].away_odd}">${data.matchs[i].away_odd}</button>
                </div>
            </div>
            `
        }
        // Variable //
        let wrapperBtn0 = document.querySelector(".wrapper-btn0")
        let description = document.querySelector(".description")
        let Poubelle = document.querySelector(".delete")
        let btn = document.querySelector("button")
        let matchDomicile = btn.getAttribute("data-hometeam")
        let matchNul = btn.getAttribute("data-x")
        let matchVisiteur = btn.getAttribute("data-awayteam")
        let wrapperscroll = document.querySelector(".scroll")
        let wrapperprice = document.querySelector(".price")


        // Events //
        console.log(wrapperBtn0);
        containerListeClub.addEventListener('click', function(e){
            // On check si on est bien sur un bouton
            if(e.target.classList.contains("btn0")) {
                // On vérifie si l'élément clické a déjà une classe focusButton ... 
                if (e.target.classList.contains('focusButton')){
                    e.target.classList.remove('focusButton')
                } 
                // On vérifie si l'élément clické n'a pas déjà une classe focusButton ... 
                else {
                    // Si mon wrapperBtn0 a un autre enfant que celui sur lequel je suis en train de cliquer qui possède déjà la classe focusButton
                    if(wrapperBtn0.querySelector('.focusButton')) {
                        wrapperBtn0.querySelector('.focusButton').classList.remove('focusButton')
                        e.target.classList.add('focusButton')
                        wrapperscroll.style.display = "initial"
                        wrapperprice.style.display = "initial"
                        description.innerHTML += `
                        <h3></h3>
                        <p>]${matchDomicile} - ${matchVisiteur}</p>
                        `
                        Poubelle.innerHTML += `
                        <p></p>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                            </svg>
                        </a>
                        `
                    }
                    // Si mon wrapperBtn0 n'a aucun enfant qui a la classe focusButton alors ...
                    else {
                        e.target.classList.add('focusButton')
                    }
                }
            }
        })
        let wrapperBtn1 = document.querySelector(".wrapper-btn1")
        console.log(wrapperBtn1);
        containerListeClub.addEventListener('click', function(e){
            // On check si on est bien sur un bouton
            if(e.target.classList.contains("btn1")) {
                // On vérifie si l'élément clické a déjà une classe focusButton ... 
                if (e.target.classList.contains('focusButton')){
                        e.target.classList.remove('focusButton')
                } 
                // On vérifie si l'élément clické n'a pas déjà une classe focusButton ... 
                else {
                    // Si mon wrapperBtn0 a un autre enfant que celui sur lequel je suis en train de cliquer qui possède déjà la classe focusButton
                    if(wrapperBtn1.querySelector('.focusButton')) {
                        wrapperBtn1.querySelector('.focusButton').classList.remove('focusButton')
                        e.target.classList.add('focusButton')
                    }
                    // Si mon wrapperBtn0 n'a aucun enfant qui a la classe focusButton alors ...
                    else {
                        e.target.classList.add('focusButton')
                    }
                }
            }
        })

    })
    .catch(error => {console.log("Erreur lors de la récup des données :", error);
})