# arquitetura-zapbot

Esta arquitetura implementa o conceito de chain of responsability, onde a mensagem do whatsapp é recebida e passada por vários Middlewares que vão analisando e modificando a `mensagemResposta` de acordo com suas respectivas lógicas de negócio.

Cada funcão middleware tem a seguinte assinatura:

```
const funcaoMiddleware = (mensagemRecebida, mensagemResposta, next) => {
    // ... lógica de negócio aplicada em cima de mensagemRecebida para alteração da mensagemResposta, ou execução de alguma tarefa no backend (persistência de dados, salvar mensagens, etc)
    next(); // chamada para o próximo middleware
}
```
