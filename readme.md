# API RESTFUL - GERENCIAR USUARIOS

API RESTful em Node.js e Express para gerenciar usuários, permitindo listar, buscar por ID e criar novos usuários.

## Tecnologias
* Node.JS
* Express
* JSON
* Postman

## Passo a passo para testar

1 - Instalar a extensão Postman no VSCode

2 - Iniciar o servidor Node:

    - No terminal, execute => node server.js 
    - Você verá a mensagem => "Servidor rodando em http://localhost:8000".

3 - Criar requisições no Postman do VSCode:

    GET /api/users: 	
    - Envie uma requisição GET para => http://localhost:8000/api/users 
    - A resposta será um JSON com a lista de usuários

    GET /api/users/1
    - Envie uma requisição GET para => http://localhost:8000/api/users/1
    - A resposta será o JSON do usuário com ID 1

    POST /api/users
    - Envie uma requisição POST para => http://localhost:8000/api/users
    - Em BODY > RAW > selecione JSON e adicione por exemplo:

    {
      "name": "Marcelo Vieira",
      "email": "vieiramarcelo.vds@gmail.com"
    }

    A resposta será algo como:

    {
      "id": 4,
      "name": "Marcelo Vieira",
      "email": "vieiramarcelo.vds@gmail.com"
    }

## Autor
[Marcelo Vieira](<https://www.linkedin.com/in/marcelovieirasilva/>)
