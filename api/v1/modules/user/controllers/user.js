const User = require('../models/user')
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../../../../config')                            //for mobile verification
const client = require('twilio')(config.accountSid,config.authToken);      //for mobile verification



class Users {
    createUser(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let message = errors.array().map(element => {
                return element.msg
            }).join(',')
        }
        let { name, email, password, mobno } = req.body

        User.findOne({ email: email })
            .then(result => {
                if (result) {

                    res.json({ message: "user already exist", results: result })
                } else {
                    let hash = bcrypt.hashSync(password, 10);
                    const user = new User({
                        name: name,
                        email: email,
                        password: hash,
                        mobno: mobno
                    })
                    user.save()
                        .then(resultData => {
                            res.json({ message: "User create", results: resultData });
                        })
                }
            })
            .catch(err => {
                console.log('error==========catch', err)
                res.status(500).json({ message: "user not created", error: err })
            })
    }

    login(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let message = errors.array().map(element => {
                return element.msg
            }).join(',')
        }
        const { email, password } = req.body
        User.findOne({ email: email }).then(doc => {
            if (doc) {
                let hash = doc.password
                if (bcrypt.compareSync(password, hash)) {
                    console.log('password matched')
                    const token = jwt.sign({
                        email: doc.email,
                        userId: doc._id
                    }, process.env.JWT_KEY, {
                        expiresIn: '1h'
                    })
                    res.status(200).json({ message: "Login successful", result: doc, token: token })
                }
            } else {
                console.log('user not found')
            }

        })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: "Login Failed", result: err })
            })
    }

    verifyUser(req,res,next){
        client.messages
          .create({
             body: 'Hi, this is ujjawal,checking for sms service',
             from: '+14062984610',
             to: '+917888973662'
           })
          .then(resp => {
              console.log(resp.sid)
            res.status(200).json({message:'sms verified',result:resp})
            })
            .catch(err=>{
                console.log(err)
            })
    }
}

module.exports = new Users()