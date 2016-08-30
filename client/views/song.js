var app = app || {};

app.SongView = Backbone.View.extend({
  tagName: 'div',
  className: 'songContainer',
  template: _.template( $( '#songs-template' ).html() ),

  events: {
    'click #upvote': 'upVote'
  },

  render: function() {
    this.$el.html( this.template( this.model.attributes ) );

    return this;
  },

  upVote: function () {
    this.model.set('upvotes', this.model.get('upvotes') + 1 );
    this.model.save();
    this.render();
  }
});