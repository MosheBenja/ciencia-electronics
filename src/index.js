/*Importaciones de modulos*/
import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { principals, cercos } from "./routers/routers.js";

/*Configuraciones de Express*/
const app = express();
const PORT = process.env.PORT || 5050;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));
app.set("port", 3000)
app.use(express.static(join(__dirname, "public")));

/*Rutas del document*/
principals(app);
cercos(app);

/*Llamado del puerto 3000*/
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));