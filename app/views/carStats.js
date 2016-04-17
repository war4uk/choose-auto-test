var getFavCarListPromise = require('../data/carsList').getFavCarListPromise;

module.exports = Marionette.LayoutView.extend({
    template: require('../templates/carInfo/carStats.html'),

    regions: {
        layout: '.layout-hook'
    },
    onShow: function () {
        getFavCarListPromise().then(function (data) {
            var chart = c3.generate({
                bindto: '.layout-hook',
                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250],
                    ],
                    type: 'bar'
                },
                bar: {
                    width: {
                        ratio: 0.5 // this makes bar width 50% of length between ticks
                    }
                    // or
                    //width: 100 // this makes bar width 100px
                }
            });

        });

    }
});