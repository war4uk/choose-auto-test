var CarInfoRow = Marionette.ItemView.extend({
  template: require('../../templates/carInfoRow.html'),

  tagName: 'tr',
  className: 'car-info-row',
  triggers: {
    click: 'select:entry'
  },
  onRender: function () {
    var img = $('.car-info-image-preview', this.$el);
    var previewEl = $('.preview-on-hover', this.$el);
    previewEl.hover(
      function (event) {
        img.fadeIn(200)
      }, function (event) {
        img.fadeOut(0)
      });
  }
});


var CarList = Marionette.CompositeView.extend({
  template: require('../../templates/carInfoTable.html'),
  childView: CarInfoRow,
  childViewContainer: ".car-info-rows",
});

module.exports = CarList;