/********************************************************************
 * Objetivo: simular um banco de dados em memória para gerenciar usuários, permitindo listar, buscar por ID e adicionar novos usuários.
 * Autor: Marcelo Vieira
 * Data: 01/09/2025
 * Versão: 1.1
********************************************************************/

//simulação de um banco de dados em memória
let users = [
    {id: 1, name: 'Alice', email: 'alice@gmail.com'},
    {id: 2, name: 'Noberto', email: 'noberto@gmail.com'},
    {id: 3, name: 'Josenildo', email: 'josenildo@gmail.com'}
]

//função para buscar todos os usuários
const findAll = () => {
    return users
}

//função para buscar um usuário por ID
const findById = (id) => {
    return users.find(user => user.id === id)
}

//função que adiciona um novo usuario
const create = (newUser) => {
    const newId = users.length > 0 ? users[users.length -1].id + 1 : 1
    const userWithId = {id: newId, ...newUser}
    users.push(userWithId)
    return userWithId
}

//exportar as funções
module.exports = {
    findAll,
    findById,
    create
}
