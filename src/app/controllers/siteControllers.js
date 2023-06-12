
class siteController {
    index(res, req)
    {
        res.json({ name: 'Bảo'});
        //req.render('home');
    }
    search(req, res)
    {
        res.send('');
    }
}

module.exports = new siteController();