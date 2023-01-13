let User             = require('../model/user')
const bcrypt         = require('bcrypt')
const jwt            = require('jsonwebtoken')

const register = (req, res, next) =>
{
    bcrypt.hash(req.body.password, 10 , function (err, hashedPass) {

        if (err){
            res.json({
                error :err
            })
        }
    })

    let newuser = new User({
         
        id : req.body.id,
        name : req.body.name,
        email : req.body.email,
        password : hashedPass
        
    })

    newuser.save()
    .then( user => {
               res.json({
                        message : 'User Add succesful !'
               })
    })
    .catch(error =>{
        res.json({
            message : 'Errorr'
        })
    })
   

}

module.exports = {register}