/*Llamado a los objetos pra el toglle*/
const menuNav = document.querySelector(".menuNav");
const menuIcon = document.querySelector(".menuIcon");
const masc = document.querySelector(".masc");
const iconMenu = document.getElementById("iconMenu");
const botonList = document.querySelector(".botonList");
const cercosNav = document.querySelector(".cercosNav");
const cercos = document.querySelector(".cercos");
const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");
const imglist = document.getElementById("imgList");
const content = document.querySelector(".content");

function menuNavToggles() {
    menuNav.classList.toggle("on");
    menuIcon.classList.toggle("on");
    masc.classList.toggle("on");
}

function cercosNavToggles() {
    botonList.classList.toggle("on");
    cercosNav.classList.toggle("on");
    cercos.classList.toggle("on");
}

menuIcon.addEventListener("click", menuNavToggles);
masc.addEventListener("click", menuNavToggles); 
botonList.addEventListener("click", cercosNavToggles);
b1.addEventListener("click", () => {
    cercosNavToggles()
    menuNavToggles()
});

b2.addEventListener("click", () => {
    cercosNavToggles()
    menuNavToggles()
});

b3.addEventListener("click", () => {
    cercosNavToggles()
    menuNavToggles()
});