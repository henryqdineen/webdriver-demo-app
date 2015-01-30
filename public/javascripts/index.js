define(['email-form/view'], function(EmailForm) {
    var view = new EmailForm();

    $('#container').append(view.render().$el)
})