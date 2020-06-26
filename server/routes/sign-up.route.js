const express = require('express');

const {signUp} = require('../controllers/sign-up.controller');

const router = express.Router();

router.post('/', signUp);