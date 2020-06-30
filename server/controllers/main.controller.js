const mongoose = require('mongoose');

const Question = require('../models/question.model');
const User = require('../models/user.model');

const errors = require('../consts/errors')

const questionMarkCardUrl = 'http://localhost:5000/icons/cards-icons/card-question-mark.png';

const FINAL_LEVEL = 2;


exports.getNextQuestion = (req, res, next) => {

    const { userName, uuid } = req.body;

    if (!userName || !uuid) {
        res.status(401).json({
            err: errors.HACKER_FOUND,
            msg: 'User not found! please sign in first.'
        });
    }

    else {

        User.find({uuid: uuid})
        .exec()
        .then(doc =>{

            const user = doc[0];

            let level = user.level;
            let solved = user.currentQuestion.solved;

            level = (level + 1 <= FINAL_LEVEL && solved ? level + 1 : level); 

            Question.find({ level: level})
                .exec()
                .then(doc => {
                    const question = doc[0];
                    let randomCardIndex = Math.floor(Math.random() * question.cardsList.length);
                    const answerCard = question.cardsList[randomCardIndex];
                    answerCard.cardId = '5';
                    question.answerCardList.push(answerCard);
                    question.cardsList[randomCardIndex] = {
                        cardId: randomCardIndex + 1,
                        imageUrl: questionMarkCardUrl
                    }
                    User.update({ uuid: uuid }, {
                        level: question.level,
                        currentQuestion: {
                            questionId: question._id,
                            answerId: answerCard.cardId,
                            solved: false
                        }
                    }).then(() => {
                        console.log("List has been sent!")
                        res.status(200).json(question);
                    }).catch(err => console.log(err));
    
                })
                .catch((err) => {
                    res.status(401).json({
                        err: err
                    });
                    console.log(err);
                });
        })

    }
}