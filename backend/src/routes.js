const express = require('express')
const router = express.Router()
const controller = require('./controllers/filmesController')
const cors = require('cors')



router.get('/filmes', cors(), controller.getAllFilms)
router.post('/filmes',cors(), controller.sortAndPlay )


module.exports = router