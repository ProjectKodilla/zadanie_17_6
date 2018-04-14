var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/auth/google', (req, res) => {
    if (req.query.password === 'one') {
        res.redirect(301, 'https://unsplash.com/collections/1052683/clouds-of-color');        
    } else if (req.query.password === 'two') {
        res.redirect(301, 'https://unsplash.com/collections/1933042/unsplash-top-25-editors-choice-photographers-of-2018-q1');
    } else if (req.query.password === 'three') {
        res.redirect(301, 'https://unsplash.com/collections/1956496/unsplash-top-25-25-most-downloaded-photos-of-2018-q1');
    } else {
        res.render('error', {
            info: 'There is no such web',
            url: 'http://localhost:3000/'
        });
    }
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Sorry, we move out yesterday')
});