var express = require('express');
var router = express.Router();
const controller = require('../controllers/admin');
const validation = require('../validation/validation');

router.post('/login',validation.validate('login'),controller.login)

module.exports = router;
