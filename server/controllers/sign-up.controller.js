const errors = require('../consts/errors');


exports.signUp = (req, res, next) => {

    const { userName, uuid } = req.body;

    console.log(req.body)
    if (!userName || !uuid) {
        res.status(401).json({
            err: errors.HACKER_FOUND
        });
    }

    else {
        //Todo -- store in redis and response ok
        console.log("good");
        res.status(200).json({
            msg: 'ok!'
        });
    }

}