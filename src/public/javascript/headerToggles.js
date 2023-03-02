/*Llamado a los objetos pra el toglle*/
const menuVar = document.querySelector(".menuNav");
const iconMenu = document.querySelector(".iconMenu");
const nav = document.querySelector(".nav");

menuVar.addEventListener("click", () => {
    menuVar.classList.toggle("on");
    iconMenu.classList.toggle("on");
    nav.classList.toggle("on");
});