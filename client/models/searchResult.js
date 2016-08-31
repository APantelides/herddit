var app = app || {};

app.SearchResult = Backbone.Model.extend({
  initialize: function(song) {
    this.clear();
    this.set('title', song.title);
    this.set('artist', song.user.username);
    this.set('genre', song.genre);
    this.set('url', song.permalink_url);
    this.set('data', song);
  }
});