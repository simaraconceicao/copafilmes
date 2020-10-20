const express = require('express')
const app = express()
const router = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(
    cors({
      origin: "*",
      methods: "GET,PUT,POST,DELETE",
      allowedHeaders: ["Content-Type"],
    })
)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(express.json())
app.use('/', router)


module.exports = app