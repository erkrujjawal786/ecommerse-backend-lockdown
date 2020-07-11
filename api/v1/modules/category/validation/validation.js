const { check } = require('express-validator')

class Validation {

    constructor() { }

    validate(params) {
        switch (params) {
            case 'createCategory':
                return [
                    check('name')
                        .notEmpty()
                        .withMessage("Category name is required")
                        .isString()
                        .withMessage('Please enter valid name')
                ];

            case 'updateCategory':
                return [
                    check('name')
                        .notEmpty()
                        .withMessage('Category name is required')
                        .isString()
                        .withMessage('Please enter valid name')
                ];

            case 'deleteCategory':
                return[
                    check('_id')
                    .notEmpty()
                    .withMessage('CategoryId not found')
                    .isString()
                    .withMessage('Enter correct Id')
                ];




        }
    }
}
module.exports = new Validation()