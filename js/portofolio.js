var succes =  document.querySelectorAll("#fait li a");
var quellepage = 1;
var catalogue = [];

function executerRequete(fonction_A_requete) {
    // on vérifie si le catalogue a déjà été chargé pour n'exécuter la requête AJAX qu'une seule fois
    if (catalogue.length === 0) {
        // on récupère un objet XMLHttpRequest
        var xhr = getXMLHttpRequest();
        // on réagit à l'événement onreadystatechange
        xhr.onreadystatechange = function() {
            // test du statut de retour de la requête AJAX
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
                // on sauvegarde le catalogue dans une variable
                catalogue = JSON.parse(xhr.responseText);
                // on lance la fonction de fonction_A_requete avec le catalogue récupéré
                fonction_A_requete();
            }
        }
        // la requête AJAX : lecture de data.json
        xhr.open("GET", "json/portfolio.json", true);
        xhr.send();
    } else {
        // on lance la fonction de fonction_A_requete avec le catalogue déjà récupéré précédemment
        fonction_A_requete();
    }
}

for (let i=0; i<5 ; i++){
    succes[i].onclick = function () {
        for (let j=0; j<4 ; j++){
            succes[j].classList.remove('color');
        }
        //Gère la rotation de l'index des pages de hauts fait
        if(i == 0){
            if(quellepage>1){
                quellepage--;
            }
            else{
                quellepage=3
            }
        }
        else if (i ==4){
            if(quellepage<3){
                quellepage++;
            }
            else{
                quellepage=1;
            }
        }
        else{
            quellepage = i ;
        }     
        succes[quellepage].classList.add('color');
        page()
    }
}

function page(){
    document.querySelector("#fait section").innerHTML = "";
    for (let i=-4+(4*quellepage); i<(4*quellepage); i++){
        document.querySelector("#fait section").insertAdjacentHTML("beforeend",`
        <div class="project">
            <a target="_blank" href="${catalogue[i].link}">
                <p>${catalogue[i].nom}</p>
                <div>
                    <img src="src/icons/${catalogue[i].icon}">
                    <p>${catalogue[i].descri}</p>
                </div>
            </a>
        </div>`);
    }
}

// on initialise la lecture au premier élément
executerRequete(page);