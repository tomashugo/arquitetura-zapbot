const exec = (mensagemRecebida, mensagemResposta, ...middlewares) => {
  const execPasso = (indice) => {
    middlewares &&
      indice < middlewares.length &&
      middlewares[indice](mensagemRecebida, mensagemResposta, () =>
        execPasso(indice + 1)
      );
  };
  execPasso(0);
};

module.exports = {
  exec,
};
