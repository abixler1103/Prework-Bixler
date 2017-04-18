function grow() {
    document.getElementById("box").style.height = "300px";
    document.getElementById("box").style.backgroundColor = "magenta";
    document.getElementById("box").style.opacity = "1";
};

function change() {
    document.getElementById("box").style.backgroundColor = "blue";
};

function fade() {
    document.getElementById("box").style.opacity = "0.3";
};

function reset() {
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
};

function hide() {
    document.getElementById("box").style.opacity = "0";
};

function makeBig(div) {
    div.style.height = "300px";
    div.style.width = "300px";

};

function makeReset(div) {
    div.style.height = "150px";
    div.style.width = "150px";

};

//and now I need conditionals to turn off the onmouseover when in a different function
