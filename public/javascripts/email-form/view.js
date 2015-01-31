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
            back: '.back-button',
            send: '.send-button'
        },
        triggers: {
            "click @ui.back": 'back'
        },
        _handleFormSubmit: function(e) {
            var sendEmail;

            e.preventDefault();

            this.trigger('send', syphon.serialize(this));

            this.ui.send.addClass("disabled");
        }
    });
});
