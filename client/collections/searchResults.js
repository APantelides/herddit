var app = app || {};

app.SearchResults = Backbone.Collection.extend({
  model: app.SearchResult,
  url: '/data'
});