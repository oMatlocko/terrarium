dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

elementDblClick(document.getElementById('plant1'));
elementDblClick(document.getElementById('plant2'));
elementDblClick(document.getElementById('plant3'));
elementDblClick(document.getElementById('plant4'));
elementDblClick(document.getElementById('plant5'));
elementDblClick(document.getElementById('plant6'));
elementDblClick(document.getElementById('plant7'));
elementDblClick(document.getElementById('plant8'));
elementDblClick(document.getElementById('plant9'));
elementDblClick(document.getElementById('plant10'));
elementDblClick(document.getElementById('plant11'));
elementDblClick(document.getElementById('plant12'));
elementDblClick(document.getElementById('plant13'));
elementDblClick(document.getElementById('plant14'));

function dragElement(terrariumElement) {
    // set 4 positions for positioning on the screen
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;
    
    function pointerDrag(e) {
        e.preventDefault();
        // get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + "px";
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + "px";
    }

    function stopElementDrag() {
        // stop moving when mouse button is released
        document.onpointerup = null;
        document.onpointermove = null;
    }
}


function elementDblClick(terrariumElement) {
    terrariumElement.ondblclick = function() {
        // toggle z-index to bring the element to the front
        if (terrariumElement.style.zIndex === "2") {
            terrariumElement.style.zIndex = "1000";
        } else {
            terrariumElement.style.zIndex = "1000";
        }
        // change the z-index of all other elements to 2
        const allElements = document.querySelectorAll('.plant');
        allElements.forEach(function(el) {
            if (el !== terrariumElement) {
                el.style.zIndex = "2";
            }
        });
    }
}
