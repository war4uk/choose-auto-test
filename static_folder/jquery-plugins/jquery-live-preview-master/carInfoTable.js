var CarInfoRow = Marionette.ItemView.extend({
  template: require('../../templates/carInfoRow.html'),

  tagName: 'tr',
  className: 'car-info-row',
  triggers: {
    click: 'select:entry'
  },
  onRender: function () {
    var img = this.$el.find('.car-info-image-preview');
    
    img.hover(function(event) {
      var previewContainer = document.createElement('span');
      var p
    });
    $("a.preview").hover(function (e) {
      this.t = this.title;
      this.title = "";
      var c = (this.t != "") ? "<br/>" + this.t : "";
      $("body").append("<p id='preview'><img src='" + this.href + "' alt='Image preview' />" + c + "</p>");
      $("#preview")
        .css("top", (e.pageY - xOffset) + "px")
        .css("left", (e.pageX + yOffset) + "px")
        .fadeIn("fast");
    },
      function () {
        this.title = this.t;
        $("#preview").remove();
      });
    $("a.preview").mousemove(function (e) {
      $("#preview")
        .css("top", (e.pageY - xOffset) + "px")
        .css("left", (e.pageX + yOffset) + "px");
    });
  }
});


var CarList = Marionette.CompositeView.extend({
  template: require('../../templates/carInfoTable.html'),
  childView: CarInfoRow,
  childViewContainer: ".car-info-rows",
});

module.exports = CarList;