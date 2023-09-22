/* eslint-disable no-undef */
import { removerDocumento, inserirLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documentos) => {
  documentos.forEach((documento) => {
    inserirLinkDocumento(documento.nome);
  });
});

function emitirAdicionaDocumento(nome) {
  socket.emit("adicionar_documento", nome);
}

socket.on("adicionar_documento_interface", (nome) => {
  inserirLinkDocumento(nome);
});

socket.on("documento_existente", (nome) => {
  alert(`O documento ${nome} já existe`);
});

socket.on("documento_deletado_sucesso", (nome) => {
  removerDocumento(nome);
});

export { emitirAdicionaDocumento };
