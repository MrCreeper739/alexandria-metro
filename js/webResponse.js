var scrnW = document.documentElement.clientWidth;
var scrnH = document.documentElement.clientHeight;

const historySection = document.getElementById("historySection");

window.onresize = () => {

    scrnW = document.documentElement.clientWidth;
    scrnH = document.documentElement.clientHeight;
    respond(scrnW,scrnH);
}

respond(scrnW,scrnH);


function respond(w,h) {

    if (w >= h) {

        for (let i = 0; i < sections.length; i++) {
            sections[i].style.flexWrap = `nowrap`;
        }
    }
    
    if (h >= w) {

        for (let i = 0; i < sections.length; i++) {
            sections[i].style.flexWrap = `wrap`;
        }

        historySection.style.padding = `0 10px`;
    }
}