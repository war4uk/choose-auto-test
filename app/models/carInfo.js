var updateCar = require('../data/carsList').updateCar;

module.exports = Backbone.Model.extend({
  save: function (attrs, options) {
    var isFav = this.attributes.favourite;
    var selectCount = this.attributes.selectCount;
     
     
   if (!this.previous('favourite') && isFav) {
     selectCount = selectCount + 1;
   }
   updateCar({id: this.attributes.id, favourite: this.attributes.favourite, selectCount: selectCount});
  }
});