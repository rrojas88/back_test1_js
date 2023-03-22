
const router = require('express').Router()
const users = require('../users/users')

router.use('/users', users)

router.get('/', function (req, res) {
	res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

module.exports = router