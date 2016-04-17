var getVendorStatsPromise = require('../data/carsList').getVendorStatsPromise;

module.exports = Marionette.LayoutView.extend({
    template: require('../templates/carInfo/carStats.html'),

    regions: {
        layout: '.layout-hook'
    },
    onShow: function () {
        getVendorStatsPromise().then(function (data) {
            console.log(data);
            var xNames = Object.getOwnPropertyNames(data);
            var xValues = xNames.map(function (vendorName) { return data[vendorName] });
            var types = {};

            types['Total additions to fav'] = 'bar';
            xValues.unshift('Total additions to fav');
            xNames.unshift('x');

            var axis = {
                x: {
                    type: 'category'
                }
            };

            var chartData = {
                x: 'x',
                columns: [
                    xNames,
                    xValues,
                ],
                types: types,
            };


            console.log(xValues);
            //Object.values(data).unshift('Total additions to fav');
            var chart = c3.generate({
                bindto: '.layout-hook',
                data: chartData,
                axis: axis,
                bar: {
                    width: {
                        ratio: 0.5
                    }
                }
            });

        });

    }
});