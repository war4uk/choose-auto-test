var CarInfoList = require('../collections/carInfo');
var CarInfoTable = require('./subviews/carInfoTable');
var getCarsListPromise = require('../data/carsList').getCarListPromise;

module.exports = Marionette.LayoutView.extend({
  template: require('../templates/carInfo/carList.html'),

  regions: {
    tableContent: '.table-hook',
  },

  onShow: function () {
    var that = this;
    getCarsListPromise(this.options.carModel).then(function (data) {
      var carInforTable = new CarInfoTable({
        collection: new CarInfoList(data.map(function (item) {
          return $.extend(item, { action: "add" })
        })),
      });
      that.showChildView('tableContent', carInforTable);
    });
  }
});
