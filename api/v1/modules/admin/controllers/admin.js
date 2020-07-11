"use strict"
const { validationResult } = require('express-validator')

class Admin {
    login(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let message = errors.array().map(element => {
                return element.msg
            }).join(',')
        }

    }
}

module.exports = new Admin();