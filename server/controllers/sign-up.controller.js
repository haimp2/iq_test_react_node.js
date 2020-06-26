const jwt = require('jsonwebtoken')
const errors = require('../consts/errors');

const config = {
    JWT_SECRET: 'BASD221S!23oasd;1k2pd',
    JWT_EXPR_TOKEN: {expiresIn: 60*60*24}
}

exports.signUp =  (req,res) =>{
    const {userName, uuid} = req.body;
    if(!userName || !uuid){
        res.status(401).json({
            err: errors.HACKER_FOUND
        });
    }
    


    //Todo -- store in redis and response ok


}