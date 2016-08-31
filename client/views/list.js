var app = app || {};
app.ListView = Backbone.View.extend({
  el: '#songs',

  events: {
    'click #submitSong': 'addSong'
  },

  initialize: function ( ) {
    this.collection = new app.List( );
    this.collection.fetch();
    this.render();
    this.listenTo( this.collection, 'add', this.renderSong );
    this.listenTo( this.collection, 'fetch', this.render);
    this.listenTo( this.collection, 'change', this.sort);
    this.listenTo(app.ResultView.collection, 'change', this.render );
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
      $(el).val('');
    });
    this.collection.create( formData );
  },
  sort: function () {
    this.clear();
    this.collection.sort();
    this.render();
  },
  clear: function () {
    $('.songContainer').remove();
  }
});