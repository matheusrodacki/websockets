import { documentosColecao } from "./dbconnect.js";

async function encontrarDocumento(nome) {
  const documento = documentosColecao.findOne({ nome });
  return documento;
}

async function atualizaDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne(
    {
      nome,
    },
    {
      $set: {
        texto,
      },
    }
  );
  return atualizacao;
}

export { encontrarDocumento, atualizaDocumento };
