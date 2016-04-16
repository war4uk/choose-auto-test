var Entry = Marionette.LayoutView.extend({
  template: require('../templates/blog/item.html'),
  tagName: 'span',
});


module.exports = Marionette.LayoutView.extend({
  template: require('../templates/carInfo/carList.html'),

  regions: {
    layout: '.layout-hook'
  },

  onShow: function () {
    var entry = new Entry();
    this.showChildView('layout', entry);
  }
});
