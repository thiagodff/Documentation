# Documentação no Frontend e no Backend

## Documentação não técnica (não vai descrever os detalhes de implementação, código)

Mais se assemelha aos documentos reais do dia a dia, geralmente são escritos pelo PM, PO, Principal Engineer, Tech Lead:

- Documentos de definição do projeto
- Descrição das regras de negócio
- Segue padrões gramaticais
- Pode ser feita até memso no World, Google Docs

Ferramentas mais utilizadas (wiki do projeto = documentos do projeto):

- Confluence (muito utilizada para trabalhar com documentos)
- Notion
- Slite

dica: recomendo conhecer as ferramentas da Atlassian, são muito utilizadas

## Documentação Técnica

Dar detalhes/documentar os detalhes de implementação da aplicação.

Backend (API):

- Endpoints
- Parâmetros
- Respostas

Client REST:

- Postman
- Insomnia

Swagger (uma das ferramentas mais completas para documentação de api): fazer a documentação mais profunda da API, falando quais são os parâmetros, se é obrigatório ou não, quais tipos é aceito, quais são os retornos, status de retorno, se faz redirecionamento, etc.

Objetivo: Documentar os endpoints da API. Podemos documentar com o swagger de duas maneiras

- Middleware (utilizando um yaml para definir as rotas)
- Documentar separadamente

O GraphQL já vem com uma documentação integrada muito boa, então não precisa utilizar o swagger
