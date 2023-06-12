
class newsController {
    index(response, req)
    {
        
        req.render('news');
    }
    show(req, res)
    {
        res.send('Hello');
    }
}

module.exports = new newsController();