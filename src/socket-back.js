import { encontrarDocumento, atualizaDocumento } from "./documentosDB.js";
import io from "./index.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);

  socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);
    const documento = await encontrarDocumento(nomeDocumento);
    if (documento) {
      devolverTexto(documento.texto);
    }
  });

  socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, texto);

    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
  });

  socket.on("disconnect", (motivo) => {
    console.log(`Cliente "${socket.id}" desconectado!
    Motivo: ${motivo}`);
  });
});
