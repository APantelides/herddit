var app = app || {};

app.SearchListView = Backbone.View.extend({
  el: '#searchResults',

  initialize: function (searchResults) {
    this.collection = new app.SearchResults(searchResults);
  
    this.render();
  },

  render: function () {
    this.collection.each( function (result) {
      this.renderResult(result);
    }, this);
  },

  renderResult: function (result) {
    var resultView = new app.ResultView({
      model: result
    });
    this.$el.prepend( resultView.render().el );
  }
});