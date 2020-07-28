var express = require('express');
var app = express();

// middleware starts
// middleware functionality - log every time you a get a request
app.use(function (req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
});
// middleware ends

app.get('/', function (req, res, next) {
    res.send('Welcome to ExpressJs!');
});

app.get('/faq', function (req, res, next) {
    res.send('Frequestly asked questions?');
});

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Browse your app at http://localhost:%s", host, port)
})  