'use strict'

require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
// const router = express.Router()

//! Env Vars

const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern-starter'

mongoose.Promise = Promise
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

app.use(express.json(), cors())

app.all('*', (req, res) => {
  console.log('Returning a 404 from the catch-all route')
  return res.status(404).json({ message: '404 not found' })
})

const start = () => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
}

const stop = () => {
  app.close(PORT, () => {
    console.log(`Shut down on port: ${PORT}`)
  })
}

module.exports = { start, stop }
