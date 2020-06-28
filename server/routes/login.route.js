const express = require('express');

const loginController = require('../controllers/login.controller');

const router = express.Router();

router.get('/', loginController.logIn);

module.exports = router;
