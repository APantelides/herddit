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

var Link = sequelize.define('Link', {
  title: Sequelize.STRING,
  artist: Sequelize.STRING,
  genre: Sequelize.STRING,
  url: Sequelize.STRING,
  upvotes: Sequelize.INTEGER
}, {
  tableName: 'SongLinks'
});

sequelize
  .sync({ force: true })
  .then(function(err) {
    console.log('It worked!');
  }, function (err) { 
    console.log('An error occurred while creating the table:', err);
  });

app.use(express.static(path.join(__dirname, '../client')));

app.use(bodyParser());

app.get('/data', function (req, res) {
  Link.findAll().then( function(results) {
    res.send(results);
  });
});

app.post('/data', function (req, res) {
  var link = Link.create({
    title: req.body.title,
    artist: req.body.artist,
    genre: req.body.genre,
    url: req.body.url,
    upvotes: 0
  }).then(function(link) {
    console.log(link + 'added to database!');
    res.send(link);
  });
});

app.listen(port, function() {
  console.log('Server started! Listening on port:' + port);
});