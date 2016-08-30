var app = app || {};

app.List = Backbone.Collection.extend({
  model: app.Song,
  url: '/data',
  comparator: function (a, b) {
    if (a.get('upvotes') > b.get('upvotes')) {
      return -1;
    } else if (a.get('upvotes') === b.get('upvotes')) {
      return 0;
    } else {
      return 1;
    }
  }
});