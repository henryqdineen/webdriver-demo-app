define(['email-form/view'], function(EmailForm) {
    var view = new EmailForm();

    $('#test').append(view.render().$el)
})