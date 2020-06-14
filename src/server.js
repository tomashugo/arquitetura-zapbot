// middleware pattern (chain of responsability)
const zap = require("./zap");
const middlewares = require("./middlewares");
const { comandos } = require("./middlewares");

const mensagemResposta = {};
// const mensagemRecebida = { txt: "@dolar" };
// const mensagemRecebida = { txt: "@eagora" };
const mensagemRecebida = { txt: "Mensagem inesperada" };

comandos.addCmd("@oi", () => "Fala sio");
comandos.addCmd("@eagora", () => "To nem aiiii");
comandos.addCmd("@dolar", () => "Ta nas alturas");

zap.exec(
  mensagemRecebida,
  mensagemResposta,
  middlewares.seComando,
  middlewares.salvarMensagemNoBd,
  middlewares.respostaComIa,
  middlewares.salvarArquivos
);

console.log("Resposta final a ser enviada ao usuário:", mensagemResposta);
