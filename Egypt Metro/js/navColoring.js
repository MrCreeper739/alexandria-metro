const history = document.getElementById("historySection");
const metro = document.getElementById("metro");
const nav = document.getElementById("nav");


window.onscroll = () => {

    var scrlY = document.documentElement.scrollTop;
    metro.style.right = `${50 - (scrlY/50)}vw`;



    var rectXt = history.getBoundingClientRect().top;
    var rectXb = history.getBoundingClientRect().bottom;
    
    if (rectXt <= 0 && rectXb >= 0) {

        nav.setAttribute("history", "true");
    } else {

        nav.setAttribute("history", "false");
    }
}