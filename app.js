const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileParser = require ('express-fileupload')

const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const routes = require('./routes')

const app = express()
const port = process.env.PORT || 3000

const adapter = new FileSync('db.json')
const db = lowdb(adapter)

db.defaults({
  techStacks: [],
  albums: [],
}).write()

app.use(cors())
app.use(bodyParser.json())
app.use (fileParser())

app.use(function (req, res, next) {
  console.log(req.method, req.url)
  req.db = db
  next()
})

app.use(routes)

app.listen(port, () => {
  console.log('App started on port', port)
})
