
const { check } = require('express-validator');


class Validation {
    constructor(){}

    validate(params) {
        switch (params) {
            case 'login':
                return [
                    check('email')
                    .notEmpty()
                    .withMessage("email must be required")
                    .isEmail()
                    .withMessage('Please enter valid email')
                ];
        }
    }
}
module.exports = new Validation()