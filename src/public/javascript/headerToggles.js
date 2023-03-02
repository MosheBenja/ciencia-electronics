/*Llamado a los objetos pra el toglle*/
const menuNav = document.querySelector(".menuNav");
const menuIcon = document.querySelector(".menuIcon");
const masc = document.querySelector(".masc");
const iconMenu = document.getElementById("iconMenu");

menuIcon.addEventListener("click", () => {
    menuNav.classList.toggle("on");
    menuIcon.classList.toggle("on");
    masc.classList.toggle("on");
});

masc.addEventListener("click", () => {
    menuNav.classList.remove("on");
    menuIcon.classList.remove("on");
    masc.classList.remove("on");
}); 