var app = app || {};

app.ResultView = Backbone.View.extend({
  tagName: 'div',
  className: 'searchContainer',
  template: _.template( $( '#search-template' ).html() ),

  events: {
    'click #addResult': 'addResult'
  },

  render: function () {
    this.$el.html( this.template( this.model.attributes ) );

    return this;
  },

  addResult: function () {
    console.log('Clicked add result!');
  }
});