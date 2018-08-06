var menu = document.querySelectorAll("section:nth-child(2) div");
var pages = document.querySelectorAll("section:nth-child(3) article");
var navig = document.querySelectorAll("section:nth-child(2) div");
var ligne =  document.querySelectorAll("#skills section");
var inventaire = document.querySelector("footer section");
$(".compet").onclick = function(){
    console.log("coucou")
}
function init(){
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
    //attribution des competences et des descriptions
    let icon = 0;
    for (let i=0; i<5 ; i++){
        //parcours les competences ligne par ligne 
        let element = document.querySelectorAll("#skills .back section:nth-child("+(i+1)+") .compet");
        let marger = 0;
        for (let j=0; j<element.length ; j++){
            //parcours les lignes competence par competence et ajoute leur description
            element[j].style.background = "url('src/icons/Icon"+icon+".png') no-repeat"; 
            element[j].style.backgroundSize = "100%";
            document.querySelector("#skills section:nth-child(5)").insertAdjacentHTML("beforeend",`
            <div class='descri salut'> Description ${icon+1} </div>`);
            element[j].onmouseover = function(){
                document.querySelector(".descri:nth-child("+icon+")").classList.remove ( "salut");
            }
            element[j].onmouseleave = function(){
                document.querySelector(".descri:nth-child("+icon+")").classList.add ("salut");
            }
            icon++
        }
    }
    for (let i=0; i<41;i++){
        inventaire.insertAdjacentHTML('beforeend', '<div class="boite"></div>');
    }
}

document.querySelector(".card").onclick = function (){
    setTimeout(
        function(){
            document.querySelector(".front").classList.toggle("salut");
            document.querySelector(".back").classList.toggle("salut");},200
    )
    
}
init()

/* var macap = document.querySelectorAll(".front .compet");
console.log(macap)
for (let i=0; i<macap.lenght; i++){
    console.log("coucou")
    macap[i].onclick = function(){
        console.log(this)
        this.style.height ="800px"

    }
} */
/*
$(".front .compet").click( function (){
    this.css("width","60px;")
});*/
