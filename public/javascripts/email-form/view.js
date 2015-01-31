define([
    'underscore',
    'jquery',
    'marionette',
    'syphon',
    'handlebars',
    'text!./template.hbs',
    'css!./style'
], function(_, $, Marionette, syphon, Handlebars, template) {
    return Marionette.ItemView.extend({
        className: 'email-form',
        template: Handlebars.compile(template),
        events: {
            "submit form": '_handleFormSubmit'
        },
        ui: {
            buttons: 'button'
        },
        triggers: {
            "click .back-button": 'back'
        },
        _handleFormSubmit: function(e) {
            e.preventDefault();

            this.trigger('send', syphon.serialize(this));

            this.ui.buttons.addClass("disabled");
        }
    });
});
