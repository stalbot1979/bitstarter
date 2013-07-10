var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

fs.readFileSync('index.html', String);

//app.get('/', function(request, response) {
//  response.send('Hello World 2!');
//});

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html', String));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});