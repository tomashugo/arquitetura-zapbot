const salvarMensagemNoBd = (mensagemRecebida, mensagemResposta, next) => {
  console.log("Irei salvar esta mensagem no banco de dados!");
  next();
};

const respostaComIa = (mensagemRecebida, mensagemResposta, next) => {
  if (mensagemResposta.freeze != true) {
    mensagemResposta.txt = "Resposta da IA";
  }

  next();
};

const salvarArquivos = (mensagemRecebida, mensagemResposta, next) => {
  console.log("Salvando arquivos no disco");
  next();
};

const seComando = (mensagemRecebida, mensagemResposta, next) => {
  if (comandos.existeComando(mensagemRecebida)) {
    mensagemResposta.txt = comandos.executarCallback(mensagemRecebida);
    mensagemResposta.freeze = true;
  }
  next();
};

const comandos = {
  lista: [],
  addCmd(comando, callback) {
    this.lista[comando] = callback;
  },
  existeComando(mensagemUsuario) {
    const comandosCadastrados = Object.keys(this.lista);
    const match = comandosCadastrados.filter((valor, indice) => {
      if (mensagemUsuario.txt.startsWith(valor)) return true;
      else return false;
    });

    if (match.length === 0) {
      return false;
    } else {
      return true;
    }
  },
  executarCallback(mensagemUsuario) {
    const comandosCadastrados = Object.keys(this.lista);
    const match = comandosCadastrados.filter((valor, indice) => {
      if (mensagemUsuario.txt.startsWith(valor)) return true;
      else return false;
    });

    return this.lista[match[0]]();
  },
};

module.exports = {
  salvarMensagemNoBd,
  respostaComIa,
  salvarArquivos,
  seComando,
  comandos,
};
