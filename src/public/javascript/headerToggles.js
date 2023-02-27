/*Llamado a los objetos pra el toglle*/
const menuVar = document.getElementById("menuVar");
const iconMenu = document.getElementById("iconMenu");
const nav = document.getElementById("nav");

menuVar.addEventListener("click", () => {
    menuVar.classList.toggle("on");
    iconMenu.classList.toggle("on");
    nav.classList.toggle("on");
});