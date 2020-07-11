const express = require('express')
const router = express.Router()
const controller = require('../controllers/product')
const validation = require('../validation/validation')

router.post('/createProduct',validation.validate('createProduct'),controller.createProduct)

router.get('/readProduct',controller.getProducts)

router.put('/updateProduct',validation.validate('createProduct'),controller.updateProducts)

router.delete('/deleteProduct',validation.validate('deleteProduct'),controller.deleteProduct)


module.exports = router