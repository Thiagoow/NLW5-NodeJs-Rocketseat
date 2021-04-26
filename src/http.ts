/*
REQUISITOS DO MEU 1º PROJETO COM NODE.JS:

Dependências:
-TypeScript;
-Express.js (Node Framework).

E usamos também, fora do VS Code:
-API Ecosystem Hoppsctoch (antiga PostWoman);
-Node.js 14 + NPM (instalado via Chocolatey, com comandos no WindowsPowerShell)
-Yarn 1.22 (instalado via comandos WindowsPowerShell)

RODANDO O NOSSO .TS PELO TERMINAL DO NODE COM YARN:
-Digite: "yarn dev" no terminal.
PARA PARAR DE RODAR NOSSO .TS PELO TERMINAL:
-Clique no lixinho na aba superior da janela do terminal.
*/

//Importando a dependência do express:
import express, { response } from "express";

import { createServer } from "http";
import { Server, Socket } from "socket.io";
// Módulo próprio Node.js que permite a gente ver o caminho de um arquivo:
import path from "path";

//Importando a rota do repositório:
import { routes } from "./routes";
//Importando a dependência do TypeORM (lá no ./database/index.ts):
import "./database";

const app = express();

//Importando a pasta "public" com o módulo "path" do Node.js:
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

//Cria o protocolo http:
const http = createServer(app);
//Cria o protocole do WS (websocket):
const io = new Server(http);

io.on("connection", (socket: Socket) => {
  // console.log("Se conectou com o socket: ", socket.id);
});

/**
 * Tipos de métodos de requisição no NodeJS:
 * GET = Buscar algo (Requisições padrões dos browser)
 * POST = Criar algo (Necessário um ambiente de desenvolvimento de API)
 * PUT = Alterar algo
 * DELETE = Deletar algo
 * PATCH = Altera uma informação específica
 */
app.use(express.json());
app.use(routes);

export { http, io };
