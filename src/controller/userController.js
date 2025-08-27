/********************************************************************
 * Objetivo: O controlador lida com a lógica da requisição e resposta, utilizando o modelo para acessar os dados.
 * Autor: Marcelo Vieira
 * Data: 27/08/2025
 * Versão: 1.0
********************************************************************/

const userModel = require('../model/userModel')

// controlador para criar um novo usuário
const createUser = (req, res) => {
    const {name, email} = req.body

    if (!name || !email) {
        return res.status(400).json({message: 'Nome e email são obrigatorios!'})
    }
    const newUser = userModel.create({name, email})
    res.status(201).json(newUser)
}

// controlador para buscar um usuário por ID
const getUserById = (req, res) => {
    const { id } = req.params // extrai o parametro id
    const user = userModel.findById(id)

    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado!' })
    }

    res.status(200).json(user)
}


// controlador para listar todos os usuarios
const getAllUsers = (req, res) => {
    const users = userModel.findAll()
    res.status(200).json(users)
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}