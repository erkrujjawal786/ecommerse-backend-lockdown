const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization
        const decode = jwt.verify(token, process.env.JWT_KEY)
        req.userData = decode;
        next()

    } catch (err) {
        res.status(404).json({ message: "auth failed" ,error:err
        })
    }
}