define([
    'marionette',
    'handlebars',
    'text!./template.hbs',
    'css!./style'
], function(Marionette, Handlebars, template) {
    return Marionette.ItemView.extend({
        className: 'welcome-screen',
        template: Handlebars.compile(template),
        triggers: {
            "click .compose-button": 'compose'
        }
    });
});
