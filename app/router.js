var CarInfoLayoutView = require('./views/carInfo');
var CarFavsLayoutView = require('./views/carFavs');
var CarStatsLayoutView = require('./views/carStats');


var Controller = Marionette.Object.extend({
  initialize: function () {
    this.options.regionManager = new Marionette.RegionManager({
      regions: {
        main: '#blog-hook'
      }
    });
  },

  carInfo: function (model) {
    var layout = new CarInfoLayoutView({
      carModel: model
    });

    this.getOption('regionManager').get('main').show(layout);
  },
  carFavs: function () {
    var layout = new CarFavsLayoutView();
    this.getOption('regionManager').get('main').show(layout);
  },
  carStats: function () {
    var layout = new CarStatsLayoutView();
    this.getOption('regionManager').get('main').show(layout);
  }
})

var Router = Marionette.AppRouter.extend({
  appRoutes: {
    'list': 'carInfo',
    'list/:model': 'carInfo',
    'fav': 'carFavs',
    'stats': 'carStats'
  },

  /** Initialize our controller with the options passed into the application,
      such as the initial posts list.
  */
  initialize: function () {
    this.controller = new Controller();
  }
});

module.exports = Router;