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
//Importando a dependência do TypeORM (lá no ./database/index.ts):
import "./database";

const app = express();

/*
Métodos de requisições HTTP (CRUD + patch):
 C- Create = GET -> Buscar algo (Requisições padrões dos browser)
 R- Read = POST -> Criar algo (Necessário um ambiente de desenvolvimento de API)
 U- Update = PUT -> Alterar algo
 D- Delete = DELETE -> Deletar algo
 PATCH -> Altera uma informação específica
*/

//1º rota: Mostra uma mensagem no navegador acessando o "http://localhost:3333/"
app.get("/", (request, response) => {
  return response.json({
    message: "Hello World! :D",
  });
});

//2º rota: Rota de post no online API ecosystem "Postman"-> https://www.postman.com/ (É de graça :D)
app.post("/test", (request, response) => {
  return response.json({
    message: "Exibindo numa API :D com uma URL diferente!(/test) PARABÉNS! ",
  });
});

//Minha porta default utilizada para o desenvolvimento
app.listen(3333, () => console.log("Our server is running on port 3333"));
