const express = require('express')
const router = express.Router()
const validation = require('../validation/validation')
const controller = require('../controllers/user')
const auth = require('../auth/auth')

router.post('/createUser',validation.validate('createUser'),controller.createUser)

router.post('/login',validation.validate('login'),controller.login)

router.post('/verifyuser',controller.verifyUser)

module.exports = router