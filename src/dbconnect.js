import { MongoClient } from "mongodb";

const cliente = new MongoClient(process.env.DB_CONNECTION_STRING);

let documentosColecao;

try {
  await cliente.connect();
  const db = cliente.db("alura-websockets");
  const documentosColecao = db.collection("documentos");
  console.log("Conectado ao banco!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
