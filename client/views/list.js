var app = app || {};

app.ListView = Backbone.View.extend({
  el: '#songs',

  events: {
    'click #submitSong': 'addSong'
  },

  initialize: function ( initialSongList ) {
    this.collection = new app.List( initialSongList );
    this.render();
    this.listenTo( this.collection, 'add', this.renderSong );
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
  },
  addSong: function ( e ) {
    e.preventDefault();

    var formData = {};

    $( '#addSong div').children( 'input' ).each(function (i, el) {
      if ( $(el).val() !== '') {
        formData[ el.id ] = $(el).val();
      }
    });
    this.collection.add(new app.Song( formData ));
  }
});