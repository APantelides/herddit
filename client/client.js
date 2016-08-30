var app = app || {};

$(function () {
  new app.ListView( );
  
  var initial = false;
  var view = '';
  SC.initialize({
    client_id: 'df667a382a815f03703f1df491f702ac'
  });

  $(document).on('click', '.songURL', function () {
    var url = $(this).attr('href');
    var player = $('#player');
    SC.oEmbed(url, {maxheight: 200, auto_play: true}).then(function(res) {
      console.log(res);
      $('#player').html(res.html);
    });
  });

  $('#searchField').on('change paste keyup', function() {
    $('.searchContainer').html('');
    SC.get('/tracks', {
      q: $(this).val(), public: true
    }).then(function(tracks) {
      new app.SearchListView(tracks);
    });
  });
});