const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const registerRoutes = require('./routes/register');
const indexRoutes = require('./routes/index');

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('frontend'));
app.set('view engine', 'ejs');


app.use((req, res, next) => {
    const token = req.cookies['qehim'];
    if(token){
        req.user = jwt.verify(token, 'efwthryjyrgefsdgfndrfsdv') || {}
    }else{
        req.user = {};
    }
    next();
})


app.use('/register',registerRoutes);
app.use('/', indexRoutes);



mongoose.connect(' mongodb://127.0.0.1:27017/inter',{useNewUrlParser:true, useUnifiedTopology:true});
const db = mongoose.connection;
db.on('error', () => {
    console.error('error');
});
db.once('open',() => {
    console.log('Connected to DB');
    app.listen(3000, () => {
        console.log('Listening');
    })
})