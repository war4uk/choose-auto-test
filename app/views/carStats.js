module.exports = Marionette.LayoutView.extend({
  template: require('../templates/carInfo/carStats.html'),

  regions: {
    layout: '.layout-hook'
  }
});