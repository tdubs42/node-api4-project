const express = require('express')
const router = require('./router')
const cors = require('cors')
const helmet = require('helmet')
const {logger} = require('./middleware')

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())
server.use('/api', logger, router)

server.get('*', (req, res) => {
  res.send(`<h1>What's the password?</h1>`)
})

module.exports = server
