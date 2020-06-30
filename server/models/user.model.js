const mongoose = require('mongoose');
const { modelName } = require('./question.model');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    uuid: String,
    userName: String,
    level: Number,
    currentQuestion: {
        questionId: String,
        answerId: Number,
        solved: Boolean
    } 
});

module.exports = mongoose.model('User', userSchema);