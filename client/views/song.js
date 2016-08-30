var app = app || {};

app.SongView = Backbone.View.extend({
  tagName: 'div',
  className: 'songContainer',
  template: _.template( $( '#songs-template' ).html() ),

  render: function() {
    this.$el.html( this.template( this.model.attributes ) );
  }
});