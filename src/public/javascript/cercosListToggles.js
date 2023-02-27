const listIndicator = document.querySelector(".listIndicator");

const views1 = document.querySelector(".views1"),
    views2 = document.querySelector(".views2"),
    views3 = document.querySelector(".views3"),
    views4 = document.querySelector(".views4");

const view1 = document.querySelector(".view1"),
    view2 = document.querySelector(".view2"),
    view3 = document.querySelector(".view3"),
    view4 = document.querySelector(".view4");

const img1 = document.querySelector(".img1"),
    img2 = document.querySelector(".img2"),
    img3 = document.querySelector(".img3"),
    img4 = document.querySelector(".img4");

const esc = document.querySelector(".esc");


views1.addEventListener("click", () => {
    views1.classList.add("on");
    views2.classList.remove("on");
    views3.classList.remove("on");
    views4.classList.remove("on");
    view1.style.marginLeft = "0";
});

views2.addEventListener("click", () => {
    views1.classList.remove("on");
    views2.classList.add("on");
    views3.classList.remove("on");
    views4.classList.remove("on");
    view1.style.marginLeft = "-100%";
});

views3.addEventListener("click", () => {
    views1.classList.remove("on");
    views2.classList.remove("on");
    views3.classList.add("on");
    views4.classList.remove("on");
    view1.style.marginLeft = "-200%";
});

views4.addEventListener("click", () => {
    views1.classList.remove("on");
    views2.classList.remove("on");
    views3.classList.remove("on");
    views4.classList.add("on");
    view1.style.marginLeft = "-300%";
});





function viewsFull(e) {
    e.style.position = "absolute";
    e.style.top = "0";
    e.style.left = "0";
    e.style.zIndex = "6";
    e.style.cursor = "auto";
    e.style.backgroundColor = "#0e0e0e";
    esc.style.visibility = "visible";
    esc.style.zIndex = "7";
};

function viewsEsc(e) {
    e.style.position = "relative";
    e.style.width = "100%";
    e.style.zIndex = "0";
    e.style.cursor = "pointer";
    e.style.backgroundColor = "#ffffff";
    esc.style.visibility = "hidden";
    esc.style.zIndex = "0";
};

view1.addEventListener("click", () => {
    viewsFull(view1);
});

view2.addEventListener("click", () => {
    viewsFull(view2);
});

view3.addEventListener("click", () => {
    viewsFull(view3);    
});

view4.addEventListener("click", () => {
    viewsFull(view4);    
});

esc.addEventListener("click", () => {
    viewsEsc(view1);
    viewsEsc(view2);
    viewsEsc(view3);
    viewsEsc(view4);
});