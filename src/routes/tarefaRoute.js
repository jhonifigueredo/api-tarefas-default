const express = require('express')
const route = express.Router()
const tarefaController = require('../controllers/tarefaController')

route.get('/', tarefaController.listar)
route.get('/:id', tarefaController.listarPorId)
route.get('/', tarefaController.inserir)

module.exports = route


