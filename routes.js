const express = require('express')

const techStacksController = require('./controller/techStacks')
const albumsController = require('./controller/albums')

const Router = express.Router()

Router.get('/tech-stacks', techStacksController.getAll)
Router.post('/tech-stacks', techStacksController.insert)
Router.delete('/tech-stacks/:id', techStacksController.delete)

Router.get('/albums', albumsController.getAll)
Router.post('/albums',
    albumsController.handleUpload,
    albumsController.insert)
Router.delete('/albums/:id', albumsController.delete)

module.exports = Router
