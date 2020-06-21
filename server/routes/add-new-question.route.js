const express = require('express');

const addNewQuestionController = require('../controllers/add-new-question.controller');

const router = express.Router();

router.get('/', addNewQuestionController.addQuestions);

module.exports = router;