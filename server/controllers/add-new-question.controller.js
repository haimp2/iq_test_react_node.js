const mongoose = require('mongoose');

const Question = require('../models/question.model');


exports.addQuestions = (req, res, next) =>{

    const question = new Question({
    _id: new mongoose.Types.ObjectId(),
    answerId: String,
    level:2,
    cardsInRow: 3,
    cardsList:[{
        cardId: '1',
        imageUrl: 'http://localhost:5000/icons/cards-icons/level-2/card-1-type-1.png'
    },
    {
        cardId: '2',
        imageUrl: 'http://localhost:5000/icons/cards-icons/level-2/card-2-type-1.png'
    },
    {
        cardId: '3',
        imageUrl: 'http://localhost:5000/icons/cards-icons/level-2/card-3-type-1.png'
    },
    {
        cardId: '4',
        imageUrl: 'http://localhost:5000/icons/cards-icons/level-2/card-1-type-2.png'
    },
    {
        cardId:'5',
        imageUrl: 'http://localhost:5000/icons/cards-icons/level-2/card-2-type-2.png'
    },
    {
        cardId: '6',
        imageUrl: 'http://localhost:5000/icons/cards-icons/level-2/card-3-type-2.png'
    },{
        cardId: '7',
        imageUrl: 'http://localhost:5000/icons/cards-icons/level-2/card-1-type-3.png'
    },
    {
        cardId: '8',
        imageUrl: 'http://localhost:5000/icons/cards-icons/level-2/card-3-type-2.png'
    },
    {
        cardId: '9',
        imageUrl: 'http://localhost:5000/icons/cards-icons/level-2/card-3-type-3.png'
    }],

    answerCardList: [{
        cardId: '1',
        imageUrl: 'http://localhost:5000/icons/cards-icons/level-2/card-answer-1.png'
    },{
        cardId: '2',
        imageUrl: 'http://localhost:5000/icons/cards-icons/level-2/card-answer-2.png'
    },{
        cardId: '3',
        imageUrl: 'http://localhost:5000/icons/cards-icons/level-2/card-answer-3.png'
    },{
        cardId: '4',
        imageUrl: 'http://localhost:5000/icons/cards-icons/level-2/card-answer-4.png'
    }]

    })

    question.save().then(result =>{
        console.log(result);
        res.status(201).json({
            massage: "New question has been saved in db",
            questionCreadted: result
        });
    }).catch(err =>{
        console.log(err);
    });

};