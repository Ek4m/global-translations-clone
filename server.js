const express = require('express');
const registerRoutes = require('./routes/register');
const indexRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('frontend'));
app.set('view engine', 'ejs');

app.use('/register',registerRoutes);
app.use('/',indexRoutes);

app.get('/',(req, res, next) => {
    res.render('index',{
        pageTitle:'Home',
        headerTransparent:true
    })
})

app.listen(3000, () => {
    console.log('Listening');
})