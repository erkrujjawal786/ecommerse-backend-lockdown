const { check } = require('express-validator')

class Validation {

    constructor() { }

    validate(params) {
        switch (params) {
            case 'createSubCategory':
                return [
                    check('name')
                        .notEmpty()
                        .withMessage("subCategory name is required")
                        .isString()
                        .withMessage('Please enter valid subCategoryName')
                ];

            case 'updateSubCategory':
                return [
                    check('name')
                        .notEmpty()
                        .withMessage('subCategory name is required')
                        .isString()
                        .withMessage('Please enter valid name')
                ];

            case 'deleteSubCategory':
                return[
                    check('_id')
                    .notEmpty()
                    .withMessage('SubCategoryId is required')
                    .isString()
                    .withMessage('Enter correct subCategoryId')
                ];




        }
    }
}
module.exports = new Validation()