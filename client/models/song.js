var app = app || {};

app.Song = Backbone.Model.extend({
  defaults: {
    title: 'No Title',
    artist: 'Unknown',
    genre: 'Not Specified',
    url: 'http://www.example.com/',
    upvotes: 0
  }

});