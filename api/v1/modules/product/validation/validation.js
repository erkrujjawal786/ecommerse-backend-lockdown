const { check } = require('express-validator');

class Validation{
    validate(params){
        switch(params){

            case "createProduct":
                return[
                    check('productName')
                    .notEmpty()
                    .withMessage('Enter product name')
                    .isString()
                    .withMessage('Enter correct product name')
                    .trim(),
                    check('productDesc')
                    .notEmpty()
                    .withMessage('Enter product Product Description')
                    .isString()
                    .withMessage('Enter correct product Description')
                    .trim(),
                    check('productImage')
                    .notEmpty()
                    .withMessage('Enter product Product Description')
                    .isString()
                    .withMessage('Enter correct product Description')
                    .trim(),
                    check('productPrice')
                    .notEmpty()
                    .withMessage('Enter product Product Price')
                    .isFloat()
                    .withMessage('Enter correct product Description')
                    .trim(),
                    check('flatDiscount')
                    .notEmpty()
                    .withMessage('Enter product Product Price')
                    .isBoolean()
                    .withMessage('Enter correct product Description')
                    .trim(),
                    check('discountAmount')
                    .notEmpty()
                    .withMessage('Enter product discount amount')
                    .isFloat()
                    .withMessage('Enter correct discount amount')
                    .trim(),check('basePrice')
                    .notEmpty()
                    .withMessage('Enter product base Price')
                    .isFloat()
                    .withMessage('Enter correct base price')
                    .trim(),
                ]

                case "updateProduct":
                return[
                    check('productName')
                    .notEmpty()
                    .withMessage('Enter product name')
                    .isString()
                    .withMessage('Enter correct product name')
                    .trim(),
                    check('productDesc')
                    .notEmpty()
                    .withMessage('Enter product Product Description')
                    .isString()
                    .withMessage('Enter correct product Description')
                    .trim(),
                    check('productImage')
                    .notEmpty()
                    .withMessage('Enter product Product Description')
                    .isString()
                    .withMessage('Enter correct product Description')
                    .trim(),
                    check('productPrice')
                    .notEmpty()
                    .withMessage('Enter product Product Price')
                    .isFloat()
                    .withMessage('Enter correct product Description')
                    .trim(),
                    check('flatDiscount')
                    .notEmpty()
                    .withMessage('Enter product Product Price')
                    .isBoolean()
                    .withMessage('Enter correct product Description')
                    .trim(),
                    check('discountAmount')
                    .notEmpty()
                    .withMessage('Enter product discount amount')
                    .isFloat()
                    .withMessage('Enter correct discount amount')
                    .trim(),check('basePrice')
                    .notEmpty()
                    .withMessage('Enter product base Price')
                    .isFloat()
                    .withMessage('Enter correct base price')
                    .trim(),
                ]

                case "deleteProduct":
                return[
                    check('_id')
                    .notEmpty()
                    .withMessage('Enter product id')
                    .isMongoId()
                    .trim()
                    
                ]
        }

    }
}

module.exports = new Validation();