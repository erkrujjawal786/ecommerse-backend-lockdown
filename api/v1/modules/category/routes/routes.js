const express = require('express');
const router = express.Router()
const validation = require('../validation/validation')
const controller = require('../controllers/category')


router.post('/create',validation.validate('createCategory') ,controller.createCategory)

router.get('/read',controller.readCategory)

router.put('/update',validation.validate('updateCategory'),controller.updateCategory)

router.delete('/delete',validation.validate('deleteCategory'),controller.deleteCategory)




module.exports = router;