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