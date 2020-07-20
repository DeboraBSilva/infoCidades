const express = require('express')
const router = express.Router()

const home = require('../controllers/home')
const lista = require('../controllers/lista')

router.get('/', home.home)
router.get('/lista', lista.lista)


module.exports = router