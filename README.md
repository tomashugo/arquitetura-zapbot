# arquitetura-zapbot

Esta arquitetura implementa o conceito de chain of responsability, onde a mensagem do whatsapp é recebida e passada por vários Middlewares que vão analisando e modificando a `mensagemResposta` de acordo com suas respectivas lógicas de negócio.
