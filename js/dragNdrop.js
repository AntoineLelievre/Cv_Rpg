var bar = document.querySelector("#bar");
var main = document.querySelector("main");
var bar2 = document.querySelector("#bar2");
var inventaire = document.querySelector("footer");



bar.onmousedown = function (event) {
    let shiftX = event.clientX - bar.getBoundingClientRect().left;
    let shiftY = event.clientY - bar.getBoundingClientRect().top;

    bar.style.position = 'absolute';
    bar.style.zIndex = 1000;
    main.style.zIndex = 999;

    document.body.append(bar);
    document.body.append(main);
    // centers the bar at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        bar.style.left = pageX - shiftX + 'px';
        bar.style.top = pageY - shiftY + 'px';

        main.style.left = pageX - shiftX + 'px';
        main.style.top = pageY - shiftY + 'px';
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    // (3) move the bar on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // (4) drop the bar, remove unneeded handlers
    bar.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        bar.onmouseup = null;
        
        bar.style.zIndex = 10;
        main.style.zIndex = 9;

        bar2.style.zIndex = 1;
        inventaire.style.zIndex = 0;
    };
};
bar.ondragstart = function () {
    return false;
};


bar2.onmousedown = function (event) {
    let shiftX = event.clientX - bar2.getBoundingClientRect().left;
    let shiftY = event.clientY - bar2.getBoundingClientRect().top;

    bar2.style.position = 'absolute';
    bar2.style.zIndex = 900;
    inventaire.style.zIndex = 899;

    document.body.append(bar2);
    document.body.append(inventaire);
    // centers the bar at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        bar2.style.left = pageX - shiftX + 'px';
        bar2.style.top = pageY - shiftY + 'px';

        inventaire.style.left = pageX - shiftX + 'px';
        inventaire.style.top = pageY - shiftY + 'px';
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    // (3) move the bar on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // (4) drop the bar, remove unneeded handlers
    bar2.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        bar2.onmouseup = null;

        bar2.style.zIndex = 10;
        inventaire.style.zIndex = 9;

        bar.style.zIndex = 1;
        main.style.zIndex = 0;
    };
};
bar2.ondragstart = function () {
    return false;
};

//////////drop objet
class App {
    // Static permet de définir une méthode de la classe App ( Méthode = propriété d'une classe, ex : .innerHTML ou .querySelector)
    
    static init() {
        // Création et définition des propriétés de l'image que l'on bouge 
        App.image = document.querySelectorAll('.image')[0];
        App.image.addEventListener("dragstart", App.dragstart);
        App.image.addEventListener("dragend", App.dragend);

        // Ensemble des boites dans lesquelles ont peut déposer l'image
        const containers = document.querySelectorAll('.boite');

        // On applique des propriétés sur chaque boites
        for (let container of containers) {
            container.addEventListener("dragover", App.dragover);
            container.addEventListener("drop", App.drop);
        }
    }
    
    // Se déclenche quand on commence le drag
    static dragstart() {
        this.style.opacity = "0";
    }
    // Se déclenche quand a la fin de notre drag
    static dragend() {
        this.style.opacity = "1";

    }
    // ??? Empeche probablement l'image de retourner dans sa div initiale 
    static dragover(e) {
        e.preventDefault();
    }
    // Se déclenche quand on drop notre image
    static drop() {
        this.append(App.image);
    }
}
document.addEventListener("DOMContentLoaded", App.init)// lance la fonction initial de la classe App au chargement du DOM

