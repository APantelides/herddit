var app = app || {};

$(function () {
  var soundcloud = 'https://soundcloud.com/';
  var songData = [
  {title: 'Chop Suey!', artist: 'System Of A Down', genre: 'metal', url: soundcloud + 'nico-favor/system-of-a-down-chop-suey'},
  {title: 'Jessica', artist: 'Allman Brothers', genre: 'rock', url: soundcloud + 'yoshikazu-nakamura-1/jessica-allman-brothers-band-garageband'},
  {title: 'Trippd Floyd Instrumental', artist: 'AC The Coolest', genre: 'electro', url: soundcloud + 'acthecoolest/trippd-floyd-instrumental'},
  {title: 'Rufianos - Instrumental', artist: '12os Pithikos', genre: 'hiphop', url: soundcloud + 'ijessejames/12os-pithikos-roufianos-free-instrumental'},
  ];

  new app.ListView( songData );
});