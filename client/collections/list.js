var app = app || {};

app.List = Backbone.Collection.extend({
  model: app.Song,
  url: '/data'
});