var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));

app.get('/simple', function (req, res) {
    res.sendFile(__dirname + "/" + "html_files/simple_form_post.html");
})

app.post('/process_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format  
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    // res.end(JSON.stringify(response));
    res.send('<p>Username: ' + req.body['first_name']+'</p><p>Lastname: '+req.body['last_name']+'</p>');  
})

var server = app.listen(3000, "localhost", function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
})  