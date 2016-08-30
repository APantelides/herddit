var app = app || {};

app.ListView = Backbone.View.extend({
  el: '#songs',

  initialize: function ( initialSongList ) {
    this.collection = new app.List( initialSongList );
    this.render();
  },

  render: function () {
    this.collection.each( function (song) {
      this.renderSong(song);
    }, this);
  },

  renderSong: function ( song ) {
    var songView = new app.SongView({
      model: song
    });
    this.$el.append( songView.render().el );
  }
});