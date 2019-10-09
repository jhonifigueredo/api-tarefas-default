const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const YAML = require('yamljs')
const swaggerUI = require('swagger-ui-express')
const bodyParser = require('body-parser')

// Transformando o corpo da requisição no formato JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Logs
app.use(morgan('combined'))

// Documentação da api
const swaggerDocument = YAML.load('./docs/swagger.yml')
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

// Rotas
const tarefaRoute = require('./routes/tarefaRoute')
app.use('/api/v1/tarefas', tarefaRoute)

// Porta de aplicação
const port = process.env.PORT

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
