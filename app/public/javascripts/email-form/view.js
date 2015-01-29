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
            "click .compose-button": '_handleCompose',
            "submit form": '_handleSend'
        },
        initialize: function() {
            this.$el.addClass('default-mode');
        },
        render: function() {
            this.$el.html(this.template({}));

            return this;
        },
        _handleCompose: function() {
            this.$el.toggleClass('compose-mode', true);
            this.$el.toggleClass('default-mode', false);
        },
        _handleSend: function(e) {
            var sendEmail;

            e.preventDefault();

            sendEmail = $.ajax({
                url: 'send',
                type: 'POST',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(syphon.serialize(this))
            });

            this.$el.toggleClass('compose-mode', false);
            this.$el.toggleClass('sending-mode', true);

            sendEmail.then(_.bind(function() {
                this.$el.toggleClass('sending-mode', false);
                this.$el.toggleClass('success-mode', true);
            }, this));
        }
    });
});
