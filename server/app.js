var express = require('express');
var path = require('path');
var app = express();
var port = 3000;


app.use(express.static(path.join(__dirname, '../client')));

app.listen(port, function() {
  console.log('Server started! Listening on port:' + port);
});