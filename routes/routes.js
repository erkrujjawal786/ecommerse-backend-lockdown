var express = require('express');
var router = express.Router();

router.use('/admin', require('../api/v1/modules/admin/routes/routes'));
router.use('/category',require('../api/v1/modules/category/routes/routes'))
router.use('/subcategory',require('../api/v1/modules/subcategory/routes/routes'))
router.use('/product',require('../api/v1/modules/product/routes/routes'))
router.use('/user',require('../api/v1/modules/user/routes/routes'))

module.exports = router;
