const errors = require('../consts/errors');
const mongoose = require('mongoose');
const User = require('../models/user.model');


exports.signUp = (req, res, next) => {

    const { userName, uuid } = req.body;

    console.log(req.body)
    if (!userName || !uuid) {
        res.status(401).json({
            err: errors.HACKER_FOUND
        });
    }

    else {
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            uuid: uuid,
            userName: userName,
            level: 0,
            currentQuestion: {
                questionId: '',
                answerId: 0,
                solved: true
            }
        });

        user.save().then(result =>{
            res.status(201).json({
                massage: "New user has been saved in db",
                userCreated: result
            });
        }).catch(err => {
            res.status(404).json({
                err: err
            });
        });
    }

}

exports.logIn = (req, res) => {
    
    const { userName, uuid } = req.body;

    console.log(userName, uuid);

    User.exists({userName: userName,
    uuid: uuid}, (err, result) => {
        if (err){
            res.status(400).json({
                msg: 'user does not exists'        
            });
        }else {
            res.status(200).json({
                msg: 'user exists!'
            });
        }
    });
    
}