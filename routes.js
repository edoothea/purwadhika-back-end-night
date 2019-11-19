const express = require('express')

const techStacksController = require('./controller/techStacks')

const Router = express.Router()

Router.get('/tech-stacks', techStacksController.getAll)

module.exports = Router
