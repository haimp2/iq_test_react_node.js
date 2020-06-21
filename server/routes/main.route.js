const express = require('express');

const mainController = require('../controllers/main.controller');

const router = express.Router();

router.get('/', mainController.getNextQuestion);

module.exports = router;