var menu = document.querySelectorAll("section:nth-child(2) div");
var pages = document.querySelectorAll("section:nth-child(3) article");
var navig = document.querySelectorAll("section:nth-child(2) div");
var ligne =  document.querySelectorAll("#skills section");
var inventaire = document.querySelector("footer section");

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
                console.log(icon);
                document.querySelector(".descri:nth-child("+icon+")").classList.remove ( "salut");
            }
            element[j].onmouseleave = function(){
                console.log(icon);
                document.querySelector(".descri:nth-child("+icon+")").classList.add ("salut");
            }
            /*if(element[j].innerText.substr(0,1)== 0){
                element[j].style.filter = ' grayscale(100%)';
                element[j].style.boxShadow = " 0px 0px 50px 10px #000000 inset";
            }*/
            icon++
        }
    }
    for (let i=0; i<41;i++){
        inventaire.insertAdjacentHTML('beforeend', '<div class="boite"></div>');
    }
}

document.querySelector(".card").onclick = function barscroll(){
    setTimeout(
        document.querySelector(".front").classList.toggle("scrollingbar"),2000
    )
    
}
init()