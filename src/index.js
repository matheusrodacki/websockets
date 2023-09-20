import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import "./dbconnect.js";

//inicializando o express
const app = express();
const porta = process.env.porta || 3000;
const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));

//inicinado o servidor http
const httpServer = http.createServer(app);
httpServer.listen(porta, () =>
  console.log(`Servidor rodando na porta ${porta}`)
);

//iniciando o socket.io
const io = new Server(httpServer);

export default io;
