/*
Tipos de parâmetros:

Routes => Rotas:
http://localhost:3333/settings/1 

Query => Filtrar e buscar (vem dps da rota/url):
http://localhost:3333/settings/1?search=Algo


Body => {

}
*/

import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);

export { routes };
