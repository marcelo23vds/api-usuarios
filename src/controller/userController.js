/********************************************************************
 * Objetivo: O controlador lida com a lógica da requisição e resposta, utilizando o modelo para acessar os dados.
 * Autor: Marcelo Vieira
 * Data: 01/09/2025
 * Versão: 1.1
********************************************************************/

const userModel = require('../model/userModel')

// metodo do controlador para criar um novo usuário
const createUser = (req, res) => {

    //pegando os dados que foram enviados pelo body (corpo) da requisição
    //extraindo tudo que vem no body(nome e email)
    const {name, email} = req.body
    //equivalente a:
    //const name = req.body.name
    //const email = req.body.email

    const newUser = userModel.create({name, email})

    if(!name || !email) {
        res.status(400).json({mensagem: 'Erro na criação do usuario!'})
    } else {
        //codigo de status 201 significa que foi criado com sucesso
        res.status(201).json(newUser) 
    }
    
}

// metodo do controlador para buscar um usuário por ID
const getUserById = (req, res) => {

    // pegando o id que foi enviado na requisição
    const id = parseInt(req.params.id)
    // chamando o metodo findById do userModel
    const user = userModel.findById(id)

    if(user){
        //responder com status code de 200 (sucesso)
        //e  devolver os dados do usuario em formato json
        res.status(200).json(user)
    } else {
        res.status(404).json({mensagem: 'Usuário não encontrado!'})
    }

}

// metodo do controlador para listar todos os usuarios
const getAllUsers = (req, res) => {

    const users = userModel.findAll()
    res.status(200).json(users)
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}