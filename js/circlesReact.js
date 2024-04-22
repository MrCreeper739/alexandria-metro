const circle = document.getElementsByClassName("mapDot");
const path   = document.getElementById("mapPath");
const point  = document.getElementById("point");


const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            if (entry.target == circle[0]) {
                
                setTimeout(() => {drawMap();}, 500);
            }
        }
    });
});

observer.observe(circle[0]);
// for (let i = 0; i < circle.length; i++) {observer.observe(circle[i]);}


function drawMap() {

    path.style.animation = `pathDraw 3s forwards`;

    for (let i = 0; i < circle.length; i++) {
    
        circle[i].setAttribute("r", "2");
        circle[i].style.transition = `0.5s ${i/16}s`;
    
        circle[i].addEventListener("mouseover" , () => {activateDot(i, true); });
        circle[i].addEventListener("mouseleave", () => {activateDot(i, false);});
    }
}

function activateDot(i, bool) {

    if (bool)  {
        circle[i].style.transition = `0.2s 0s`;
        circle[i].setAttribute("r", "3");
        drawLine(i, parseFloat(circle[i].getAttribute("cx")), parseFloat(circle[i].getAttribute("cy")), true);
    }
    if (!bool) {
        circle[i].style.transition = `0.2s 0.45s`;
        circle[i].setAttribute("r", "2");
        drawLine(i, parseFloat(circle[i].getAttribute("cx")), parseFloat(circle[i].getAttribute("cy")), false);
    }
}