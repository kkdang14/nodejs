const newRouter = require('./news');
const siteRouter = require('./site')

function routes(app){

    app.use('/news', newRouter);
    // app.get('/news', (req, res) => {
    //     res.render('news');
    // })

    app.use('/home', siteRouter);  
    // app.get('/home', (req, res) => {
    //     res.render('home');
    // })
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // })

}

module.exports = routes;