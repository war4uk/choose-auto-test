var CarInfoList = require('../collections/carInfo');
var CarInfoTable = require('./subviews/carInfoTable');
var getFavCarListPromise = require('../data/carsList').getFavCarListPromise;

module.exports = Marionette.LayoutView.extend({
  template: require('../templates/carInfo/carFavs.html'),

  regions: {
    layout: '.layout-hook'
  },
  
  onShow: function () {
    var that = this;
    getFavCarListPromise().then(function (data) {
      var carInforTable = new CarInfoTable({
        collection: new CarInfoList(data.map(function (item) {
          return $.extend(item, { action: "remove" })
        })),
      });
      that.showChildView('layout', carInforTable);
    });
  }
});
