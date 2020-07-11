const { check } = require('express-validator')

class Validation {
    constructor() { }

    validate(params) {
        switch (params) {
            case 'createUser':
                return [
                    check('name')
                        .notEmpty()
                        .withMessage('Enter your name ')
                        .isString()
                        .withMessage('Enter your name correctly')
                        .trim(),
                    check('email')
                        .notEmpty()
                        .withMessage('Enter your email')
                        .isEmail()
                        .withMessage('Enter email correctly')
                        .trim(),
                    check('password')
                        .notEmpty()
                        .withMessage('Enter password')
                        .isString()
                        .withMessage('Enter correct password')
                        .trim(),
                    check('mobno')
                        .notEmpty()
                        .withMessage('Enter mobile no')
                        .isNumeric()
                        .withMessage('Enter correct monile number')
                        .isLength({ min: 10, max: 10 })
                        .withMessage('Enter 10 digit mobile number')
                        .trim()
                ]

            case 'login':
                return [
                    check('email')
                        .notEmpty()
                        .withMessage('Enter your email')
                        .isEmail()
                        .withMessage('Enter email correctly')
                        .trim(),
                    check('password')
                        .notEmpty()
                        .withMessage('Enter password')
                        .isString()
                        .withMessage('Enter correct password')
                        .trim(),
                ]
        }
    }
}

module.exports = new Validation()