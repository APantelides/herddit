var express = require('express');
var path = require('path');
var app = express();
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var port = 3000;

var sequelize = new Sequelize('herddit', 'apantelides', null, {
  dialect: 'postgres',
  port: 5432
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });

app.use(express.static(path.join(__dirname, '../client')));

app.use(bodyParser());

app.listen(port, function() {
  console.log('Server started! Listening on port:' + port);
});