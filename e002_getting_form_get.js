var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/simple', function (req, res) {
    res.sendFile(__dirname + "/" + "html_files/simple_form.html");
})
app.get('/process_get', function (req, res) {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
    // res.send('<p>Username: ' + req.query['first_name']+'</p><p>Lastname: '+req.query['last_name']+'</p>');  
})

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)

})  