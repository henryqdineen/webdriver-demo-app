define([
    'marionette',
    'email-form/view',
    'welcome-screen/view',
    'feedback-view/view'
], function(Marionette, EmailForm, WelcomeScreen, FeedbackView) {
    var region, welcomeScreen, feedbackView;

    region = new Marionette.Region({
        el: '#main'
    });

    welcomeScreen = new WelcomeScreen();
    feedbackView = new FeedbackView();

    region.show(welcomeScreen);

    welcomeScreen.on("compose", compose);
    feedbackView.on("compose", compose);

    function compose(){
        var emailForm;

        emailForm = new EmailForm();

        emailForm.on('back', function() {
            region.show(welcomeScreen);
        });

        emailForm.on('send', function(email) {
            var sendEmail;

            sendEmail = $.ajax({
                url: 'send',
                type: 'POST',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(email)
            });

            sendEmail.then(function() {
                region.show(feedbackView);
            })
        });

        region.show(emailForm, { preventDestroy: true });
    }
});