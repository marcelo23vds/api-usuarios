/********************************************************************
 * Objetivo: Servidor Web utilizando o Node e Express
 * Autor: Marcelo Vieira
 * Data: 27/08/2025
 * Versão: 1.0
********************************************************************/

//importar o módulo do Express
const express = require('express')

//importa as rotas de usuário
const userRoutes = require('./src/routes/userRoutes')

//criar uma aplicação express
const app = express()

//definir a porta em que o servidor irá escutar
const porta = 8000

//rota de teste da API
app.get('/', (req, res) => {
    res.send('API de usuários está funcionando')
})

//usando as rotas de usuário
app.use('/api/users', userRoutes)

//inicia o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})
