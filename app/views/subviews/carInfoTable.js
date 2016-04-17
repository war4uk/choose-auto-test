var CarInfoRow = Marionette.ItemView.extend({
  template: require('../../templates/carInfoRow.html'),

  tagName: 'tr',
  className: 'car-info-row',
  triggers: {
    "click .do-action": "doAction"
  },
  onRender: function () {
    var img = $('.car-info-image-preview', this.$el);
    var previewEl = $('.preview-on-hover .car-info-image-thumb', this.$el);
    previewEl.hover(
      function (event) {
        img.fadeIn(200)
      }, function (event) {
        img.fadeOut(0)
      });
  },

  initialize: function () {
    this.model.on('change', this.render, this);
  },

  onDoAction: function () {
    this.model.set({ favourite: this.model.attributes.action === "add" });
    this.model.save();
  }
});


var CarList = Marionette.CompositeView.extend({
  template: require('../../templates/carInfoTable.html'),
  childView: CarInfoRow,
  childViewContainer: ".car-info-rows",
  childEvents: {
    doAction: function (child) {
      if (!child.model.attributes.favourite) {
        var view = this.children.findByModel(child.model);
        this.removeChildView(view);
        this.triggerMethod('fav:removed');
      }
    }
  }
});

module.exports = CarList;