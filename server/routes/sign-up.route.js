const express = require('express');

const singnUpController = require('../controllers/sign-up.controller');

const router = express.Router();

router.post('/', singnUpController.signUp);

module.exports = router;