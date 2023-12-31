/* eslint-disable no-undef */

import { atualizaTextoEditor, alertaERedirecionar } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
  socket.emit("selecionar_documento", nome, (texto) => {
    atualizaTextoEditor(texto);
  });
}

function emitirTextoEditor(texto, dados) {
  socket.emit("texto_editor", texto, dados);
}

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

socket.on("disconnect", (motivo) => {
  console.log(`Servidor desconectado!
  Motivo: ${motivo}`);
});

function emitirExcluirDocumento(nome) {
  socket.emit("excluir_documento", nome);
}

socket.on("documento_deletado_sucesso", (nome) => {
  alertaERedirecionar(nome);
});

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };
