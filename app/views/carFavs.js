var CarInfoList = require('../collections/carInfo');
var CarInfoTable = require('./subviews/carInfoTable');
var getFavCarListPromise = require('../data/carsList').getFavCarListPromise;

module.exports = Marionette.LayoutView.extend({
  template: require('../templates/carInfo/carFavs.html'),

  regions: {
    layout: '.layout-hook',
    counter: '.counter-hook'
  },

  onShow: function () {
    var that = this;
    getFavCarListPromise().then(function (data) {
      var carInforTable = new CarInfoTable({
        collection: new CarInfoList(data.map(function (item) {
          return $.extend(item, { action: "remove" })
        })),
      });

      carInforTable.on("fav:removed", function (args) {
        that.showChildView('counter', new favsCounter({
          model: new Backbone.Model({ count: carInforTable.children.length })
        }));
      });

      var favsCounter = Marionette.ItemView.extend({
        template: require('../templates/carInfo/favsCounter.html'),
      });

      that.showChildView('layout', carInforTable);
      that.showChildView('counter', new favsCounter({
        model: new Backbone.Model({ count: data.length })
      }));
    });
  }
});
