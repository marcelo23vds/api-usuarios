/********************************************************************
 * Objetivo: O controlador lida com a lógica da requisição e resposta, utilizando o modelo para acessar os dados.
 * Autor: Marcelo Vieira
 * Data: 27/08/2025
 * Versão: 1.0
********************************************************************/

const userModel = require('../model/userModel')

// controlador para listar todos os usuarios
const getAllUsers = (req, res) => {
    const users = userModel.findAll()
    res.status(200).json(users)
}

module.exports = {
    getAllUsers
}