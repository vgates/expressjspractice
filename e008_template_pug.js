// first $ npm install pug --save
var express = require('express');
var app = express();
// set view engine  
// If view engine property is not set, 
// you must specify the extension of the view file while res.render
app.set("view engine", "pug")

app.get('/', function (req, res) {
    // res.render('view.pug', index);  
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});
var server = app.listen(3000, function () {
    console.log('Node server is running..');
});  