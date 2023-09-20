import express from "express";

const app = express();

const porta = process.env.porta || 3000;

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));
