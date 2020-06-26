const jwt = require("jsonwebtoken");

const errors = require('../consts/errors');

exports.logIn = async (req, res, next) => {

    let token = req.headers.authorization;
    if(!token){
        req.status(401).json({
            msg: errors.NOT_FOUND
        });
    }

    jwt.verify(token, config.secret).then(decoded=>{
        //TODO - redirect to get next question

    }).catch(err=>{
        req.status(401).json({
            msg: errors.DECODED_ERR
        });
    });

    res.status(200).json({
        msg: "ok!"
    });

};