window._ = require('underscore'); // Backbone can't see it otherwise

window.Backbone = require('backbone');
window.Backbone.$ = window.$; // Use the jQuery from the script tag

window.Backbone.Marionette = require('backbone.marionette');
window.Marionette = window.Backbone.Marionette;