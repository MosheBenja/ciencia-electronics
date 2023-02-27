//Importacion de las rutas de imagen
import { imgCercos } from "./routersImgs.js"

/*Rutas principales del document*/
function principals(app) {
    app.get("/", (req, res) => res.render("index.ejs", { title: "Inicio" }));
    app.get("/products", (req, res) => res.render("products.ejs", { title: "Productos", imgCercos }));
    app.get("/contacts", (req, res) => res.render("contacts.ejs", { title: "Contactos" }));
    app.get("/guide", (req, res) => res.render("guide.ejs", { title: "Guía" }));
};

/*Rutas de los cercos en products*/
function cercos(app) {
    app.get("/ca100", (req, res) => res.render("global/cercoInfoCA100.ejs", { title: "Cerco CA 100", imgCercos }));
};

/*Exportacion de las rutas*/
export { principals, cercos };