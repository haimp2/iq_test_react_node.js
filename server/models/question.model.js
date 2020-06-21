const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    answerId: String,
    level: Number,
    cardsInRow: Number,
    cardsList:[{
        cardId:String,
        imageUrl:String
    },
    {
        cardId: String,
        imageUrl:String
    },
    {
        cardId: String,
        imageUrl:String
    },
    {
        cardId: String,
        imageUrl:String
    },
    {
        cardId:String,
        imageUrl:String
    },
    {
        cardId:String,
        imageUrl:String
    },{
        cardId:String,
        imageUrl:String
    },
    {
        cardId:String,
        imageUrl:String
    },
    {
        cardId:String,
        imageUrl:String
    }],
    answerCardList: [{
        cardId:String,
        imageUrl:String
    },{
        cardId:String,
        imageUrl:String
    },{
        cardId:String,
        imageUrl:String
    },{
        cardId:String,
        imageUrl:String
    }]
});

module.exports = mongoose.model('Question', questionSchema);