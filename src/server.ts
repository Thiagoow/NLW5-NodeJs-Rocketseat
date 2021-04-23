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
import express from "express";
//Importando a rota do repositório:
import { routes } from "./routes";
//Importando a dependência do TypeORM (lá no ./database/index.ts):
import "./database";

const app = express();

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

//Minha porta default utilizada para o desenvolvimento
app.listen(3333, () =>
  console.log("Our server is ONLINE, and running on port 3333 🤩")
);
