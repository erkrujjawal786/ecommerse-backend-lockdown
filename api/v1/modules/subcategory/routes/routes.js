const express = require('express');
const router = express.Router()
const validation = require('../validation/validation')
const controller = require('../controllers/category')


router.post('/createsubcategory',validation.validate('createSubCategory') ,controller.createSubCategory)

router.put('/updatesubcategory',validation.validate('updateSubCategory'),controller.updateSubCategory)

router.delete('/deletesubcategory',validation.validate('deleteSubCategory'),controller.deleteSubCategory)

router.get('/readsubcategory',controller.readSubCategory)



module.exports=router