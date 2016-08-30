var app = app || {};

$(function () {
  new app.ListView( );

  SC.initialize({
    client_id: 'df667a382a815f03703f1df491f702ac'
  });

  $(document).on('click', '.songURL', function () {
    var url = $(this).attr('href');
    var player = $('#player');
    SC.oEmbed(url, {maxheight: 200, auto_play: false}).then(function(res) {
      console.log(res);
      $('#player').html(res.html);
    });
  });

  $('#searchField').on('change paste keyup', function() {
    SC.get('/tracks', {
      q: $(this).val(), license: 'cc-by-sa'
    }).then(function(tracks) {
      console.log(tracks);
    });
  });
});