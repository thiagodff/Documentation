# Swagger em projeto Node já existente

```sh
yarn add swagger-ui-express swagger-autogen -D
```

Podemos rodar o comando abaixo para gerar o .json do swagger utilizando o swagger autogen

```sh
node swagger.js
```

Esse arquivo .json necessita de algumas alterações como por exemplo alterar a porta da url padrão.

Para acessar o ui do swagger basta iniciar a aplicação com 'yarn start' e abri a rota localhost:3333/doc

O ponto negativo de utilizar esse método de documentação descentralizado as rotas é que precisamos definir os parâmetros, etc, tudo na mão.

Isso poderia ser evitado utilizando o swagger desde o início utilizando-o como um middleware, porém, definindo nossas rotas através do swagger com o yaml.
