let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let btn = document.getElementById("button");
let smallBox = document.querySelector(".bgcolor-random");
let hexCode = document.getElementById("hex");

function getNewColor() {
    let symbols,color;
    symbols = "0123456789ABCDEF";

    color ="#";
    for (let i = 0; i <6; i++) {
        color += symbols[Math.floor(Math.random() * 16 )];
    } 

    smallBox.style.background = color;
    hexCode.innerHTML = color;
}

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value + 
    ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
};

button.addEventListener("click", getNewColor);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

