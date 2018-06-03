var menu = document.querySelectorAll("section:nth-child(2) div");
var pages = document.querySelectorAll("section:nth-child(3) article");
var navig = document.querySelectorAll("section:nth-child(2) div");

var succes =  document.querySelectorAll("#fait li a");

// Menu 
for (let i=0; i<4 ; i++){
    menu[i].onclick = function () {
        for (let j=0; j<4 ; j++){
            pages[j].classList.add('salut');
            menu[j].classList.remove('select');
        }
        menu[i].classList.add('select');
        pages[i].classList.remove('salut');
    }
}

// Hauts faits navigation 
let quellepage = 1;
for (let i=0; i<5 ; i++){
    succes[i].onclick = function () {
        for (let j=0; j<4 ; j++){
            succes[j].classList.remove('color');
        }
        //Gère la rotation de l'index des pages de haut fait
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
    }
}