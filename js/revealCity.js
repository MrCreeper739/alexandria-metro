const city     = document.getElementsByClassName("city");
const lines    = document.getElementsByClassName("line");
const cityName = document.getElementsByClassName("cityName");

function drawLine(n, x, y, draw) {

    if (draw) {
        lineDistrbution(n, x, y, true);
        lines[n].style.strokeDashoffset = `0`;
        lines[n].style.transition = `0.25s 0.2s`;
    } else {
        lineDistrbution(n, x, y, false);
        lines[n].style.strokeDashoffset = `29`;
        lines[n].style.transition = `0.25s 0.2s`;
    }
}

function lineDistrbution(n, x, y, draw) {

    if (n == 3 || n == 15 || n == 16 || (n >= 6 && n <= 12)) {
        lines[n].setAttribute("points", x+","+(y+3) + " " + (x+7)+","+(y+15) + " " + (x+20)+","+(y+11.5));
        placeCity(n,x+20, Math.floor(y+11.5), draw);
    }
    else if (n >= 0 && n <= 2) {
        lines[n].setAttribute("points", (x+3)+","+y + " " + (x+10)+","+(y-10) + " " + (x+25)+","+(y-14));
        placeCity(n,x+25, Math.floor(y-14), draw);
    }
    else if (n >= 0) {
        lines[n].setAttribute("points", x+","+(y-3) + " " + (x+5)+","+(y-20.2) + " " + (x+15)+","+(y-23.2));
        placeCity(n,x+15, Math.floor(y-23.2), draw);
    }
}

function placeCity(n,x,y,draw) {

    city[n].style.transformOrigin = `${x}px ${y}px`;
    city[n].setAttribute("x", x);
    city[n].setAttribute("y", y);

    if (draw) {
        
        cityName[n].style.transition = `height 0.2s 0.45s, outline 0.2s 0.45s`;
        cityName[n].style.height = `1.7em`;
        cityName[n].style.outline = `#2d6ba9 solid 1px`;
    }
    if (!draw) {

        cityName[n].style.transition = `height 0.2s 0s, outline 0.2s 0s`;
        cityName[n].style.height = `0`;
        cityName[n].style.outline = `#2d6ba9 solid 0px`;
    }
}