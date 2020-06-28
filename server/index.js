const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const loginRoutes = require('./routes/login.route');
const addNewQuestionRoutes = require('./routes/add-new-question.route');
const mainRoutes = require('./routes/main.route');
const signUpRoute = require('./routes/sign-up.route')


const app = express();

app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();

});

app.use('/login', loginRoutes);
app.use('/add', addNewQuestionRoutes);
app.use('/main', mainRoutes);
app.use('/sign-up', signUpRoute);
app.use(express.static(path.join(__dirname +  '/public')));


mongoose.connect('mongodb+srv://haimp2:fWXh9tvjk7zMW5ck@cluster0-ooeym.mongodb.net/iq-test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(result => {
    app.listen(5000)
}).catch(err=>{
    console.log(err);
});


