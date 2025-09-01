/********************************************************************
 * Objetivo: As rotas conectam as URLs aos controladores.
 * Autor: Marcelo Vieira
 * Data: 01/09/2025
 * Versão: 1.1
********************************************************************/

const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

// rota para obter todos os usuários
router.get('/', userController.getAllUsers)

// rota para obter um usuário por ID
router.get('/:id', userController.getUserById)

// rota para criar um novo usuário
router.post('/', userController.createUser)

module.exports = router
