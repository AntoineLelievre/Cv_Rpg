let bar = document.querySelector("#bar");
        let main = document.querySelector("main");

        bar.onmousedown = function(event) {
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
                bar.style.top = pageY - shiftY  + 'px';

                main.style.left = pageX - shiftX + 'px';
                main.style.top = pageY - shiftY  + 'px';
            }
            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }
            // (3) move the bar on mousemove
            document.addEventListener('mousemove', onMouseMove);

            // (4) drop the bar, remove unneeded handlers
            bar.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                bar.onmouseup = null;
            };
        };
        bar.ondragstart = function() {
            return false;
        };
        /*
        function handleDragStart(e) {
            this.style.opacity = '0.5';  // this / e.target is the source node.
        }

        function handleDragOver(e) {
            if (e.preventDefault) {
                e.preventDefault(); // Necessary. Allows us to drop.
            }
            e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
            return false;
        }

        function handleDrop(e) {
            // this / e.target is current target element.
            if (e.stopPropagation) {
                e.stopPropagation(); // stops the browser from redirecting.
            }
            // See the section on the DataTransfer object.
            return false;
        }

        function handleDragEnd(e) {
            // this/e.target is the source node.
            [].forEach.call(cols, function (col) {
                col.classList.remove('over');
            });
        }

        var cols = document.querySelector('main');
        cols.addEventListener('dragstart', handleDragStart, false);
        cols.addEventListener('drop', handleDrop, false);
        cols.addEventListener('dragend', handleDragEnd, false);*/