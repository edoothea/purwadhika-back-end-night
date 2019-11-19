const express = require('express')

const techStacksController = require('./controller/techStacks')

const Router = express.Router()

Router.get('/tech-stacks', techStacksController.getAll)
Router.post('/tech-stacks', techStacksController.insert)

module.exports = Router
