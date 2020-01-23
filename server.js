//SERVER.JS
require('dotenv').config()
const express = require('express')
const { join } = require('path')

const PORT = process.env.PORT || 3001

const app = express()

//Middleware
app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Routes
require('./routes')(app)


require('mongoose')
  .connect(process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost/harmonizedb')
  .then(() => app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
  .catch(e => console.error(e))