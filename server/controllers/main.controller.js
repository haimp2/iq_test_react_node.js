const mongoose = require('mongoose');

const Question = require('../models/question.model');

const questionMarkCardUrl = 'http://localhost:5000/icons/cards-icons/card-question-mark.png';


exports.getNextQuestion = (req, res, next) =>{

    Question.find({level : 1})
    .exec()
    .then(doc=>{
        const question = doc[0];
        let randomCardIndex = Math.floor(Math.random() * question.cardsList.length);
        question.answerCardList.push(question.cardsList[randomCardIndex]);
        question.cardsList[randomCardIndex] = {
            cardId : randomCardIndex + 1,
            imageUrl: questionMarkCardUrl
        }
        console.log("List has been sent!")
        res.status(200).json(question);

    })
    .catch((err)=>{
        console.log(err);
    });
}