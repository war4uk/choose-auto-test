var updateCar = require('../data/carsList').updateCar;

module.exports = Backbone.Model.extend({
  save: function (attrs, options) {
   updateCar({id: this.attributes.id, favourite: this.attributes.favourite});
  }
});