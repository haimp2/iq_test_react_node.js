const express = require('express');

const singnUpController = require('../controllers/sign-up.controller');

const router = express.Router();

router.post('/', singnUpController.signUp);

router.post('/validation', singnUpController.logIn);



module.exports = router;