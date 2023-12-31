const path =  require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const hbs = handlebars.create({extname: '.hbs'});
const routes = require('./routes')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded())
app.use(express.json())

//HTTP Logger
// app.use(morgan('combined'));

//Template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

routes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})