const path =  require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
// const hbs = handlebars.create();

app.use(morgan('combined'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource/views'));

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})