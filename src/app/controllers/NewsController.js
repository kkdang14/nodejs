class NewsController{

    //[GET] /news    
    index(req, res){
        res.render('news')
    }

    show(req, res) {
        res.send('NEW DETAILLLL');
    }
}

module.exports = new NewsController;